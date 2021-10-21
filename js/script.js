$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3,
        },
    },
});

$(window).scroll(function() {
    var x = $(window).scrollTop();
    if (x > 250) {
        $(".navbar").addClass("sticky");
        $(".test").show();
    } else {
        $(".navbar").removeClass("sticky");
        $(".test").hide();
    }
});




$('.test').click(function() {

    $('body,html').animate({
        scrollTop: 0
    }, 200);
})


$('nav ul li a').click(function() {
    $('body , html').animate({
        scrollTop: $($(this).attr('href')).offset().top()
    })
})