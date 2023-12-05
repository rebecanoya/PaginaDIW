$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    document.getElementsByClassName("owl-nav")[0].classList.remove("disabled");


});
