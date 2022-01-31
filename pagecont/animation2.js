$(document).ready(function (){

    $('.fedorfet').fadeOut('fast', 'swing');
    $('.drainkid').fadeOut('fast', 'swing');
    $('.allcash').fadeOut('fast', 'swing');
    $('.ruiner').fadeOut('fast', 'swing');

    $(window).scroll(function () {


        if ($(this).scrollTop() > 200) {

            $('.fedorfet').fadeIn('slow', 'swing');
            $('.drainkid').fadeIn('slow', 'swing');

        }
        if ($(this).scrollTop() > 1000) {
            $('.allcash').fadeIn('slow', 'swing');
            $('.ruiner').fadeIn('slow', 'swing');
        }

    });

});

//knopka vverh
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 250) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});