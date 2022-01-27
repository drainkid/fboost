$(document).ready(function() {

    $(window).scroll(function () {

        if ($(window).scrollTop() < 100) {
            $('.v15_8').fadeOut('fast', 'swing');
            $('.v15_10').fadeOut('fast', 'swing');
            $('.v6_3').fadeOut('fast', 'swing');
            $('.v6_4').fadeOut('fast', 'swing');
            $('.v6_7').fadeOut('fast', 'swing');
            $('.v15_11').fadeOut('fast', 'swing');
            $('.v4_68').fadeOut('fast', 'swing');
            $('.opisanie').fadeOut('fast', 'swing');

        } else if ($(this).scrollTop() > 500) {
            firstAnimation();
            firstplusAnimation();
        }
    });
});


 firstAnimation = function () {
    $('.v6_2',).each(
        function () {
            $(this).animate({
                opacity: 1,
                height: '539',
                width: '1195'
            }, 2000);
        }
    );
};
function firstplusAnimation(){
    if ($(window).scrollTop() > 1200) {
        $('.v6_4').fadeIn('slow', 'linear').delay(10000);
        $('.v6_7').fadeIn('slow', 'swing').delay(100000);
        $('.opisanie').fadeIn('slow', 'swing').delay(100000);
    }

    $('.v15_11').fadeIn('slow', 'swing').delay(100000);
    $('.v4_68').fadeIn('slow', 'swing').delay(100000);
    $('.v15_8').fadeIn('slow', 'swing').delay(100000);
    $('.v15_10').fadeIn('slow', 'swing').delay(100000);
    $('.v6_3').fadeIn('fast', 'swing').delay(100000);
}

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