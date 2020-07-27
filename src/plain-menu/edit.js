/**
 * External dependencies
 */
import classnames from 'classnames';
import Controls from './controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useRef } = wp.element;
const {
	InnerBlocks
} = wp.blockEditor;
const { withSelect } = wp.data;
const { compose } = wp.compose;

const TEMPLATE = [
	['mp-megamenu/plain-menu-item', {}],
];
const ALLOWED_BLOCKS = [
	'mp-megamenu/plain-menu-item',
];

function PlainMenu( args ) {
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

	const menuClasses = classnames( 'wp-block-mp-plain-menu', {
		[ `justify-items-${ attributes.itemsJustification }` ]: attributes.itemsJustification,
		[ `is-orientation-${attributes.orientation}`]: attributes.orientation
	});

	// UI State: rendered Block UI
	return (
		<>
			<Controls { ...args }/>
			<div className={ menuClasses }>
				<div className="wp-block-mp-plain-menu__content">
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
						__experimentalMoverDirection={ attributes.orientation }
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
] )( PlainMenu );