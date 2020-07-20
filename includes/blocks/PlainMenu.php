<?php


namespace MPMegaMenu;


class PlainMenu extends AbstractBlock {

	public function __construct() {
		parent::__construct();
	}

	public function render_callback( $attributes, $content ) {
		$classes = array_merge(
			isset( $attributes['className'] ) ? array( $attributes['className'] ) : array(),
			isset( $attributes['itemsJustification'] ) ? array( 'justify-items-' . $attributes['itemsJustification'] ) : array(),
			isset( $attributes['orientation'] ) ? array( 'is-orientation-' . $attributes['orientation'] ) : array()
		);

		$html = '<div class="wp-block-mp-plain-menu ' . implode( ' ', $classes ) . '">';
		$html .= '<div class="wp-block-mp-plain-menu__content">';
		$html .= $content;
		$html .= '</div></div>';

		return $html;
	}

	protected function setName() {
		$this->name = 'mp-megamenu/plain-menu';
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