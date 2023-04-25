jQuery(document).ready(function(){

    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    setInterval(function(){
        $('.slidelist').delay(3000)
        $('.slidelist').animate({marginLeft: -1200})
        $('.slidelist').delay(3000)
        $('.slidelist').animate({marginLeft: -2400})
        $('.slidelist').delay(3000)
        $('.slidelist').animate({marginLeft: 0})
    });

    $('.noti li>a:first').click(function(){
        $('.layer').addClass('active')
    });
    $('.btn').click(function(){
        $('.layer').removeClass('active')
    });
});