/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useRef } = wp.element;
const {
	InnerBlocks,
	BlockControls,
	InspectorControls
} = wp.blockEditor;
const {
	PanelBody,
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	RangeControl
} = wp.components;
const { withSelect } = wp.data;
const { compose } = wp.compose;

const TEMPLATE = [
	['mp-megamenu/menu-item', {}],
];

const ALLOWED_BLOCKS = [
	'mp-megamenu/menu-item'
];

function MegaMenu( args ) {
	const {
		selectedBlockHasDescendants,
		isImmediateParentOfSelectedBlock,
		isSelected,
		setAttributes,
		className,
		attributes
	} = args;

	const ref = useRef();

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

	const menuClasses = classnames( 'wp-block-mp-megamenu' ,{
		[ `justify-items-${ attributes.itemsJustification }` ]: attributes.itemsJustification,
		[ `has-full-width-dropdown` ]: attributes.expandDropdown,
	});

	const menuContentStyle = {
		maxWidth: attributes.menuMaxWidth
	};

	// UI State: rendered Block UI
	return (
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
						icon={attributes.expandDropdown ? "editor-contract" : "editor-expand"}
						title={__('Expand dropdown')}
						onClick={expandDropdown}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<RangeControl
						label={ __( 'Maximum width of top-level menu in pixels' ) }
						value={ attributes.menuMaxWidth }
						onChange={ ( menuMaxWidth ) => setAttributes( { menuMaxWidth } ) }
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
			</InspectorControls>
			<div className={ menuClasses }>
				<div className="wp-block-mp-megamenu__content" style={ menuContentStyle }>
					<InnerBlocks
						ref={ ref }
						template={ TEMPLATE }
						templateLock={ false }
						allowedBlocks={ ALLOWED_BLOCKS }
						templateInsertUpdatesSelection={ false }
						renderAppender={
							( isImmediateParentOfSelectedBlock &&
								! selectedBlockHasDescendants ) ||
							isSelected
								? InnerBlocks.DefaultAppender
								: false
						}
						__experimentalMoverDirection="horizontal"
					/>
				</div>
			</div>
		</>
	);
}

export default compose( [
	withSelect( ( select, { clientId } ) => {
		const {
			getClientIdsOfDescendants,
			hasSelectedInnerBlock,
			getSelectedBlockClientId,
		} = select( 'core/block-editor' );
		const isImmediateParentOfSelectedBlock = hasSelectedInnerBlock(
			clientId,
			false
		);
		const selectedBlockId = getSelectedBlockClientId();
		const selectedBlockHasDescendants = !! getClientIdsOfDescendants( [
			selectedBlockId,
		] )?.length;
		return {
			isImmediateParentOfSelectedBlock,
			selectedBlockHasDescendants
		};
	} ),
] )( MegaMenu );
