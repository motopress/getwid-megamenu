<?php


namespace GetwidMegaMenu;


class PlainMenuItem extends AbstractBlock {

	public function __construct() {
		parent::__construct();
	}

	public function render_callback( $attributes, $content ) {
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

		$is_active = $attributes['kind'] == 'post-type' && $attributes['id'] === get_the_ID();

		$item_classes = array_merge(
			[ 'wp-block-getwid-plain-menu-item' ],
			[ 'gw-pm-item' ],
			trim( $content ) ? [ 'has-children' ] : [],
			$is_active ? [ 'is-current' ] : [],
			isset( $attributes['className'] ) ? [ $attributes['className'] ] : []
		);

		$item_classes = apply_filters( 'getwid-megamenu/blocks/plain-menu-item/item-classes', $item_classes, $attributes );

		$font_size = $this->generateFontSizeStyles( $attributes );
		$colors    = $this->generateTextStyles( $attributes );

		$item_link_classes = array_merge(
			[ 'gw-pm-item__link' ],
			[ $font_size['css_classes'] ],
			[ $colors['css_classes'] ]
		);

		$item_link_style = ' style="' . $font_size['inline_styles'] . $colors['inline_styles'] . '" ';

		$html .= '<li class="' . esc_attr( implode( ' ', $item_classes ) ) . '">';
		$html .= '<div class="' . implode( ' ', $item_link_classes ) . '" ' . $item_link_style . '>';
		$html .= '<a href="';
		if ( isset( $attributes['url'] ) ) {
			$html .= esc_url( $attributes['url'] );
		} else {
			$html .= '#';
		}
		$html .= '"';

		if ( isset( $attributes['linkTarget'] ) ) {
			$html .= ' target="' . $attributes['linkTarget'] . '"';
		}

		if ( isset( $attributes['rel'] ) ) {
			$html .= ' rel="' . $attributes['rel'] . '"';
		}

		$html .= '>' . $attributes['text'] . '</a>';

		if ( trim( $content ) ) {
			$html .= '<button class="gw-pm-item__toggle"><span class="dashicons dashicons-arrow-down"></span></button>';
		}

		$html .= '</div>';

		if ( trim( $content ) ) {
			$html .= '<div class="gw-pm-item__dropdown">';
			$html .= '<ul class="gw-pm-item__dropdown-content">';
			$html .= $content;
			$html .= '</ul></div>';
		}

		$html .= '</li>';

		return $html;
	}

	private function generateFontSizeStyles( $attributes ) {
		$font_sizes = array(
			'css_classes'   => '',
			'inline_styles' => '',
		);

		$has_named_font_size  = array_key_exists( 'fontSize', $attributes );
		$has_custom_font_size = array_key_exists( 'customFontSize', $attributes );

		if ( $has_named_font_size ) {
			// Add the font size class.
			$font_sizes['css_classes'] = sprintf( 'has-%s-font-size', $attributes['fontSize'] );
		} elseif ( $has_custom_font_size ) {
			// Add the custom font size inline style.
			$font_size = is_numeric( $attributes['customFontSize'] ) ? $attributes['customFontSize'] . 'px' : $attributes['customFontSize'];
			$font_sizes['inline_styles'] = sprintf( 'font-size: %s;', $font_size );
		}

		return $font_sizes;
	}

	private function generateTextStyles( $attributes ) {
		$colors = array(
			'css_classes'   => '',
			'inline_styles' => '',
		);

		// Text color.
		$has_named_text_color  = array_key_exists( 'textColor', $attributes );
		$has_custom_text_color = array_key_exists( 'customTextColor', $attributes );

		// If has text color.
		if ( $has_custom_text_color || $has_named_text_color ) {
			// Add has-text-color class.
			$colors['css_classes'] .= ' has-text-color';
		}

		if ( $has_named_text_color ) {
			// Add the color class.
			$colors['css_classes'] .= sprintf( ' has-%s-color', $attributes['textColor'] );
		} elseif ( $has_custom_text_color ) {
			// Add the custom color inline style.
			$colors['inline_styles'] .= sprintf( 'color: %s;', $attributes['customTextColor'] );
		}

		return $colors;
	}

	protected function setName() {
		$this->name = 'getwid-megamenu/plain-menu-item';
	}

	protected function setStyle() {
		$this->style = 'getwid-megamenu-block-style';
	}

	protected function setEditorStyle() {
		$this->editor_style = 'getwid-megamenu-block-editor';
	}

	protected function setEditorScript() {
		$this->editor_script = 'getwid-megamenu-block';
	}
}
