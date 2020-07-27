const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import metadata from './block.json';
import save from './save';
import edit from './edit';

registerBlockType( metadata.name, {
	title: __( 'Mega Menu', 'getwid-megamenu' ),
	keywords: [
		__( 'navigation', 'getwid-megamenu' ),
		__( 'links', 'getwid-megamenu' )
	],
	icon: 'menu',
	category: metadata.category,
	attributes: metadata.attributes,
	supports: metadata.supports,
	edit,
	save
} );
