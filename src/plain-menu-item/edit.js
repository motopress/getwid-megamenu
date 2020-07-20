/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { head, isEqual, escape } = lodash;
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
	    text,
        setAttributes,
        opensInNewTab,
        onToggleOpenInNewTab,
	    toggleItemDropdown,
        isItemDropdownOpened,
	    insertPlainMenuItem,
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

	useEffect( () => {
		if ( isSelected && ! url ) {
			setIsURLPickerOpen( true );
		}
	}, [ isSelected ] );

	const linkControl = isURLPickerOpen && (
		<Popover position="bottom center" onClose={() => setIsURLPickerOpen(false)}>
			<__experimentalLinkControl
				className="wp-block-plain-menu-item-link__inline-link-input"
				value={{
					url,
					opensInNewTab
				}}
				onChange={ ( {
					title: newTitle = '',
	                url: newURL = '',
	                opensInNewTab: newOpensInNewTab,
                } ) => {
					setAttributes({
						url: newURL,
						text: ( () => {
							console.log({text, newTitle});
							if ( text ) {
								return text;
							}

							if ( newTitle !== '' && text !== newTitle) {
								return escape( newTitle );
							}
						} )()
					});

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
	                    onClick={ insertPlainMenuItem }
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
		isImmediateParentOfSelectedBlock,
		hasDescendants,
		updateInnerBlocks,
		rootBlockClientId,
		insertPlainMenuItem,
		selectedBlockHasDescendants,
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
		'wp-block-mp-plain-menu-item',
		{
			'has-child': hasDescendants,
			'has-child-selected': isParentOfSelectedBlock,
			'is-opened': showDropdown
		}
	);

	return (
		<>
			<div className={itemClasses}>
				<div className='wp-block-mp-plain-menu-item__link'>
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
								<span className="wp-block-mp-plain-menu-item__dropdown-icon">
									<span className="dashicons dashicons-arrow-down"></span>
								</span>
							)
						}
					</a>
				</div>
				{
					(isMenuItemSelected) && (
						<div className='wp-block-mp-plain-menu-item__dropdown'>
							<div className='wp-block-mp-plain-menu-item__dropdown-content'>
								<InnerBlocks
									allowedBlocks={ [ 'mp-megamenu/plain-menu-item' ] }
									renderAppender={ ( isSelected && hasDescendants ) ||
									( isImmediateParentOfSelectedBlock &&
										! selectedBlockHasDescendants )
										? InnerBlocks.DefaultAppender
										: false}
								/>
							</div>
						</div>
					)
				}
			</div>

			<MenuItemToolbar
                url={url}
                text={text}
				insertPlainMenuItem={insertPlainMenuItem}
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
			getSelectedBlockClientId,
			getBlock
		} = select('core/block-editor');
		const {clientId} = ownProps;
		const isParentOfSelectedBlock = hasSelectedInnerBlock(clientId, true);
		const isImmediateParentOfSelectedBlock = hasSelectedInnerBlock(
			clientId,
			false
		);
		const hasDescendants = !!getClientIdsOfDescendants([clientId])
			.length;
		const selectedBlockId = getSelectedBlockClientId();
		const selectedBlockHasDescendants = !! getClientIdsOfDescendants( [
			selectedBlockId,
		] )?.length;
		const rootBlockClientId = head(
			getBlockParentsByBlockName( clientId, 'mp-megamenu/plain-menu' )
		);

		const parentAttributes = getBlock(rootBlockClientId).attributes;

		return {
			isParentOfSelectedBlock,
			isImmediateParentOfSelectedBlock,
			selectedBlockHasDescendants,
			hasDescendants,
			rootBlockClientId,
			clientId,
			parentAttributes
		};
	}),
	withDispatch( ( dispatch, ownProps, registry ) => {
		return {
			clearInnerBlocks( blocks ) {
				dispatch( 'core/block-editor' ).replaceInnerBlocks(
					ownProps.clientId,
					[],
					false
				);
			},
			insertPlainMenuItem() {
				const { insertBlock } = dispatch( 'core/block-editor' );

				const { getClientIdsOfDescendants } = registry.select(
					'core/block-editor'
				);
				const navItems = getClientIdsOfDescendants( [ ownProps.clientId ] );
				const insertionPoint = navItems.length ? navItems.length : 0;

				const blockToInsert = createBlock( 'mp-megamenu/plain-menu-item' );

				insertBlock( blockToInsert, insertionPoint, ownProps.clientId );
			},
		};
	} ),
])(MenuItemEdit);
