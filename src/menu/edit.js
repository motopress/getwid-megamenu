/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { useRef } = wp.element;
const {
	InnerBlocks
} = wp.blockEditor;
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
		className,
	} = args;

	const ref = useRef();

	// UI State: rendered Block UI
	return (
		<>
			<div className={className}>
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
							'wp-block-mp-megamenu-menu__container'
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
