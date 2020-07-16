<?php

/**
 * Plugin Name: MotoPress MegaMenu Block
 * Version: 0.0.1
 * Author: MotoPress
 */

defined( 'ABSPATH' ) || exit;

define( 'MP_MEGAMENU_VERSION', '0.0.1' );
define( 'MP_MEGAMENU_FILE', __FILE__ );

if ( ! function_exists( 'mp_megamenu_init' ) && function_exists( 'register_block_type' ) ) {
	function mp_megamenu_init() {
		include( plugin_dir_path( MP_MEGAMENU_FILE ) . 'includes/BlockRegister.php' );
		new MPMegaMenu\BlockRegister();
	}

	mp_megamenu_init();
}
