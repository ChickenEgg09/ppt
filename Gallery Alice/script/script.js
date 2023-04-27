jQuery(document).ready(function(){

    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(300);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(300);
    });

    $(function(){
        $('.tabmenulist>li>a').click(function(){
            $(this).parent().addClass('active').siblings().removeClass('active');
            return false;
        });
    });
});