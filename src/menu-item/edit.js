/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { head, isEqual } = lodash;
const {__} = wp.i18n;
const {useCallback, useState, useRef, useEffect, useLayoutEffect} = wp.element;
const {compose} = wp.compose;
const {withSelect, withDispatch} = wp.data;
const {
	KeyboardShortcuts,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
	Popover,
} = wp.components;
const {
	BlockControls,
	InspectorControls,
	RichText,
	InnerBlocks,
	__experimentalBlock,
	__experimentalLinkControl,
} = wp.blockEditor;
const {rawShortcut, displayShortcut} = wp.keycodes;
const {createBlock} = wp.blocks;

/**
 * Internal dependencies
 */

const NEW_TAB_REL = 'noreferrer noopener';

function MenuItemToolbar(args) {
    const {
        isSelected,
        url,
        setAttributes,
        opensInNewTab,
        onToggleOpenInNewTab,
	    toggleItemDropdown,
        isItemDropdownOpened,
	    hasDescendants
    } = args;
	const [isURLPickerOpen, setIsURLPickerOpen] = useState(false);

	const isURLSet = !(url === undefined || url.trim().length === 0);

	const openLinkControl = () => {
		setIsURLPickerOpen(true);
		return false; // prevents default behaviour for event
	};

	const unlinkItem = () => {
		setAttributes( {
			url: undefined,
			linkTarget: undefined,
			rel: undefined,
		} );
		setIsURLPickerOpen( false );
	};

	const linkControl = isURLPickerOpen && (
		<Popover position="top center" onClose={() => setIsURLPickerOpen(false)}>
			<__experimentalLinkControl
				className="wp-block-navigation-link__inline-link-input"
				value={{
					url,
					opensInNewTab
				}}
				onChange={ ( {
	                url: newURL = '',
	                opensInNewTab: newOpensInNewTab,
                } ) => {
					setAttributes({url: newURL});

					if (opensInNewTab !== newOpensInNewTab) {
						onToggleOpenInNewTab(newOpensInNewTab);
					}
				} }
			/>
		</Popover>
	);

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton name="link" icon="admin-links" title={__('Edit Link')} onClick={openLinkControl} isActive={isURLSet}/>
					<ToolbarButton name="unlink" icon="editor-unlink" title={__('Unlink')} onClick={unlinkItem} isDisabled={!isURLSet}/>
				</ToolbarGroup>
				<ToolbarGroup>
	                <ToolbarButton
	                    name="submenu"
	                    icon="download"
	                    title={ __( 'Add submenu' ) }
	                    onClick={ toggleItemDropdown }
	                />
				</ToolbarGroup>
			</BlockControls>
			{linkControl}
		</>
	);
}

