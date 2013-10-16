$(function(){
// Gather up some intel

var $wrap = $('.wrap');

var screenHeight = window.innerHeight,
	screenWidth = window.innerWidth,
	wrapOffset = [0, 0],
	dampener = 1,
	wrapSize = $wrap.width();

	console.log(wrapSize);






// console.log(wrapOffset[0]);

//Make them rects
	var rects = 100;

	for (var i = rects - 1; i >= 0; i--) {
		$('.wrap').append('<div class="rect" id="rect'+i+'">'+i+'</div>');
	}



	$('.container').on('scroll' , function(e){

		var x = ($('.container').scrollLeft() - 100) / dampener;
			x *= -1 //Invert it
		var y = ($('.container').scrollTop() - 100) / dampener;
			y *= -1 //Invert it

		$('.container').scrollLeft(100);
		$('.container').scrollTop(100); // Preventing scroll, and stopping the overscroll in chrome and such.

		$wrap.css({marginLeft:'+='+x+'px', marginTop: '+='+y+'px'});

		restack('#w1'); //This will check all the wraps and restack them when needed
		restack('#w2');
		restack('#w3');
		restack('#w4');
		//Scroll stop timer kashizle
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			// do something, anything!
			console.log("Haven't scrolled in 250ms!");
		}, 250));
		e.preventDefault();
		return false;
	});

//Like I said, restack when needed
	function restack(id){
		var w1mt = $(id).css('marginTop').replace(/[^-\d\.]/g, '');
		var w1ml = $(id).css('marginLeft').replace(/[^-\d\.]/g, '');
		console.log('top:'+w1mt+' left:'+w1ml);

		if(w1ml > 2000){
			$(id).css('marginLeft', '-=6000px')
		}
		if(w1ml < -3600){
			$(id).css('marginLeft', '+=6000px')
		}
		if(w1mt > -200){
			$(id).css('marginTop', '-=6000px')
		}
		if(w1mt < -5900){
			$(id).css('marginTop', '+=6000px')
		}

	}


                                                                                   

});