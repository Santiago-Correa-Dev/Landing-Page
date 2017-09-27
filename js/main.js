$(window).scroll(function(){
    if ($(window).scrollTop() >= 52) {
       $('header').addClass('fixed-header');
    }
    else {
       $('header').removeClass('fixed-header');
    }
});

$(document).ready(function(){

    $("#burger-nav").on("click", function(){
    
        $(".nav").toggleClass("open");
        
    });

});