(function (blocks, element, components, editor) {
    var el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        InspectorControls = editor.InspectorControls;
    SelectControl = components.SelectControl;

    registerBlockType('mp-megamenu/menu', {
        title: 'MP Mega Menu - test',
        icon: 'megaphone',
        category: 'common',
        attributes: {
            'demo': {
                'type': 'string',
                'default': 'default'
            }
        },
        edit: (function (props) {

            return [
                el(
                    'div',
                    null,
                    `Unfortunately at this moment it works only on front-end. Chosen demo - ${props.attributes.demo}.`
                ),
                el(InspectorControls,
                    {}, [
                        el(SelectControl, {
                            label: 'Title',
                            options: [
                                {label: 'Default', value: 'default'},
                                {label: 'Demo 1', value: 'demo-1'},
                                {label: 'Demo 2', value: 'demo-2'},
                            ],
                            value: props.attributes.demo,
                            onChange: (value) => {
                                props.setAttributes({demo: value});
                            }
                        })
                    ]
                )
            ];
        }),
        save: () => {
            /** this is resolved server side */
            return null
        }
    });
}(
    window.wp.blocks,
    window.wp.element,
    window.wp.components,
    window.wp.editor,
));
