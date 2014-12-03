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


