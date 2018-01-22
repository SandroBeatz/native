
var $btnScroll = $("#header");
$(window).scroll(function(){
    if ( $(this).scrollTop() > 650 && $btnScroll.hasClass("header") ){
        $btnScroll.removeClass("header").addClass("fixed-header");
    } else if($(this).scrollTop() <= 650 && $btnScroll.hasClass("fixed-header")) {
        $btnScroll.removeClass("fixed-header").addClass("header");
    }
});//scroll

$(window).scroll(function(){
    if ( $(this).scrollTop() > 400 && $("#fixedBTN").hasClass("block-btn-fixed") ){
        $("#fixedBTN").removeClass("block-btn-fixed").addClass("open-btn-fixed");
    } else if($(this).scrollTop() <= 400 && $("#fixedBTN").hasClass("open-btn-fixed")) {
        $("#fixedBTN").removeClass("open-btn-fixed").addClass("block-btn-fixed");
    }
});//scroll

$(document).ready(function() {
    $("a.anchor").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 2200);
        return false;
    });
    $OpenMenu= $('.main-body');
    $(".btn-navbar").click(function(e) {
        if ( $OpenMenu.hasClass('open-menu-mobi') ) {
            $OpenMenu.removeClass('open-menu-mobi');
        } else {
            $OpenMenu.removeClass('open-menu-mobi');
            $OpenMenu.addClass('open-menu-mobi');
        }
    });
    $ClosedMenu = $('.main-body');
    $("section, footer").click(function(e) {
        if ( $OpenMenu.hasClass('hid') ) {
            $OpenMenu.removeClass('open-menu-mobi');
        } else {
            $OpenMenu.removeClass('open-menu-mobi');
            $OpenMenu.addClass('hid');
        }
    });
});

$(window).scroll(function() {
    parallax();
});
function parallax() {
    var scrolled = $(window).scrollTop();
    $(".intro").css("top", -(scrolled * 0.1) + "px");
    $(".intro").css("opacity", 1 - scrolled * 0.01 / 10);
    $(".intro").css("opacity", 1 - scrolled * 0.01 / 10);
}
$(document).ready(function () {
    $(window).on('scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#parallax').css({
            'transform': 'translate3d(0, ' + -(scrolled * - 0.35) + 'px, 0)',
            // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 2000 // fade out at 400px from top
        });
    });
});

$(document).ready(function () {
    // clear input
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
            return false;
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
            return false;
        });
    });

    // start vars
    var slider = $('.fade-slider');
    var advantages_carousel = $('#carouselAdvantages');
    var products_slider = $('.carousel-products');
    var tourney_slider = $('.list-couresel-control-tourney ');
    // end vars

    if(slider !== undefined) {
        slider.slick({
            fade: true,
            dots: true,
            autoplaySpeed: 5000,
            autoplay: true
        });
    }//end slider

    if(advantages_carousel !== undefined ) {
        advantages_carousel.slick({
            dots: true,
            cssEase: 'linear',
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }//end article_carousel

    if(products_slider !== undefined) {
        products_slider.slick({
            infinite: true,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 4000,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }//end reviews_slider

    if(tourney_slider !== undefined ) {
        tourney_slider.slick({
            dots: true,
            cssEase: 'linear',
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }//end article_carousel

    $(".list-couresel-control-tourney .item").click(function(e) {
        e.preventDefault();
        $(".list-couresel-control-tourney .item").removeClass('active');
        $(this).addClass('active');
    })


});


$(window).load(function() {
    $(".loader").fadeOut();
    $(".load-inner").delay(100).fadeOut("slow");
});

function getVals(){
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat( slides[0].value );
    var slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "<span class='number'>" + slide1 + "сом</span><i>-</i>  <span class='number'>" + slide2 + "сом </span>";
}

window.onload = function(){
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
    for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}