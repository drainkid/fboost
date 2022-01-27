$(document).ready(function (){

    $('.v3_32').fadeOut('fast', 'swing');
    $('.v10_2').fadeOut('fast', 'swing');
    $('.v10_4').fadeOut('fast', 'swing');
    $('.v10_3').fadeOut('fast', 'swing');

    $(window).scroll(function () {


        if ($(this).scrollTop() > 200) {

            $('.v3_32').fadeIn('slow', 'swing');
            $('.v10_2').fadeIn('slow', 'swing');

        }
        if ($(this).scrollTop() > 1000) {
            $('.v10_4').fadeIn('slow', 'swing');
            $('.v10_3').fadeIn('slow', 'swing');
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