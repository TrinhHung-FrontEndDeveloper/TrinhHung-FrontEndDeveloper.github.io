$('.slide').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    dotsSpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.author').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    dotsSpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})