<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <div class="wrap">
        <div id="primary" class="content-area">
            <main id="main" class="site-main" role="main">

                Nah, we're only using the rest-api

            </main><!-- #main -->
        </div><!-- #primary -->
    </div><!-- .wrap -->

    <?php get_footer(); ?>
    <?php wp_footer(); ?>

</body>

</html>