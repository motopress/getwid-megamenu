import MPMegaMenuColorPalette from '../custom-controls/color-palette';

const { __ } = wp.i18n;
const { useRef, useEffect } = wp.element;
const {
	InnerBlocks,
	BlockControls,
	InspectorControls,
	ColorPalette,
	FontSizePicker,
	withFontSizes,
	withColors,
	PanelColorSettings
} = wp.blockEditor;
const {
	PanelBody,
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	RangeControl,
	BaseControl,
	ColorIndicator,
	ToggleControl
} = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;

function Controls(args) {
	const {
		selectedBlockHasDescendants,
		isImmediateParentOfSelectedBlock,
		isSelected,
		setAttributes,
		className,
		attributes,
		menuItemFontSize,
		setMenuItemFontSize,
		backgroundColor,
		setBackgroundColor,
		dropdownBackgroundColor,
		setDropdownBackgroundColor,
		menuItemColor,
		setMenuItemColor,
		updateChildBlocksAttributes
	} = args;

	function setAlignment(alignment) {
		return () => {
			const itemsJustification =
				attributes.itemsJustification === alignment ? undefined : alignment;
			setAttributes( {
				itemsJustification,
			} );
		}
	}

	function expandDropdown() {
		setAttributes( {
			expandDropdown: !attributes.expandDropdown,
		} );
	}

	useEffect( () => {
		updateChildBlocksAttributes( {
			fontSize: menuItemFontSize.slug,
			customFontSize: menuItemFontSize.slug ? undefined : menuItemFontSize.size,
		} )
	}, [menuItemFontSize.size] );


	useEffect( () => {
		updateChildBlocksAttributes( {
			textColor: menuItemColor.slug,
			customTextColor: menuItemColor.slug ? undefined : menuItemColor.color,
		} )
	}, [menuItemColor.color] );

	useEffect( () => {
		updateChildBlocksAttributes( {
			dropdownBackgroundColor: dropdownBackgroundColor.slug,
			customDropdownBackgroundColor: dropdownBackgroundColor.slug ? undefined : dropdownBackgroundColor.color
		} )
	}, [dropdownBackgroundColor.color] );

	return(
		<>
			<BlockControls>
				<Toolbar
					icon={ attributes.itemsJustification ? `editor-align${attributes.itemsJustification}` : "editor-alignleft" }
					label={ __( 'Change items justification' ) }
					isCollapsed
					controls={ [
						{
							icon: "editor-alignleft",
							title: __( 'Justify items left' ),
							isActive: 'left' === attributes.itemsJustification,
							onClick: setAlignment( 'left' ),
						},
						{
							icon: "editor-aligncenter",
							title: __( 'Justify items center' ),
							isActive:
								'center' === attributes.itemsJustification,
							onClick: setAlignment( 'center' ),
						},
						{
							icon: "editor-alignright",
							title: __( 'Justify items right' ),
							isActive: 'right' === attributes.itemsJustification,
							onClick: setAlignment( 'right' ),
						},
					] }
				/>
				<ToolbarGroup>
					<ToolbarButton
						name="expand"
						icon={ attributes.expandDropdown ? "editor-contract" : "editor-expand" }
						title={__('Expand dropdown')}
						onClick={expandDropdown}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Width Settings' ) }>
					<RangeControl
						label={ __( 'Maximum width of top-level menu in pixels' ) }
						value={ attributes.menuMaxWidth }
						onChange={ ( value ) => setAttributes( { menuMaxWidth: value } ) }
						min={ 0 }
						max={ 2000 }
					/>
					<RangeControl
						label={ __( 'Maximum width of dropdown in pixels' ) }
						value={ attributes.dropdownMaxWidth }
						onChange={ ( dropdownMaxWidth ) => setAttributes( { dropdownMaxWidth } ) }
						min={ 0 }
						max={ 2000 }
					/>
					<RangeControl
						label={ __( 'Maximum width of dropdown content in pixels' ) }
						value={ attributes.dropdownContentMaxWidth }
						onChange={ ( dropdownContentMaxWidth ) => setAttributes( { dropdownContentMaxWidth } ) }
						min={ 0 }
						max={ 2000 }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Menu Styles' ) }>
					<MPMegaMenuColorPalette
						label={__('Menu Background Color')}
						disableCustomColors={ false }
						color={ backgroundColor.color }
						onChange={ setBackgroundColor }
						clearable={ true }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Menu Item Styles' ) }>
					<FontSizePicker
						value={ menuItemFontSize.size }
						onChange={ setMenuItemFontSize }
					/>
					<MPMegaMenuColorPalette
						label={__('Menu Item Color')}
						disableCustomColors={ false }
						color={ menuItemColor.color }
						onChange={ setMenuItemColor }
						clearable={ true }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Dropdown Styles' ) }>
					<ToggleControl
						label={ __( 'Expand dropdown' ) }
						help={ attributes.expandDropdown ? __('Dropdown width same as window width.') : __('Dropdown width same as menu width.') }
						checked={ attributes.expandDropdown }
						onChange={ expandDropdown }
					/>
					<MPMegaMenuColorPalette
						label={__('Dropdown Background Color')}
						disableCustomColors={ false }
						color={ dropdownBackgroundColor.color }
						onChange={ setDropdownBackgroundColor }
						clearable={ true }
					/>
				</PanelBody>
			</InspectorControls>

		</>
	)
}

export default compose( [
	withColors( {
		backgroundColor: 'background-color',
		dropdownBackgroundColor: 'background-color',
		menuItemColor: 'color',
	} ),
	withFontSizes( 'menuItemFontSize' ),
	withDispatch( (dispatch, ownProps, registry) => ( {
		updateChildBlocksAttributes( attributes ) {
			const { updateBlockAttributes } = dispatch( 'core/block-editor' );
			const {
				getBlocksByClientId
			} = registry.select( 'core/block-editor' );

			const menuItems = getBlocksByClientId(ownProps.clientId)[0].innerBlocks;

			menuItems.forEach( ( menuItem ) => {
				updateBlockAttributes( menuItem.clientId, { ...attributes } );
			})
		}
	} ) )
] ) ( Controls );