const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import metadata from './block.json';
import save from './save';
import edit from './edit';

registerBlockType( metadata.name, {
	title: __( 'Menu' ),
	category: metadata.category,
	supports: metadata.supports,
	edit,
	save
} );
