jQuery(document).ready(function(){

    $('.bt_wrap a:first').click(function(){
        $('.layer').addClass('active')
    });
    $('.btn').click(function(){
        $('.layer').removeClass('active')
    });
})