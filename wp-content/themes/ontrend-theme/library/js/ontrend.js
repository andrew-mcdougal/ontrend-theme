(function($) {

	$(document).ready(function() {
		var $hamburger = $(".hamburger");
		var $headerNav = $('.header-nav');
		var $headerNavMenu = $('.header-nav #menu-main');


		$hamburger.on("click", function(e) {

		// if has class 'is-active'
		if($(this).hasClass('is-active')){
			$(this).removeClass('is-active');
			//$headerNav.removeClass('nav-active');
			// nav timeline hide
			
			var navTimelineHide = new TimelineMax();
			navTimelineHide.to($headerNavMenu, 0.2, {autoAlpha:0})
			navTimelineHide.to($headerNav, 0.2, {top:'-100vh'}, '+=0.2')
			;
			

			} else {
				$(this).addClass('is-active');
				//$headerNav.addClass('nav-active');
				// nav timeline show
				
				var navTimelineShow = new TimelineMax();
				navTimelineShow.to($headerNav, 0.2, {top:53})
				navTimelineShow.to($headerNavMenu, 0.2, {autoAlpha:1})
				;
				
			}

		}); // end hamburger click
	});
})( jQuery );