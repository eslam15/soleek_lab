module.exports = function() {

    $('a[href="#hi"]').on('click', function() {
        $('.main-header-container').removeClass('header-scrolled');
        $('.nav.navbar-nav').removeClass('scrolled');
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
                        //in section 1
                    } else if (index == 2 && direction == 'up') {
                        $('.main-header-container').removeClass('header-scrolled');
                        $('.nav.navbar-nav').removeClass('scrolled');
                    }
                },
            });
        }
    });
};