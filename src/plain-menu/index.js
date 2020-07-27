const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import metadata from './block.json';
import save from './save';
import edit from './edit';

registerBlockType( metadata.name, {
	title: __( 'Plain Menu', 'getwid-megamenu' ),
	icon: 'menu',
	category: metadata.category,
	attributes: metadata.attributes,
	supports: metadata.supports,
	edit,
	save
} );
