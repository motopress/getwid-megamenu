<?php


namespace GetwidMegaMenu;


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

		$html = '<nav class="wp-block-getwid-plain-menu gw-pm ' . implode( ' ', $classes ) . '">';
		$html .= '<ul class="gw-pm__content">';
		$html .= $content;
		$html .= '</ul></nav>';

		return $html;
	}

	protected function setName() {
		$this->name = 'getwid-megamenu/plain-menu';
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