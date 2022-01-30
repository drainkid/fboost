$(document).ready(function() {

    $(window).scroll(function () {

        if ($(window).scrollTop() < 100) {
            $('.ban1').fadeOut('fast', 'swing');
            $('.ban11').fadeOut('fast', 'swing');
            $('.ban3').fadeOut('fast', 'swing');
            $('.bantext').fadeOut('fast', 'swing');
            $('.voprosik').fadeOut('fast', 'swing');
            $('.opisanie2').fadeOut('fast', 'swing');
            $('.ban4').fadeOut('fast', 'swing');
            $('.text3').fadeOut('fast', 'swing');
            $('.opisanie').fadeOut('fast', 'swing');

        } else if ($(this).scrollTop() > 500) {
            firstAnimation();
            firstplusAnimation();
        }
    });
});


 firstAnimation = function () {
    $('.block2',).each(
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
        $('.voprosik').fadeIn('slow', 'linear');
        $('.opisanie2').fadeIn('slow', 'swing');
        $('.opisanie').fadeIn('slow', 'swing');
    }

    $('.ban1').fadeIn('slow', 'swing');
    $('.ban11').fadeIn('slow', 'swing');
    $('.text3').fadeIn('slow', 'swing');
    $('.ban2').fadeIn('slow', 'swing');
    $('.ban3').fadeIn('slow', 'swing');
    $('.bantext').fadeIn('fast', 'swing');
    $('.ban4').fadeIn('slow', 'swing');
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