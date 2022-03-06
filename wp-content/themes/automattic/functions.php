<?php

// Show gutenburg fields as individual blocks in the rest-api
add_action('rest_api_init', function () {

    if (!function_exists('use_block_editor_for_post_type')) {
        require ABSPATH . 'wp-admin/includes/post.php';
    }

    $post_types = get_post_types_by_support(['editor']);
    foreach ($post_types as $post_type) {
        if (use_block_editor_for_post_type($post_type)) {
            register_rest_field($post_type, 'gutenberg_blocks', [
                'get_callback' => function (array $post) {
                    $raw_blocks = parse_blocks($post['content']['raw']);
                    $supported_blocks = [];
                    foreach ($raw_blocks as $raw_block) {
                        if (array_key_exists('blockName', $raw_block) && !is_null($raw_block['blockName'])) {
                            array_push($supported_blocks, $raw_block);
                        }
                    }
                    return $supported_blocks;
                }
            ]);
        }
    }
});

add_theme_support('post-thumbnails');
function add_tags_categories()
{
    register_taxonomy_for_object_type('category', 'jobs');
    register_taxonomy_for_object_type('post_tag', 'jobs');
}
add_action('init', 'add_tags_categories');

// Register the custom post types and add them to the rest-api
function create_posttypes()
{

    register_post_type(
        'jobs',
        [
            'labels' => [
                'name' => __('Jobs'),
                'singular_name' => __('Job')
            ],
            'supports'     => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'revisions', 'page-attributes'),
            'taxonomies' => array('category', 'post_tag'),
            'public' => true,
            'has_archive' => true,
            'rewrite' => ['slug' => 'jobs'],
            'show_in_rest' => true,
        ]
    );

    register_post_type(
        'skills',
        [
            'labels' => [
                'name' => __('Skills'),
                'singular_name' => __('Skill')
            ],
            'public' => true,
            'has_archive' => true,
            'rewrite' => ['slug' => 'skills'],
            'show_in_rest' => true,
        ]
    );
}
// Hooking up our function to theme setup
add_action('init', 'create_posttypes');
