/**
 * WordPress dependencies
 */
const { escape } = lodash;
const { __ } = wp.i18n;
const {
	useCallback,
	useState,
	useEffect
} = wp.element;
const {
	PanelBody,
	TextControl,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
	Popover,
} = wp.components;
const {
	BlockControls,
	InspectorControls,
	__experimentalLinkControl,
} = wp.blockEditor;

const NEW_TAB_REL = 'noreferrer noopener';

function Controls(args) {
	const {
		isSelected,
		attributes,
		setAttributes,
		insertPlainMenuItem,
	} = args;
	const {
		linkTarget,
		rel,
		text,
		url,
	} = attributes;

	const [isURLPickerOpen, setIsURLPickerOpen] = useState(false);
	const isURLSet = !(url === undefined || url.trim().length === 0);

	const openLinkControl = () => {
		setIsURLPickerOpen(true);
		return false;
	};

	const unlinkItem = () => {
		setAttributes( {
			url: undefined,
			linkTarget: undefined,
			rel: undefined,
		} );
		setIsURLPickerOpen( false );
	};

	const onSetLinkRel = useCallback(
		(value) => {
			setAttributes({rel: value});
		},
		[setAttributes]
	);

	const onToggleOpenInNewTab = useCallback(
		( value ) => {
			const newLinkTarget = value ? '_blank' : undefined;

			let updatedRel = rel;
			if ( newLinkTarget && !rel ) {
				updatedRel = NEW_TAB_REL;
			} else if ( !newLinkTarget && rel === NEW_TAB_REL ) {
				updatedRel = undefined;
			}

			setAttributes( {
				linkTarget: newLinkTarget,
				rel: updatedRel,
			} );
		},
		[ rel, setAttributes ]
	);

	useEffect( () => {
		if ( isSelected && ! url ) {
			setIsURLPickerOpen( true );
		}
	}, [ isSelected ] );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						name="link"
						icon="admin-links"
						title={ __('Edit Link') }
						onClick={ openLinkControl }
						isActive={ isURLSet }
					/>
					<ToolbarButton
						name="unlink"
						icon="editor-unlink"
						title={ __('Unlink') }
						onClick={ unlinkItem }
						isDisabled={ !isURLSet }/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						name="submenu"
						icon="download"
						title={ __( 'Add submenu' ) }
						onClick={ insertPlainMenuItem }
					/>
				</ToolbarGroup>
			</BlockControls>
			{ isURLPickerOpen && (
				<Popover
					position="bottom center"
					onClose={ () => setIsURLPickerOpen( false ) }
				>
					<__experimentalLinkControl
						value={{
							url,
							opensInNewTab: linkTarget === "_blank"
						}}
						onChange={ ( {
								title: newTitle = '',
								url: newURL = '',
								opensInNewTab: newOpensInNewTab,
								id: newId = '',
								kind: newKind = '',
							} ) => {
							setAttributes({
								id: newId,
								kind: newKind,
								url: newURL,
								text: ( () => {
									if ( text ) {
										return text;
									}

									if ( newTitle !== '' && text !== newTitle) {
										return escape( newTitle );
									}
								} )()
							});

							if ( linkTarget === "_blank" !== newOpensInNewTab ) {
								onToggleOpenInNewTab(newOpensInNewTab);
							}
						} }
					/>
				</Popover>
			) }
			<InspectorControls>
				<PanelBody title={ __('Link settings') }>
					<ToggleControl
						label={ __('Open in new tab') }
						onChange={ onToggleOpenInNewTab }
						checked={ linkTarget === '_blank' }
					/>
					<TextControl
						label={ __('Link rel') }
						value={ rel || '' }
						onChange={ onSetLinkRel }/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}

export default Controls;
