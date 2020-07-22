<?php


namespace MPMegaMenu;


class MegaMenuItem extends AbstractBlock {

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
					'class' => array(),
				),
				'strong' => array(),
			)
		);

		$font_style = $this->generateFontSizeStyles( $attributes );
		$text_style = $this->generateTextStyles( $attributes );

		$item_link_classes = array_merge(
			[ 'wp-block-mp-megamenu-item__link' ],
			[ $font_style['css_classes'] ],
			[ $text_style['css_classes'] ]
		);

		$item_link_style = $font_style['inline_styles'] . $text_style['inline_styles'];

		$html .= '<div class="wp-block-mp-megamenu-item">';
		$html .= '<div class="' . implode( ' ', $item_link_classes ) . '" style="' . $item_link_style . '">';
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

		$html .= '>' . $attributes['text'];

		if ( $content ) {
			$html .= '<span class="wp-block-mp-megamenu-item__dropdown-icon"><span class="dashicons dashicons-arrow-down"></span></span>';
		}

		$html .= '</a></div>';

		if ( $content ) {
			$dropdown_styles  = $this->generateDropdownBGStyles( $attributes );
			$dropdown_classes = array_merge(
				[ 'wp-block-mp-megamenu-item__dropdown' ],
				[ $dropdown_styles['css_classes'] ]
			);

			$html .= '<div class="wp-block-mp-megamenu-item__dropdown-wrapper">';
			$html .= '<div class="' . implode( ' ', $dropdown_classes ) . '" style="' . $dropdown_styles['inline_styles'] . '">';
			$html .= '<div class="wp-block-mp-megamenu-item__dropdown-content">';
			$html .= $content;
			$html .= '</div></div></div>';
		}

		$html .= '</div>';

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
			$font_sizes['inline_styles'] = sprintf( 'font-size: %spx;', $attributes['customFontSize'] );
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

	private function generateDropdownBGStyles( $attributes ) {
		$colors = array(
			'css_classes'   => '',
			'inline_styles' => '',
		);

		// Text color.
		$has_named_text_color  = array_key_exists( 'dropdownBackgroundColor', $attributes );
		$has_custom_text_color = array_key_exists( 'customDropdownBackgroundColor', $attributes );

		// If has text color.
		if ( $has_custom_text_color || $has_named_text_color ) {
			// Add has-text-color class.
			$colors['css_classes'] .= ' has-background';
		}

		if ( $has_named_text_color ) {
			// Add the color class.
			$colors['css_classes'] .= sprintf( ' has-%s-background-color', $attributes['dropdownBackgroundColor'] );
		} elseif ( $has_custom_text_color ) {
			// Add the custom color inline style.
			$colors['inline_styles'] .= sprintf( 'background-color: %s;', $attributes['customDropdownBackgroundColor'] );
		}

		return $colors;
	}

	protected function setName() {
		$this->name = 'mp-megamenu/menu-item';
	}

	protected function setStyle() {
		$this->style = 'mp-megamenu-block-style';
	}

	protected function setEditorStyle() {
		$this->editor_style = 'mp-megamenu-block-editor';
	}

	protected function setEditorScript() {
		$this->editor_script = 'mp-megamenu-block';
	}
}