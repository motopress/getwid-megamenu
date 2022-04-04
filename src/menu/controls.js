import MPMegaMenuColorPalette from '../custom-controls/color-palette';

const { __ } = wp.i18n;
const { useEffect } = wp.element;
const {
	BlockControls,
	InspectorControls,
	withFontSizes,
	withColors,
	getFontSizeObjectByValue
} = wp.blockEditor;
const {
	PanelBody,
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	RangeControl,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	FontSizePicker
} = wp.components;
const { withDispatch, withSelect } = wp.data;
const { compose } = wp.compose;

function Controls(args) {
	const {
		setAttributes,
		attributes,
		menuItemFontSize,
		menuItemColor,
		setMenuItemColor,
		updateChildBlocksAttributes,
		fontSizes
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

	const setMenuItemFontSize = ( value ) => {
		const fontSizeSlug = getFontSizeObjectByValue( fontSizes, value ).slug;

		setAttributes( {
			menuItemFontSize: fontSizeSlug,
			customMenuItemFontSize: fontSizeSlug ? undefined : value?.toString(),
		} );
	};

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
						title={ __( 'Expand dropdown' ) }
						onClick={ expandDropdown }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Styles' ) } initialOpen={ true }>
					<FontSizePicker
						fontSizes={ fontSizes }
						value={ menuItemFontSize.size }
						onChange={ setMenuItemFontSize }
					/>
					<MPMegaMenuColorPalette
						label={ __('Menu Item Color') }
						disableCustomColors={ false }
						color={ menuItemColor.color }
						onChange={ setMenuItemColor }
						clearable={ true }
					/>
					<ToggleControl
						label={ __( 'Expand dropdown' ) }
						help={ attributes.expandDropdown ? __('Dropdown width same as window width.') : __('Dropdown width same as menu width.') }
						checked={ attributes.expandDropdown }
						onChange={ expandDropdown }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Width Settings' ) } initialOpen={ false }>
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
				<PanelBody title={ __( 'Responsive Settings' ) } initialOpen={ false }>
					<RangeControl
						label={ __( 'Mobile device breakpoint in pixels' ) }
						value={ attributes.responsiveBreakpoint }
						onChange={ ( responsiveBreakpoint ) => setAttributes( { responsiveBreakpoint } ) }
						min={ 0 }
						max={ 2000 }
					/>
					<ToggleControl
						label={ __( 'Collapse on mobile?' ) }
						help={ attributes.collapseOnMobile ? __('Menu will be transformed to burger.') : __('Menu will be as it is.') }
						checked={ attributes.collapseOnMobile }
						onChange={ ( collapseOnMobile ) => setAttributes( { collapseOnMobile } ) }
					/>
					<BaseControl
						label={ __( 'Toggle button alignment' ) }
					>
						<ButtonGroup>
							<Button
								icon="editor-alignleft"
								isSecondary
								onClick={ () => { setAttributes( { toggleButtonAlignment: 'left' } ) } }
								isPrimary={ 'left' === attributes.toggleButtonAlignment }
							/>
							<Button
								icon="editor-aligncenter"
								isSecondary
								onClick={ () => { setAttributes( { toggleButtonAlignment: 'center' } ) } }
								isPrimary={ 'center' === attributes.toggleButtonAlignment }
							/>
							<Button
								icon="editor-alignright"
								isSecondary
								onClick={ () => { setAttributes( { toggleButtonAlignment: 'right' } ) } }
								isPrimary={ 'right' === attributes.toggleButtonAlignment }
							/>
						</ButtonGroup>
					</BaseControl>
				</PanelBody>
			</InspectorControls>

		</>
	)
}

export default compose( [
	withColors( {
		menuItemColor: 'color',
	} ),
	withFontSizes( 'menuItemFontSize' ),
	withSelect( (select, ownProps) => {
		const settings = select('core/block-editor').getSettings();

		return {
			fontSizes: settings.fontSizes
		}
	} ),
	withDispatch( ( dispatch, ownProps, registry ) => ( {
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
