<?php


namespace MPMegaMenu;


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

		$item_classes = array_merge(
			[ 'wp-block-mp-plain-menu-item' ],
			trim( $content ) ? [ 'has-children' ] : []
		);

		$html .= '<div class="' . implode( ' ', $item_classes ) . '">';
		$html .= '<div class="wp-block-mp-plain-menu-item__link">';
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

		$html .= '>' . $attributes['text'];

		if ( trim( $content ) ) {
			$html .= '<span class="wp-block-mp-plain-menu-item__dropdown-icon"><span class="dashicons dashicons-arrow-down"></span></span>';
		}

		$html .= '</a></div>';

		if ( trim( $content ) ) {
			$html .= '<div class="wp-block-mp-plain-menu-item__dropdown">';
			$html .= '<div class="wp-block-mp-plain-menu-item__dropdown-content">';
			$html .= $content;
			$html .= '</div></div>';
		}

		$html .= '</div>';

		return $html;
	}

	protected function setName() {
		$this->name = 'mp-megamenu/plain-menu-item';
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