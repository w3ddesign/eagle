$(document).ready(function(){
	
	// MENU TOGGLE
	$('.menu-toggle').click(function(){
	
		$('.main-nav ul').toggleClass('open');
	
	});
	
	// SMOOTH SCROLL
	
	$('.scroll').on('click', function(e) {
    	e.preventDefault();
    	$('html, body').animate({
    		scrollTop: $(this.hash).offset().top - 130
    	}, 1500);
  });

});	
	
$(window).scroll(function(){


var wScroll = $(window).scrollTop();

	
	// COLLAPSE MENU
	
	if(wScroll > $('.about').offset().top - 150){
	
		$('.main-nav').addClass('collapse');
		
	}else{
		$('.main-nav').removeClass('collapse');
	}
	
	
	// LANDING SKILLS ELEMENTS
	
  if(wScroll > $('.skills').offset().top - ($(window).height() / 1.2)) {

    $('.skill-item').each(function(i){

      setTimeout(function(){
        $('.skill-item').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }
	
	// COUNTER NUMBERS ANIMATION
	
	if(wScroll <= $('.numbers').offset().top - 500) {
		
		$('.timer').countTo();
	}


  // LANDING MOBILE CONTACT AS USER SCROLLS
	
	if(wScroll > $('.contact').offset().top - $(window).height()){
	
		var offset = Math.min(0, wScroll-$('.contact').offset().top +$(window).height() - 900); 
		
		// Declare a variable that has to be between 0 and the wScroll top of div, so the object max position will be 0
		
		$('.phone').css({
		
			'transform' : 'translate(0, '+ Math.abs(offset * 0.4) +'px)'
		
		});
	
	}

});
