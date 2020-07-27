<?php

/**
 * Plugin Name: Gutenberg Mega Menu Block
 * Version: 0.0.1
 * Author: MotoPress
 * Text Domain: getwid-megamenu
 */

defined( 'ABSPATH' ) || exit;

define( 'MP_MEGAMENU_VERSION', '0.0.1' );
define( 'MP_MEGAMENU_FILE', __FILE__ );

if ( ! function_exists( 'getwid_megamenu_init' ) && function_exists( 'register_block_type' ) ) {
	function getwid_megamenu_init() {
		include( plugin_dir_path( MP_MEGAMENU_FILE ) . 'includes/BlockRegister.php' );
		new GetwidMegaMenu\BlockRegister();
	}

	getwid_megamenu_init();
}
