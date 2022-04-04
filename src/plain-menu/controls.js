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
	FontSizePicker,
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

	useEffect( () => {
		updateChildBlocksAttributes( {
			fontSize: menuItemFontSize.slug,
			customFontSize: menuItemFontSize.slug ? undefined : menuItemFontSize.size,
		} )
	}, [ menuItemFontSize.size ] );


	useEffect( () => {
		updateChildBlocksAttributes( {
			textColor: menuItemColor.slug,
			customTextColor: menuItemColor.slug ? undefined : menuItemColor.color,
		} )
	}, [ menuItemColor.color ] );

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
						name="orientation"
						icon="image-rotate-right"
						title={ attributes.orientation === 'vertical' ? __('Make horizontal') : __('Make vertical') }
						isActive={ attributes.orientation === 'vertical' }
						onClick={ () => {
							setAttributes( {
								orientation: attributes.orientation === 'vertical' ? 'horizontal' : 'vertical',
							} )
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) } initialOpen={ true }>
					<FontSizePicker
						fontSizes={ fontSizes }
						value={ menuItemFontSize.size }
						onChange={ setMenuItemFontSize }
					/>
					<MPMegaMenuColorPalette
						label={__('Color')}
						disableCustomColors={ false }
						color={ menuItemColor.color }
						onChange={ setMenuItemColor }
						clearable={ true }
					/>
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
