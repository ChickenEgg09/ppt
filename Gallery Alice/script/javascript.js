jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(300);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(300);
    });

    setInterval(function(){
        $('.slidelist').delay(3000)
        $('.slidelist').animate({marginLeft: -1200})
        $('.slidelist').delay(3000)
        $('.slidelist').animate({marginLeft: -2400})
        $('.slidelist').delay(3000)
        $('.slidelist').animate({marginLeft: 0})
    });
});