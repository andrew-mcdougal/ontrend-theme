(function($) {

	$(document).ready(function() {
		var $hamburger = $(".hamburger");
		$hamburger.on("click", function(e) {

		// if has class 'is-active'
		if($(this).hasClass('is-active')){
			$(this).removeClass('is-active');
			// nav timeline hide
			/*
			var navTimelineHide = new TimelineMax();
			navTimelineHide.set($navItem, {autoAlpha:1, onComplete: navHide})
			navTimelineHide.to($navExtra, 0.2, {height:0}, '+=0.2')
			navTimelineHide.to($nav, 0.2, {height:0})
			navTimelineHide.set($navItem, {autoAlpha:1, onComplete: navReset});
			*/

			} else {
				$(this).addClass('is-active');
				// nav timeline show
				/*
				var navTimelineShow = new TimelineMax();
				navTimelineShow.to($navExtra, 0.2, {height:30, onComplete: navShow})
				;
				*/
			}
		}); // end hamburger click


	});
})( jQuery );