function MenuItemEdit(props) {
	const {
		attributes,
		setAttributes,
		className,
		isSelected,
		onReplace,
		mergeBlocks,
		isParentOfSelectedBlock,
		hasDescendants,
		updateInnerBlocks,
		rootBlockClientId,
		clientId,
		parentAttributes
	} = props;
	const {
		linkTarget,
		rel,
		text,
		url,
	} = attributes;

	const onSetLinkRel = useCallback(
		(value) => {
			setAttributes({rel: value});
		},
		[setAttributes]
	);

	const itemLabelPlaceholder = __( 'Add link…' );

    const [isItemDropdownOpened, setIsItemDropdownOpened] = useState(hasDescendants);

    const toggleItemDropdown = () => {
	    setIsItemDropdownOpened(!isItemDropdownOpened);
	    if(hasDescendants){
		    updateInnerBlocks();
	    }
        return false; // prevents default behaviour for event
    };

	const onToggleOpenInNewTab = useCallback(
		(value) => {
			const newLinkTarget = value ? '_blank' : undefined;

			let updatedRel = rel;
			if (newLinkTarget && !rel) {
				updatedRel = NEW_TAB_REL;
			} else if (!newLinkTarget && rel === NEW_TAB_REL) {
				updatedRel = undefined;
			}

			setAttributes({
				linkTarget: newLinkTarget,
				rel: updatedRel,
			});
		},
		[rel, setAttributes]
	);

	const isMenuItemSelected = isSelected || isParentOfSelectedBlock;
	const menuItemHasChildrens = isItemDropdownOpened || hasDescendants;
	const showDropdown = isMenuItemSelected && menuItemHasChildrens;

	const itemClasses = classnames(
		'wp-block-mp-megamenu-item',
		{
			'has-child': hasDescendants,
			'is-opened': showDropdown
		}
	);

	const [dropdownPosition, setDropdownPosition] = useState({left:0, width: 'auto'});

	const updateDropdownPosition = () => {
		const rootBlockNode = document.querySelector( '[data-block="' + rootBlockClientId + '"] .wp-block-mp-megamenu' );
		const blockNode = rootBlockNode.querySelector( '[data-block="' + clientId + '"]' );
		const rootCoords = rootBlockNode.getBoundingClientRect();
		const blockCoords = blockNode.getBoundingClientRect();
		let newDropdownPosition = {};

		if( parentAttributes.expandDropdown ) {
			const editorNodeCoords = document.querySelector('.editor-styles-wrapper').getBoundingClientRect();
			const left = blockCoords.x - editorNodeCoords.x;
			newDropdownPosition = {left: -left, width: editorNodeCoords.width};
		} else {
			const left = blockCoords.x - rootCoords.x;
			newDropdownPosition = {left: -left, width: rootCoords.width};
		}

		if( !isEqual(newDropdownPosition, dropdownPosition) ) {
			setDropdownPosition(newDropdownPosition);
		}

	};

	useEffect(() => {
		updateDropdownPosition();
	}, [isSelected]);

	useEffect(() => {
		window.addEventListener('resize', updateDropdownPosition);
	}, []);

	const dropdownStyle = {
		left: dropdownPosition.left,
		width: dropdownPosition.width
	};

	return (
		<>
			<div className={itemClasses}>
				<div className='wp-block-mp-megamenu-item__link'>
					<a
						href="#"
						onClick={ () => {
							return false;
						} }
					>
						<RichText
							placeholder={itemLabelPlaceholder}
							value={text}
							onChange={(value) => setAttributes({text: value})}
							withoutInteractiveFormatting
							onReplace={onReplace}
							onMerge={mergeBlocks}
							identifier="text"/>
						{
							(menuItemHasChildrens) && (
								<span className="wp-block-mp-megamenu-item__dropdown-icon">
									<span className="dashicons dashicons-arrow-down"></span>
								</span>
							)
						}
					</a>
				</div>
				{
					(showDropdown) && (
						<div className='wp-block-mp-megamenu-item__dropdown-wrapper' style={dropdownStyle}>
							<div className='wp-block-mp-megamenu-item__dropdown'>
								<InnerBlocks/>
							</div>
						</div>
					)
				}
			</div>

			<MenuItemToolbar
                url={url}
				toggleItemDropdown={toggleItemDropdown}
                isItemDropdownOpened={isItemDropdownOpened}
                setAttributes={setAttributes}
                isSelected={isSelected}
				hasDescendants
                opensInNewTab={linkTarget === '_blank'}
                onToggleOpenInNewTab={onToggleOpenInNewTab}/>
			<InspectorControls>
				<PanelBody title={__('Link settings')}>
					<ToggleControl label={__('Open in new tab')} onChange={onToggleOpenInNewTab} checked={linkTarget === '_blank'}/>
					<TextControl label={__('Link rel')} value={rel || ''} onChange={onSetLinkRel}/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}

export default compose([
	withSelect((select, ownProps) => {
		const {
			hasSelectedInnerBlock,
			getClientIdsOfDescendants,
			getBlockParentsByBlockName,
			getBlock
		} = select('core/block-editor');
		const {clientId} = ownProps;
		const isParentOfSelectedBlock = hasSelectedInnerBlock(clientId, true);
		const hasDescendants = !!getClientIdsOfDescendants([clientId])
			.length;
		const rootBlockClientId = head(
			getBlockParentsByBlockName( clientId, 'mp-megamenu/menu' )
		);

		const parentAttributes = getBlock(rootBlockClientId).attributes;

		return {
			isParentOfSelectedBlock,
			hasDescendants,
			rootBlockClientId,
			clientId,
			parentAttributes
		};
	}),
	withDispatch( ( dispatch, { clientId } ) => {
		return {
			updateInnerBlocks( blocks ) {
				dispatch( 'core/block-editor' ).replaceInnerBlocks(
					clientId,
					[],
					false
				);
			},
		};
	} ),
])(MenuItemEdit);
