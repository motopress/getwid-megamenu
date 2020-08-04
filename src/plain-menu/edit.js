/**
 * External dependencies
 */
import classnames from 'classnames';
import Controls from './controls';

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
	['getwid-megamenu/plain-menu-item', {}],
];
const ALLOWED_BLOCKS = [
	'getwid-megamenu/plain-menu-item',
];

function PlainMenu( args ) {
	const {
		selectedBlockHasDescendants,
		isImmediateParentOfSelectedBlock,
		isSelected,
		attributes
	} = args;

	const ref = useRef();

	const menuClasses = classnames(
		'wp-block-getwid-plain-menu',
		'gw-pm',
		{
			[ `justify-items-${ attributes.itemsJustification }` ]: attributes.itemsJustification,
			[ `is-orientation-${attributes.orientation}`]: attributes.orientation
		}
	);

	return (
		<>
			<Controls { ...args }/>
			<div className={ menuClasses }>
				<div className="gw-pm__content">
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
						orientation={ attributes.orientation }
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