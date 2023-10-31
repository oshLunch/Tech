$(function () {
    let pBox = $('.product .box');
    let pSearch = $('.product .search');

    let nFaq = $('.notice .faq');
    let nDown = $('.notice .ect .download');
    let nContact = $('.notice .ect .contact');

    let lBox = $('.location .location_box');

    // fullpage 설정, 페이지 넘길 시 애니메이션 트리거 설정
    var myFullpage = new fullpage('#fullpage', {
        navigation: false,
        slidesNavigation: true,
        lazyLoad: true,
        credits: { enabled: false },
        anchors: ['main_visual', 'product', 'notice', 'location', 'footer'],
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 0) {
            }

            else if (destination.index == 1) {
                pBox.addClass('show');
                pSearch.addClass('show');
            }

            else if (destination.index == 2) {
                nFaq.addClass('show');
                nDown.addClass('show');
                nContact.addClass('show');
            }

            else if (destination.index == 3) {
                lBox.addClass('show');
            }

            else if (destination.index == 4) {
            }
        }
    });

    let gnb = $('header .gnb');
    let menu = $('header .gnb .depth01');
    let subMenu = $('header .gnb .depth01 .depth02');
    let menuBg = $('header .sub_bg');

    gnb.mouseenter(function () {
        menuBg.stop().slideDown();
    })

    gnb.mouseleave(function () {
        menuBg.stop().slideUp();
    })

    menu.mouseenter(function () {
        subMenu.eq($(this).index()).stop().slideDown();
    })

    menu.mouseleave(function () {
        subMenu.eq($(this).index()).hide();
    })

    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper1 = new Swiper(".main_swiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });

    const progressLine = document.querySelector('.autoplay-progress svg');
    var swiper2 = new Swiper(".item_swiper", {
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        initialSlide: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".number",
            clickable: false,
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return (
                    '<span class="current">' + 0 + (current) + '</span>' + '<span class="total">' + 0 + (total) + '</span>'
                );
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressLine.style.setProperty("--progress", 1 - progress)
            }
        }
    });

    new daum.roughmap.Lander({
        "timestamp": "1698650223358",
        "key": "2gn7k",
        "mapWidth": "980",
        "mapHeight": "650"
    }).render();

    let map = $('.root_daum_roughmap .wrap_map');
    map.css({
        "height": "100%"
    })
})