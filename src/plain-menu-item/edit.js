/**
 * External dependencies
 */
import classnames from 'classnames';
import Controls from "./controls";

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
		parentAttributes,
		parentItemClientId
	} = props;
	const {
		linkTarget,
		rel,
		text,
		url,
	} = attributes;

	const itemLabelPlaceholder = __( 'Add link…' );

    const [isItemDropdownOpened, setIsItemDropdownOpened] = useState(hasDescendants);

	const isMenuItemSelected = isSelected || isParentOfSelectedBlock;
	const menuItemHasChildrens = isItemDropdownOpened || hasDescendants;
	const showDropdown = isMenuItemSelected && menuItemHasChildrens;

	const itemClasses = classnames(
		'wp-block-getwid-plain-menu-item',
		'gw-pm-item',
		{
			'has-child': hasDescendants,
			'has-child-selected': isParentOfSelectedBlock,
			'is-opened': showDropdown
		}
	);

	useEffect( () => {
		setAttributes( {
			fontSize: parentItemClientId ? undefined : parentAttributes.menuItemFontSize,
			customFontSize: parentItemClientId ? undefined : parentAttributes.customMenuItemFontSize,
			textColor: parentItemClientId ? undefined : parentAttributes.menuItemColor,
			customTextColor: parentItemClientId ? undefined : parentAttributes.customMenuItemColor,
		} );
	}, [] );

	const itemLinkClasses = classnames(
		'gw-pm-item__link',
		{
			'has-text-color': attributes.textColor || attributes.customTextColor,
			[ `has-${ attributes.textColor }-color` ]: !! attributes.textColor,
			[ `has-${ attributes.fontSize }-font-size` ]: !! attributes.fontSize
		}
	);

	const itemLinkStyles = {
		color: attributes.customTextColor,
		fontSize: attributes.customFontSize
	};

	return (
		<>
			<div className={ itemClasses }>
				<div className={ itemLinkClasses } style={ itemLinkStyles }>
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
								<span className="gw-pm-item__dropdown-icon">
									<span className="dashicons dashicons-arrow-down"></span>
								</span>
							)
						}
					</a>
				</div>
				{
					(isMenuItemSelected) && (
						<div className='gw-pm-item__dropdown'>
							<div className='gw-pm-item__dropdown-content'>
								<InnerBlocks
									allowedBlocks={ [ 'getwid-megamenu/plain-menu-item' ] }
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
			<Controls
				{ ...props }
				insertPlainMenuItem={ insertPlainMenuItem }
			/>

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
			getBlockParentsByBlockName( clientId, 'getwid-megamenu/plain-menu' )
		);
		const parentItemClientId = head(
			getBlockParentsByBlockName( clientId, 'getwid-megamenu/plain-menu-item' )
		);

		const parentAttributes = getBlock(rootBlockClientId).attributes;

		return {
			isParentOfSelectedBlock,
			isImmediateParentOfSelectedBlock,
			selectedBlockHasDescendants,
			hasDescendants,
			rootBlockClientId,
			clientId,
			parentAttributes,
			parentItemClientId
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

				const blockToInsert = createBlock( 'getwid-megamenu/plain-menu-item' );

				insertBlock( blockToInsert, insertionPoint, ownProps.clientId );
			},
		};
	} ),
])(MenuItemEdit);
