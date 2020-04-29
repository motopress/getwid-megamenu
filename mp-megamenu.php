<?php

/*
 * Plugin Name: MegaMenu by MotoPress
 * Description: MegaMenu block-editor block
 * Version: 0.0.1
 * Author: MotoPress
 * Author URI: https://motopress.com/
 * License: GPLv2 or later
 * Text Domain: mp-megamenu
 * Domain Path: /languages
 */

if (!defined('ABSPATH')) {
    exit;
}

define('MP_MM_VERSION', '0.0.1');
define('MP_MM_PLUGIN_URL', plugin_dir_url(__FILE__));
define('MP_MM_PLUGIN_PATH', plugin_dir_path(__FILE__));

add_action('wp_enqueue_scripts', 'mp_megamenu_enqueue_styles');

function mp_megamenu_enqueue_styles()
{
    wp_enqueue_style('mp-menu', MP_MM_PLUGIN_URL . 'assets/css/style.css', [], MP_MM_VERSION);
}

add_action('init', 'mp_mega_menu_register_test_block');
function mp_mega_menu_register_test_block()
{

    wp_register_script('mp-blocks', MP_MM_PLUGIN_URL . 'assets/js/blocks.js', ['wp-blocks', 'wp-element', 'wp-components', 'wp-editor'], MP_MM_VERSION);

    register_block_type('mp-megamenu/menu', [
        'render_callback' => 'render_megamenu',
        'editor_script' => 'mp-blocks',
        'attributes' => [
            'demo' => [
                'type' => 'string',
                'default' => 'default'
            ]
        ]
    ]);

}

function render_megamenu($attributes, $content)
{
    $content = null;
    $demo_template_path = MP_MM_PLUGIN_PATH . 'demos/' . $attributes['demo'] . '.html';
    if (file_exists($demo_template_path)) {
        $content = file_get_contents($demo_template_path);
    }

    if (is_null($content)) {
        return 'Template Part Not Found';
    }

    $content = do_blocks($content);

    return $content;
}