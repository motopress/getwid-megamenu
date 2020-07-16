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

		$html = '<div class="wp-block-mp-megamenu ' . implode( ' ', $classes ) . '"';
		if ( isset( $attributes['dropdownMaxWidth'] ) ) {
			$html .= ' data-dropdown-width="' . $attributes['dropdownMaxWidth'] . '"';
		}
		if ( isset( $attributes['dropdownContentMaxWidth'] ) ) {
			$html .= ' data-dropdown-content-width="' . $attributes['dropdownContentMaxWidth'] . '"';
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