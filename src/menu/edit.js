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
		attributes,
	} = args;

	const ref = useRef();

	const menuClasses = classnames( 'wp-block-mp-megamenu' ,{
		[ `justify-items-${ attributes.itemsJustification }` ]: attributes.itemsJustification,
		[ `has-full-width-dropdown` ]: attributes.expandDropdown,
	});

	const menuWrapperStyle = {
		maxWidth: attributes.menuMaxWidth
	};

	// UI State: rendered Block UI
	return (
		<>
			<Controls { ...args }/>
			<div className={ menuClasses }>
				<div className="wp-block-mp-megamenu__wrapper" style={ menuWrapperStyle }>
					<div className="wp-block-mp-megamenu__content-wrapper">
						<div className="wp-block-mp-megamenu__content">
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
			getBlocksByClientId
		} = select( 'core/block-editor' );
		const isImmediateParentOfSelectedBlock = hasSelectedInnerBlock(
			clientId,
			false
		);
		const selectedBlockId = getSelectedBlockClientId();
		const selectedBlockHasDescendants = !! getClientIdsOfDescendants( [
			selectedBlockId,
		] )?.length;
		const menuItems = getBlocksByClientId(clientId)[0].innerBlocks;

		return {
			isImmediateParentOfSelectedBlock,
			selectedBlockHasDescendants,
			menuItems
		};
	} ),
] )( MegaMenu );
