<?php


namespace MPMegaMenu;


class MegaMenu extends AbstractBlock {

	public function __construct() {
		parent::__construct();
	}

	public function render_callback( $attributes, $content ) {

		$classes = array_merge(
			isset( $attributes['className'] ) ? array( $attributes['className'] ) : array(),
			isset( $attributes['align'] ) ? array( 'align' . $attributes['align'] ) : array(),
			isset( $attributes['itemsJustification'] ) ? array( 'justify-items-' . $attributes['itemsJustification'] ) : array(),
			isset( $attributes['expandDropdown'] ) && $attributes['expandDropdown'] ? array( 'has-full-width-dropdown' ) : array()
		);

		$menu_styles = '';
		$has_named_bg_color  = array_key_exists( 'backgroundColor', $attributes );
		$has_custom_bg_color = array_key_exists( 'customBackgroundColor', $attributes );

		if ( $has_custom_bg_color || $has_named_bg_color ) {
			$classes = array_merge( $classes, ['has-background'] );
		}

		if ( $has_named_bg_color ) {
			// Add the background-color class.
			$classes = array_merge( $classes, [ sprintf( 'has-%s-background-color', $attributes['backgroundColor'] ) ] );
		}

		if ( $has_custom_bg_color ) {
			$menu_styles .= sprintf( 'background-color: %s;', $attributes['customBackgroundColor'] );
		}

		$html = '<div class="wp-block-mp-megamenu ' . implode( ' ', $classes ) . '"';
		if ( isset( $attributes['dropdownMaxWidth'] ) ) {
			$html .= ' data-dropdown-width="' . $attributes['dropdownMaxWidth'] . '"';
		}
		if ( isset( $attributes['dropdownContentMaxWidth'] ) ) {
			$html .= ' data-dropdown-content-width="' . $attributes['dropdownContentMaxWidth'] . '"';
		}

		if($menu_styles){
			$html .= ' style="'.$menu_styles.'"';
		}

		$html .= '>';
		$html .= '<div class="wp-block-mp-megamenu__content"';
		if ( isset( $attributes['menuMaxWidth'] ) ) {
			$html .= ' style="max-width:' . $attributes['menuMaxWidth'] . 'px"';
		}
		$html .= '>';
		$html .= $content;
		$html .= '</div></div>';

		return $html;
	}

	protected function setName() {
		$this->name = 'mp-megamenu/menu';
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