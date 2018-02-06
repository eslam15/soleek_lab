module.exports = function() {

    $('a[href="#hi"]').on('click', function() {
        $('.main-header-container').removeClass('header-scrolled');
        $('#mainSection .holder-content').removeClass('holder-content-fade');
        $('.nav.navbar-nav').removeClass('scrolled');
        $('.wave1-visible').removeClass('wave1-move');
        $('.wave2-visible').removeClass('wave2-move');
        $('.wave3-visible').removeClass('wave3-move');
        $('.wave1-visible').removeClass('wave1');
        $('.wave2-visible').removeClass('wave2');
        $('.wave3-visible').removeClass('wave3');
        $('.wave1-visible').addClass('wave1-hidden');
        $('.wave2-visible').addClass('wave2-hidden');
        $('.wave3-visible').addClass('wave3-hidden');
    });

    if (window.location.href.indexOf('single-project') > -1) {
        $('.nav.navbar-nav').addClass('scrolled');
        $('.navbar-header').append('<a class="inner-brand" href="index.html">Soleek lab</a>');

    } else {
        $('.nav.navbar-nav').removeClass('scrolled');
        $('.inner-brand').detach();
    }

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
                fitToSectionDelay: 500,
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
                scrollOverflow: true,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,

                //Accessibility
                keyboardScrolling: true,
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

                //events
                onLeave: function(index, nextIndex, direction) {
                    var leavingSection = $(this);
                    //after leaving section 1
                    if (index == 1 && direction == 'down') {
                        $('.main-header-container').addClass('header-scrolled');
                        $('.nav.navbar-nav').addClass('scrolled');
                        $('#mainSection .holder-content').addClass('holder-content-fade');
                    }
                    //in section 1
                    if (index == 2 && direction == 'up') {
                        $('.main-header-container').removeClass('header-scrolled');
                        $('#mainSection .holder-content').removeClass('holder-content-fade');
                        $('.nav.navbar-nav').removeClass('scrolled');
                        $('.wave1-visible').removeClass('wave1-move');
                        $('.wave2-visible').removeClass('wave2-move');
                        $('.wave3-visible').removeClass('wave3-move');
                        $('.wave1-visible').removeClass('wave1');
                        $('.wave2-visible').removeClass('wave2');
                        $('.wave3-visible').removeClass('wave3');
                        $('.wave1-visible').addClass('wave1-hidden');
                        $('.wave2-visible').addClass('wave2-hidden');
                        $('.wave3-visible').addClass('wave3-hidden');

                    }

                    // waves is section 2
                    if (nextIndex == 2) {
                        $('.wave1-visible').removeClass('wave1-move');
                        $('.wave2-visible').removeClass('wave2-move');
                        $('.wave3-visible').removeClass('wave3-move');
                        $('.wave1-visible').removeClass('wave1-hidden');
                        $('.wave2-visible').removeClass('wave2-hidden');
                        $('.wave3-visible').removeClass('wave3-hidden');
                        $('.wave1-visible').addClass('wave1');
                        $('.wave2-visible').addClass('wave2');
                        $('.wave3-visible').addClass('wave3');
                    }

                    // waves is section 3
                    if (nextIndex == 3) {
                        $('.wave1-visible').removeClass('wave1');
                        $('.wave2-visible').removeClass('wave2');
                        $('.wave3-visible').removeClass('wave3');
                        $('.wave1-visible').removeClass('wave1-hidden');
                        $('.wave2-visible').removeClass('wave2-hidden');
                        $('.wave3-visible').removeClass('wave3-hidden');
                        $('.wave1-visible').addClass('wave1-move');
                        $('.wave2-visible').addClass('wave2-move');
                        $('.wave3-visible').addClass('wave3-move');
                    }

                    // waves is section 4
                    if (nextIndex == 4) {
                        $('.wave1-visible').removeClass('wave1-move');
                        $('.wave2-visible').removeClass('wave2-move');
                        $('.wave3-visible').removeClass('wave3-move');
                        $('.wave1-visible').removeClass('wave1');
                        $('.wave2-visible').removeClass('wave2');
                        $('.wave3-visible').removeClass('wave3');
                        $('.wave1-visible').addClass('wave1-hidden');
                        $('.wave2-visible').addClass('wave2-hidden');
                        $('.wave3-visible').addClass('wave3-hidden');
                    }
                },
            });
        }





    });
    $(document).ready(function() {

        if ($('#innerFullpage').length > 0) {
            $('#innerFullpage').fullpage({
                //Navigation
                menu: '#menu',
                anchors: ['single-project1', 'single-project2'],

                //Scrolling
                css3: true,
                scrollingSpeed: 800,
                autoScrolling: true,
                fitToSection: true,
                fitToSectionDelay: 500,
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
                scrollOverflow: true,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,

                //Accessibility
                keyboardScrolling: true,
                animateAnchor: true,
                recordHistory: true,

                //Design
                controlArrows: false,
                verticalCentered: true,
                paddingTop: '0',
                paddingBottom: '0',
                fixedElements: '.main-navbar',
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: false,

                //Custom selectors
                sectionSelector: '.project-page',
                lazyLoading: true,

            });
        }
    });
};