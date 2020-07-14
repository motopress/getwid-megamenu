<?php

/**
 * Plugin Name: MotoPress MegaMenu Block
 * Version: 0.0.1
 * Author: MotoPress
 */

defined( 'ABSPATH' ) || exit;

define( 'MP_MEGAMENU_VERSION', '0.0.1' );

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function mp_megamenu_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'mp-megamenu-block',
		plugins_url( 'build/index.js', __FILE__ ),
		[
			'wp-i18n',
			'wp-editor',
			'wp-element',
			'wp-blocks',
			'wp-components',
		],
		MP_MEGAMENU_VERSION,
		true
	);

	wp_register_style(
		'mp-megamenu-block-editor',
		plugins_url( 'build/index.css', __FILE__ ),
		[],
		MP_MEGAMENU_VERSION
	);

	wp_register_style(
		'mp-megamenu-block-style',
		plugins_url( 'build/style-index.css', __FILE__ ),
		[],
		MP_MEGAMENU_VERSION
	);

	register_block_type(
		'mp-megamenu/menu',
		[
			'style'           => 'mp-megamenu-block-style',
			'editor_style'    => 'mp-megamenu-block-editor',
			'editor_script'   => 'mp-megamenu-block',
			'render_callback' => 'mp_megamenu_render_mp_megamenu'
		]
	);

	register_block_type(
		'mp-megamenu/menu-item',
		[
			'editor_script'   => 'mp-megamenu-block',
			'render_callback' => 'mp_megamenu_render_mp_megamenu_item'
		]
	);

}

add_action( 'init', 'mp_megamenu_register_block' );

function mp_megamenu_render_mp_megamenu_item( $attributes, $content ) {

	$html = '';

	if ( empty( $attributes['text'] ) ) {
		return $html;
	}

	$attributes['text'] = wp_kses(
		$attributes['text'],
		array(
			'code'   => array(),
			'em'     => array(),
			'img'    => array(
				'scale' => array(),
				'class' => array(),
				'style' => array(),
				'src'   => array(),
				'alt'   => array(),
			),
			's'      => array(),
			'span'   => array(
				'style' => array(),
			),
			'strong' => array(),
		)
	);

	$html .= '<div class="wp-block-mp-megamenu-item">';
	$html .= '<div class="wp-block-mp-megamenu-item__link">';
	$html .= '<a href="';
	if ( isset( $attributes['url'] ) ) {
		$html .= esc_url( $attributes['url'] );
	} else {
		$html .= '#';
	}
	$html .= '"';

	if ( isset( $attributes['opensInNewTab'] ) && true === $attributes['opensInNewTab'] ) {
		$html .= ' target="_blank"';
	}

	$html .= '>' . $attributes['text'] . '</a></div>';

	if ( $content ) {
		$html .= '<div class="wp-block-mp-megamenu-item__popup-wrapper">';
		$html .= '<div class="wp-block-mp-megamenu-item__popup">';
		$html .= $content;
		$html .= '</div></div>';
	}

	$html .= '</div>';

	return $html;
}

function mp_megamenu_render_mp_megamenu( $attributes, $content ) {

	$classes = array_merge(
		isset( $attributes['className'] ) ? array( $attributes['className'] ) : array(),
		isset( $attributes['align'] ) ? array( 'align' . $attributes['align'] ) : array(),
		isset( $attributes['itemsJustification'] ) ? array( 'justify-items-' . $attributes['itemsJustification'] ) : array()
	);

	$html = '<div class="wp-block-mp-megamenu ' . implode( ' ', $classes ) . '">';
	$html .= $content;
	$html .= '</div>';

	return $html;
}