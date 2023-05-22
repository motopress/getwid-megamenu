<?php


namespace GetwidMegaMenu;


class MegaMenu extends AbstractBlock {

	public function __construct() {
		parent::__construct();
	}

	public function render_callback( $attributes, $content ) {

		$collapse_on_mobile = ! isset( $attributes['collapseOnMobile'] ) || $attributes['collapseOnMobile'];

		$classes = array_merge(
			isset( $attributes['className'] ) ? array( $attributes['className'] ) : array(),
			isset( $attributes['align'] ) ? array( 'align' . $attributes['align'] ) : array(),
			isset( $attributes['itemsJustification'] ) ? array( 'justify-items-' . $attributes['itemsJustification'] ) : array(),
			isset( $attributes['expandDropdown'] ) && $attributes['expandDropdown'] ? array( 'has-full-width-dropdown' ) : array(),
			$collapse_on_mobile ? array('is-collapsible') : array()
		);

		$html = '<div class="wp-block-getwid-megamenu gw-mm ' . implode( ' ', $classes ) . '"';
		if ( isset( $attributes['dropdownMaxWidth'] ) ) {
			$html .= ' data-dropdown-width="' . $attributes['dropdownMaxWidth'] . '"';
		}
		if ( isset( $attributes['dropdownContentMaxWidth'] ) ) {
			$html .= ' data-dropdown-content-width="' . $attributes['dropdownContentMaxWidth'] . '"';
		}

		$responsive_breakpoint = isset( $attributes['responsiveBreakpoint'] ) ? $attributes['responsiveBreakpoint'] : 782;

		$html .= ' data-responsive-breakpoint="' . $responsive_breakpoint . '"';
		$html .= '>';

		$html .= '<nav class="gw-mm__wrapper"';
		if ( isset( $attributes['menuMaxWidth'] ) ) {
			$html .= ' style="max-width:' . $attributes['menuMaxWidth'] . 'px"';
		}
		$html .= '>';

		if ( $collapse_on_mobile ) {
			$toggle_button_alignment_style = isset( $attributes['toggleButtonAlignment'] ) ? 'style="text-align: ' . $attributes['toggleButtonAlignment'] . ';"' : '';

			$button = '<button class="gw-mm__toggle"><span class="dashicons dashicons-menu"></span>' . esc_html__( 'Menu', 'getwid-megamenu' ) . '</button>';
			$button = apply_filters( 'getwid-megamenu/blocks/megamenu/mobile-toggle-button', $button, $classes );

			$html .= '<div class="gw-mm__toggle-wrapper is-hidden" ' . $toggle_button_alignment_style . '>';
			$html .= $button;
			$html .= '</div>';
		}

		$html .= '<div class="gw-mm__content-wrapper">';
		$html .= '<ul class="gw-mm__content">';
		$html .= $content;
		$html .= '</ul></div></nav></div>';

		return $html;
	}

	protected function setName() {
		$this->name = 'getwid-megamenu/menu';
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
