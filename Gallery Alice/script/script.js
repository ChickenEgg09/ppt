jQuery(document).ready(function(){

    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    $(function(){
        $('.tabmenulist>li>a').click(function(){
            $(this).parent().addClass('active').siblings().removeClass('active');
            return false;
        });
    });
});