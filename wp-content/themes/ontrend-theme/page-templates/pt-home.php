<?php
/*
 Template Name: Page: Home
*/
?>
<?php get_header(); ?>
			<div id="content" class="home-page">
				<div id="inner-content" class="wrap cf">
					<main id="main" class="m-all t-3of3 d-7of7 cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
						<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">
							<!-- Hero image -->
							<div class="home-hero">
								<?php 
								$image = get_field('main_image');
								if( !empty($image) ): ?>
									<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
								<?php endif; ?>
							</div>
							<!-- Hero image END -->
							<section class="entry-content cf" itemprop="articleBody">
								<?php
									the_content();
								?>
							</section>
						</article>
						<?php endwhile;  endif; ?>
					</main>
				</div>
			</div>
<?php get_footer(); ?>
