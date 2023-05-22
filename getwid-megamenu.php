<?php

/**
 * Plugin Name: Navigation Block with Mega Menu
 * Plugin URI: https://motopress.com/products/wordpress-mega-menu-block/
 * Description: Build better navigation menus with the WordPress mega menu blocks.
 * Version: 1.0.5
 * Author: MotoPress
 * Author URI: https://motopress.com/
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: getwid-megamenu
 */

defined( 'ABSPATH' ) || exit;

define( 'GETWID_MEGAMENU_VERSION', '1.0.5' );
define( 'GETWID_MEGAMENU_FILE', __FILE__ );

if ( ! function_exists( 'getwid_megamenu_init' ) && function_exists( 'register_block_type' ) ) {
	function getwid_megamenu_init() {
		include( plugin_dir_path( GETWID_MEGAMENU_FILE ) . 'includes/BlockRegister.php' );
		new GetwidMegaMenu\BlockRegister();
	}

	getwid_megamenu_init();
}
