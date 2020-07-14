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
	BlockControls
} = wp.blockEditor;
const {
	Toolbar,
	ToolbarButton,
	ToolbarGroup
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
			<div className={ menuClasses }>
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
					__experimentalPassedProps={ {
						className: classnames(
							'wp-block-mp-megamenu__container'
						),
					} }
					__experimentalMoverDirection="horizontal"
				/>
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
