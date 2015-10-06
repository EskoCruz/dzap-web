/**
 * Created by esko on 10/5/15.
 */
$(document).ready(function () {

	// if browser supports css keyframes
	// support for ie 9
	if(!Modernizr.cssanimations) {
		//jQuery fallback

		// setup slideshow order
		$('.slideshow img.slide.base').clone().prependTo('.slideshow');
		$('.slideshow img.slide.base').last().removeClass('base').addClass('active');

		$('.slideshow img.slide').css('z-index', 1);
		$('.slideshow img.slide').eq(1).css('z-index', 3);
		$('.slideshow img.slide').eq(2).css('z-index', 2);
		$('.slideshow img.slide').not('.base').css('opacity', 1);

		// change slide every 5 seconds
		setInterval('slideshow()', 5000);

	}

});

function slideshow(){
	var active = $('.slideshow .slide.active');
	var nextSlide = (active.next('.slide').not('.base').length > 0) ? active.next('.slide').not('.base') : $('.slideshow img.slide').not('.base').first();
	// move next image up
	nextSlide.css('z-index',2);
	// fade out the top image
	active.fadeOut(1500,function(){
		// reset z-index and show image
		active.css('z-index',1).show().removeClass('active');
		// make next image top
		nextSlide.css('z-index',3).addClass('active');
	});
}
