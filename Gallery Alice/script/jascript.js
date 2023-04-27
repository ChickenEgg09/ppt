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

    $('.container th>a:first').click(function(){
        $('.layer').addClass('active')
    });
    $('.btn').click(function(){
        $('.layer').removeClass('active')
    });
});