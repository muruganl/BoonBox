/* Lisy */
$(document).on('pagebeforecreate', '#electronics, #Cookware', function(){ 
    $('<div>').attr({'data-role':'header','data-theme':'a','data-position':'fixed','data-id':'footer'}).append('<h3>Article</h3>').appendTo($(this));
    $('<div>').attr({'data-role':'footer','data-theme':'a','data-position':'fixed','data-id':'footer'}).append('<h3>Article footer</h3>').appendTo($(this));    
});

$(document).off('swipeleft').on('swipeleft', 'article', function(event){    
    if(event.handled !== true) // This will prevent event triggering more then once
    {    
        var nextpage = $.mobile.activePage.next('article[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
    }
    return false;         
});

$(document).off('swiperight').on('swiperight', 'article', function(event){   
    if(event.handled !== true) // This will prevent event triggering more then once
    {      
        var prevpage = $(this).prev('article[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
    }
    return false;            
});

//* Loading screen
$ (function(){
setTimeout(function(){
    $.mobile.changePage("#login", "fade");
}, 3000);
});



//* App store

$(function(){
	//Featured Slide
	var featuredSwiper = $('.featured').swiper({
		slidesPerView:'auto',
		centeredSlides: true,
		autoplay:3000,
		initialSlide:7,
		tdFlow: {
			rotate : 30,
			stretch :10,
			depth: 150
		}
	})
	
	//Thumbs
	$('.thumbs-cotnainer').each(function(){
		$(this).swiper({
			slidesPerView:'auto',
			offsetPxBefore:25,
			offsetPxAfter:10,
			calculateHeight: true
		})
	})

	//Banners
	$('.banners-container').each(function(){
		$(this).swiper({
			slidesPerView:'auto',
			autoplay:4000,
			offsetPxBefore:25,
			offsetPxAfter:10
		})	
	})
})

// Star Rating
      $(function () {
        $('input.check').on('change', function () {
          alert('Rating: ' + $(this).val());
        });
        $('.rating-tooltip').rating({
          extendSymbol: function (rate) {
            $(this).tooltip({
              container: 'body',
              placement: 'bottom',
              title: 'Rate ' + rate
            });
          }
        });
      });

