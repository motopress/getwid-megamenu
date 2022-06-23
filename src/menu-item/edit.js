/**
 * External dependencies
 */
import classnames from 'classnames';
import Controls from "./controls";

/**
 * WordPress dependencies
 */
const { head, isEqual } = lodash;
const { __ } = wp.i18n;
const {
	useState,
	useEffect
} = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const {
	RichText,
	InnerBlocks,
} = wp.blockEditor;

/**
 * Internal dependencies
 */
function MenuItemEdit( props ) {
	const {
		attributes,
		setAttributes,
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
		text,
	} = attributes;

	const itemLabelPlaceholder = __( 'Add link…' );
	const [isItemDropdownOpened, setIsItemDropdownOpened] = useState(hasDescendants);
	const isMenuItemSelected = isSelected || isParentOfSelectedBlock;
	const menuItemHasChildrens = isItemDropdownOpened || hasDescendants;
	const showDropdown = isMenuItemSelected && menuItemHasChildrens;
	const [dropdownPosition, setDropdownPosition] = useState( { left:0, width: 'auto' } );

	const toggleItemDropdown = () => {
		setIsItemDropdownOpened(!isItemDropdownOpened);
		if(hasDescendants){
			updateInnerBlocks();
		}
		return false;
	};

	const updateDropdownPosition = () => {
		let newDropdownPosition = {};
		let rootBlockNode;
		const blockNode = document.querySelector( '[data-block="' + clientId + '"]' );
		if ( blockNode !== null ){
			const blockCoords = blockNode.getBoundingClientRect();

			if ( parentAttributes.expandDropdown ) {
				rootBlockNode = document.querySelector('.editor-styles-wrapper');
			} else {
				rootBlockNode = document.querySelector( '[data-block="' + rootBlockClientId + '"] .wp-block-getwid-megamenu' );
			}
			const rootCoords = rootBlockNode.getBoundingClientRect();

			let left = -(blockCoords.x - rootCoords.x);

			if ( parentAttributes.dropdownMaxWidth && rootCoords.width > parentAttributes.dropdownMaxWidth ) {
				left = left + (rootCoords.width - parentAttributes.dropdownMaxWidth) / 2;
			}

			newDropdownPosition = {left: left, width: rootCoords.width};

			if( !isEqual(newDropdownPosition, dropdownPosition) ) {
				setDropdownPosition(newDropdownPosition);
			}
		}
	};

	useEffect( () => {
		updateDropdownPosition();
	}, [ isSelected ] );

	useEffect( () => {
		window.addEventListener('resize', updateDropdownPosition);
	}, [] );

	useEffect( () => {
		setAttributes( {
			fontSize: parentAttributes.menuItemFontSize,
			customFontSize: parentAttributes.customMenuItemFontSize,
			textColor: parentAttributes.menuItemColor,
			customTextColor: parentAttributes.customMenuItemColor,
		} );
	}, [] );

	const dropdownWrapperStyle = {
		left: dropdownPosition.left,
		width: dropdownPosition.width,
		maxWidth: parentAttributes.dropdownMaxWidth
	};

	const dropdownStyle = {
		backgroundColor: attributes.customDropdownBackgroundColor
	};

	const dropdownContentStyle = {
		maxWidth: parentAttributes.dropdownContentMaxWidth
	};

	const dropdownClasses = classnames('gw-mm-item__dropdown', {
		'has-background': attributes.dropdownBackgroundColor || attributes.customDropdownBackgroundColor,
		[ `has-${ attributes.dropdownBackgroundColor }-background-color` ]: !! attributes.dropdownBackgroundColor,
	});

	const itemClasses = classnames(
		'wp-block-getwid-megamenu-item',
		'gw-mm-item',
		{
			'has-child': hasDescendants,
			'is-opened': showDropdown
		}
	);

	const itemLinkClasses = classnames(
		'gw-mm-item__link',
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
			<div className={itemClasses}>
				<div className={itemLinkClasses} style={itemLinkStyles}>
					<a
						href="#"
						onClick={ () => {
							return false;
						} }
					>
						<RichText
							placeholder={ itemLabelPlaceholder }
							value={ text }
							onChange={ ( value ) => setAttributes( { text: value } ) }
							withoutInteractiveFormatting
							onReplace={ onReplace }
							onMerge={ mergeBlocks }
							identifier="text"/>
						{
							(menuItemHasChildrens) && (
								<span className="gw-mm-item__dropdown-icon">
									<span className="dashicons dashicons-arrow-down"></span>
								</span>
							)
						}
					</a>
				</div>
				{
					(showDropdown) && (
						<div className='gw-mm-item__dropdown-wrapper' style={ dropdownWrapperStyle }>
							<div className={ dropdownClasses } style={ dropdownStyle }>
								<div className='gw-mm-item__dropdown-content' style={ dropdownContentStyle }>
									<InnerBlocks/>
								</div>
							</div>
						</div>
					)
				}
			</div>
			<Controls
				{ ...props }
				toggleItemDropdown={ toggleItemDropdown }
				isItemDropdownOpened={ isItemDropdownOpened }
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
			getBlock
		} = select('core/block-editor');
		const { clientId } = ownProps;
		const isParentOfSelectedBlock = hasSelectedInnerBlock(clientId, true);
		const hasDescendants = !!getClientIdsOfDescendants([clientId])
			.length;
		const rootBlockClientId = head(
			getBlockParentsByBlockName( clientId, 'getwid-megamenu/menu' )
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
