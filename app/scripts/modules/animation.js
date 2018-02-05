module.exports = function() {

    // $(window).scroll(function() {
    // $("#main").each(function() {
    //     var docViewTop = $(window).scrollTop(),
    //         docViewBottom = docViewTop + $(window).outerHeight(),
    //         elemTop = $(this).offset().top,
    //         elemBottom = elemTop + $(this).outerHeight() - 100;
    //     if ((elemBottom <= docViewBottom)) {
    //         $(this).addClass('section-in-view');
    //         $(this).removeClass('section-out-view');
    //     } else {
    //         $(this).addClass('section-in-view');
    //         $(this).removeClass('section-out-view');
    //     }
    // });
    // });

    $('a[href="#hi"]').on('click', function() {
        $('.main-header-container').removeClass('header-scrolled');
        $('.nav.navbar-nav').removeClass('scrolled');
    });


    $('body').on('mousewheel', function(e) {
        var delta = e.originalEvent.wheelDelta;
        if (delta < 0) {
            $('.main-header-container').addClass('header-scrolled');
            $('.nav.navbar-nav').addClass('scrolled');
        } else if (delta > 0 && window.location.href.indexOf('hi') > -1) {
            $('.main-header-container').removeClass('header-scrolled');
            $('.nav.navbar-nav').removeClass('scrolled');
        }
    });


    AOS.init({
        offset: 0
    });


    $(document).ready(function() {
        if ($('#fullpage').length > 0) {
            $('#fullpage').fullpage({
                //Navigation
                menu: '#menu',
                anchors: ['hi', 'about', 'services', 'projects'],

                //Scrolling
                css3: true,
                scrollingSpeed: 800,
                autoScrolling: true,
                fitToSection: true,
                fitToSectionDelay: 1000,
                scrollBar: false,
                easing: 'easeInOutCubic',
                easingcss3: 'ease',
                loopBottom: false,
                loopTop: false,
                loopHorizontal: true,
                continuousVertical: false,
                continuousHorizontal: false,
                scrollHorizontally: false,
                interlockedSlides: false,
                dragAndMove: false,
                offsetSections: false,
                resetSliders: false,
                fadingEffect: true,
                scrollOverflow: true,
                scrollOverflowReset: true,
                scrollOverflowOptions: null,
                touchSensitivity: 50,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,

                //Accessibility
                keyboardScrolling: false,
                animateAnchor: true,
                recordHistory: true,

                //Design
                controlArrows: false,
                verticalCentered: true,
                paddingTop: '0',
                paddingBottom: '0',
                fixedElements: '.main-navbar, .main-header-container',
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: false,

                //Custom selectors
                sectionSelector: '.section',
                lazyLoading: true,
            });
        }
    });
};