var messages = [];
$(document).ready(function () {
    const forbiddenWords = ["bậy", "xấu", "không hay", "cấm","đm","đù má","địt mẹ","chó","chết","phong bạt"]; // Danh sách từ cấm

    // Kiểm tra xem nội dung có chứa từ cấm không
    function containsForbiddenWords(input) {
        const lowerInput = input.toLowerCase();
        return forbiddenWords.some((word) => lowerInput.includes(word));
    }

    // Xóa lỗi khi người dùng sửa nội dung
    $("#message").on("input", function () {
        $(this).removeClass("is-invalid");
        $(this).next(".invalid-feedback").remove();
    });

    // Xóa lỗi khi người dùng sửa nội dung
    $("#message").on("input", function () {
        $(this).removeClass("is-invalid");
        $(this).next(".invalid-feedback").remove();
    });

    // Lấy danh sách lời chúc từ localStorage
    function getMessages() {
        const messages = localStorage.getItem("rsvpMessages");
        return messages ? JSON.parse(messages) : [];
    }

    // Lưu danh sách lời chúc vào localStorage
    function saveMessages(messages) {
        localStorage.setItem("rsvpMessages", JSON.stringify(messages));
    }

    // Cập nhật bảng hiển thị lời chúc
    function updateMessageTable() {
        const messages = getMessages();
        const $messageList = $("#message-list");
        $messageList.empty();

        if (messages.length != 0) {
           
            messages.forEach((msg) => {
                $messageList.append(`
                    <tr>
                        <td>${msg.name}</td>
                        <td>${msg.sl}</td>
                        <td>${msg.message}</td>
                    </tr>
                `);
            });
        }
    }

    // Xử lý gửi form
    $("#form-rsvp").on("submit", function (e) {
        e.preventDefault();

        const $form = $(this);
        let isValid = true;

        // Reset trạng thái lỗi
        $(".invalid-feedback").remove();
        $(".form-control, .form-check-input, .form-select").removeClass("is-invalid");

        // Lấy dữ liệu từ form
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();
        const sl = $("#num_guests").val();

        // Kiểm tra trường 'Name'
        if (name === "") {
            isValid = false;
            $("#name").addClass("is-invalid").after(`<div class="invalid-feedback">Name is required.</div>`);
        }

        // Kiểm tra trường 'Email'
        if (email === "") {
            isValid = false;
            $("#email").addClass("is-invalid").after(`<div class="invalid-feedback">Email is required.</div>`);
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            $("#email").addClass("is-invalid").after(`<div class="invalid-feedback">Invalid email format.</div>`);
        }

        // Kiểm tra trường 'Message'
        if (message === "" || containsForbiddenWords(message)) {
            isValid = false;
            $("#message")
                .addClass("is-invalid")
                .after(`<div class="invalid-feedback">Nội dung chứa từ không phù hợp. Vui lòng sửa lại!</div>`);
        }

        // Nếu có lỗi, dừng xử lý
        if (!isValid) return;

        // Thêm dữ liệu hợp lệ vào danh sách
        const newMessage = { name, sl, message };
        const messages = getMessages();
        messages.push(newMessage);
        saveMessages(messages);

        // Cập nhật bảng hiển thị
        updateMessageTable();

        // Hiển thị trạng thái thành công
        $(".form_status_message").html(`
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Biểu mẫu đã được gửi thành công! <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `);

        // Reset form sau khi gửi
        $form[0].reset();
    });

    // Khởi tạo bảng hiển thị khi trang tải
    updateMessageTable();
});
setTimeout(function () {
    $("#preloader").attr("style", "display:none;");// Ẩn preloader sau 10 giây
}, 400);
$('.dropdown').click(function(){
    let text ='';
    $('.dropdown').find("a").removeClass('active');
    $(this).find("a").addClass("active");
    let index = parseInt($(this).index()+1);
    // setInterval(function(){
      $('#preloader').attr("style","display:block;");
    //   chuyenslide(index);
    // },1000);
      
   if($(this).index() ==0){
      text = $('.zs-slide-0').attr("style").split(";",1);
      console.log(text);
      $('.zs-slide-0').removeAttr('style');
    //   $('.hero-divider-top').removeClass('animation-from-top');
    //   $('.hero-divider-bottom').removeClass('animation-from-bottom');
      $('.zs-slide-0').attr('style',text);
     }
    setTimeout(function(){
        let text1='';
           text1 = $('.zs-slide-0').attr("style");
        $('#preloader').attr("style","display:none;");
        $('.slidershow').removeAttr("style");
       
        $('.slidershow:nth-of-type('+index+')').attr("style","display:block;");
        // $('.bg-slideshow').addClass('zs-enabled overlay-plain');
        $('.zs-slide-0').attr('style',text1+';transition: transform 10000ms ease-out 0s, opacity 1000ms ease 0s; opacity: 1; transform: scale(1, 1); z-index: 2;');
        // $('.hero-divider-top').addClass('animation-from-top');
        // $('.hero-divider-bottom').addClass('animation-from-bottom');
        
        $("[data-animation-delay]").each(function () {
            var $this = $(this);
            var s = $(window).scrollTop();
            var h = $(window).height();
            var d = parseInt($this.attr("data-animation-delay"), 10);
            var dir = $this.data("animation-direction");

            if (dir === undefined) {
                return false;
            }

            $this.removeClass("animate-" + dir);
            $this.removeClass("animation-" + dir);
            $this.addClass("animate-" + dir);
            $this.addClass("animation-" + dir);
            $(document).ready(function () {
                if ((s + h) >= $this.offset().top) {
                    if (Number.isNaN(d) || d === 0) {
                        $this.removeClass("animate-" + dir).addClass("animation-" + dir);
                    } else {
                        setTimeout(function () {
                            $this.removeClass("animate-me").addClass("animation-" + dir);
                        }, d);
                    }
                }
            });
            $(".nav-mobile").removeClass("open");
            $('#wrapper').removeClass("open");
        });
    },200);
  
  
});
$("[data-animation-delay]").each(function () {
    var $this = $(this); // Phần tử hiện tại
    var s = $(window).scrollTop(); // Vị trí scroll hiện tại
    var h = $(window).height(); // Chiều cao cửa sổ
    var d = parseInt($this.attr("data-animation-delay"), 10); // Lấy thời gian delay
    var dir = $this.data("animation-direction"); // Hướng animation

    // Nếu không có hướng animation, dừng tại đây
    if (dir === undefined) {
        return;
    }

    // Thêm lớp animate-<direction> trước khi thực hiện animation
    $this.addClass("animate-" + dir);

    // Kiểm tra nếu phần tử đã nằm trong vùng nhìn thấy
    if ((s + h) >= $this.offset().top) {
        // Nếu không có hoặc delay bằng 0
        if (Number.isNaN(d) || d === 0) {
            $this.removeClass("animate-" + dir).addClass("animation-" + dir);
        } else {
            // Có delay, thêm animation sau khoảng thời gian delay
            setTimeout(function () {
                $this.removeClass("animate-" + dir).addClass("animation-" + dir);
            }, d);
        }
    }
});
$(window).on("scroll", function () {
    $("[data-animation-delay]").each(function () {
        var $this = $(this); // Phần tử hiện tại
        var s = $(window).scrollTop(); // Vị trí scroll hiện tại
        var h = $(window).height(); // Chiều cao cửa sổ
        var d = parseInt($this.attr("data-animation-delay"), 10); // Lấy thời gian delay
        var dir = $this.data("animation-direction"); // Hướng animation

        // Nếu không có hướng animation, dừng tại đây
        if (dir === undefined) {
            return;
        }

        // Thêm lớp animate-<direction> trước khi thực hiện animation
        $this.addClass("animate-" + dir);

        // Kiểm tra nếu phần tử đã nằm trong vùng nhìn thấy
        if ((s + h) >= $this.offset().top) {
            // Nếu không có hoặc delay bằng 0
            if (Number.isNaN(d) || d === 0) {
                $this.removeClass("animate-" + dir).addClass("animation-" + dir);
            } else {
                // Có delay, thêm animation sau khoảng thời gian delay
                setTimeout(function () {
                    $this.removeClass("animate-" + dir).addClass("animation-" + dir);
                }, d);
            }
        }
    });
});

var Neela;

(function ($) {
    "use strict";

    Neela = {

        initialized: false,
        cDays: c_days,
        cHours: c_hours,
        cMinutes: c_minutes,
        cSeconds: c_seconds,
        countdownEndMsg: countdown_end_msg,
        contactFormErrorMsg: contact_form_error_msg,
        contactFormRecaptchaErrorMsg: contact_form_recaptcha_error_msg,
        contactFormSuccessMsg: contact_form_success_msg,
        sendingMail: false,
        heroFullScreen: hero_full_screen,
        mapColor: map_color,
        mapInitialLatitude: map_initial_latitude,
        mapInitialLongitude: map_initial_longitude,
        mapInitialZoom: map_initial_zoom,
        // mapMarkers: map_markers,
        useDefaultMapStyle: use_default_map_style,
        mobMenuFlag: false,
        mobileMenuTitle: mobile_menu_title,
        onepageNav: onepage_nav,
        rtlFlag: rtl,
        slidehowImages: slidehow_images,
        timelineParallax: timeline_parallax,
        mapID: map_id,

        init: function () {

            var $_self = this;

            if ($_self.initialized) {
                return;
            }

            $_self.initialized = true;
            $_self.build();
            $_self.events();
        },
        
        build: function () {

            var $_self = this;

            /**
            * Create Neela Style elements
            */
            $_self.neelaStyle();

            /**
            * Preloader
            */
            // $_self.preloader();

            /**
            * Navigation
            */
            $_self.navigation();

            /**
            * Dinamically create the menu for mobile devices
            */
            $_self.createMobileMenu();

            /**
            * Fit hero to screen size
            */
            $_self.heroHeight();

            /**
            * Activate placeholder in older browsers
            */
            $("input, textarea").placeholder();

            /**
            * Initialize Google Maps and populate with pin locations
            */
          

            /**
            * Create Lightbox Gallery links
            */
            $_self.createLightboxGallery();

            /**
            * Create Hero Background Slideshow
            */
            $_self.createBackgroundSlideshow();

            /**
            * Create Owl Sliders
            */
            $_self.createOwlSliders();

            /**
            * Create Gallery
            */
            $_self.createGallery();

            /**
            * Create the Hero background image grid
            */
            $_self.bgImageGrid();

            /**
            * Create Countdown
            */
            $_self.countdown();

            /**
            * Initiate Parallax
            */
            $_self.parallaxBg();
        },

        events: function () {

            var $_self = this;
            var isLoadedVid;
            var isLoadedAnim;

            /**
            * Functions called on window resize
            */
            $_self.windowResize();

            /**
            * Resize embed videos
            */
            // isLoadedVid = setInterval(function () {
            //     if (/loaded|complete/.test(document.readyState)) {
            //         clearInterval(isLoadedVid);
            //         $_self.resizeVideos();
            //     }
            // }, 10);
            // $_self.resizeVideos();
            /**
            * Contact form submit
            */
            // $_self.contactForm();

            /**
            * Capture object events
            */
            $_self.objEvents();

            /**
            * Timeline Parallax Effect
            */
            $_self.parallaxTimeline();

            /**
            * Animate elements on scrolling
            */
            isLoadedAnim = setInterval(function () {
                if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(isLoadedAnim);
                    $_self.animateElems();
                }
            }, 10);
        },

        neelaStyle: function () {
            $(".neela-style, .btn.btn-primary, .btn.btn-light, .btn.btn-dark").prepend("<span class=\"h-lines\"></span><span class=\"v-lines\"></span>");
        },

     

        navigation: function () {

            var $_self = this;
            var sticky;
            
           
            $(".nav li a").on("click", function (event) {
                var navActive = $(this);
                var scroll = 0;
               
                if ($.browser.mobile && (!navActive.closest(".dropdown").hasClass("open") || navActive.closest(".dropdown-menu").css("display") === "block" || !navActive.parent().parent().hasClass("nav"))) {
                    event.preventDefault();
                    $(".nav-mobile").removeClass("open");
                    return false;
                }

                if (navActive.attr("href").charAt(0) === "#" && $(navActive.attr("href")).length) {
                    event.preventDefault();

                    if (navActive.attr("href") !== "#hero" && $(navActive.attr("href")).offset() !== null) {
                        scroll = $(navActive.attr("href")).offset().top - 55;
                    }

                    $("html, body").stop().animate({
                        scrollTop: scroll
                    }, 1500, "easeOutExpo", function () {
                        navActive.blur();
                    });
                  
                } else {
                    window.open(navActive.attr("href"), "_self");
                    $(".nav-mobile").removeClass("open");
                }
                
            });

            if (window.Waypoint !== undefined) {
                sticky = new Waypoint.Sticky({
                    element: $(".nav-section"),
                    offset: -1
                });

                sticky = sticky;
            }
            if ($(".nav-section.light").length) {
                $(window).on("scroll load", function () {
                    var s = $(window).scrollTop();

                    if (s > 180) {
                        $(".nav-section.light").addClass("sticky");
                    } else {
                        $(".nav-section.light").removeClass("sticky");
                    }
                });
              
            }

            if ($("#wrapper > section, #wrapper > div#hero").length !== 0 && $_self.onepageNav && jQuery().waypoint) {
                $("#wrapper > section, #wrapper > div#hero").waypoint({
                    element: $("#wrapper > section"),
                    handler: function (direction) {
                        var $elem = $(this);
                        var id = $elem[0].element.id;

                        if (direction === "up") {
                            id = $elem[0].element.previousElementSibling.id;
                        }

                        $(".nav a").removeClass("active");

                        if ($(window).scrollTop() < 100) {
                            $(".nav a[href=\"#hero\"]").addClass("active");
                        } else {
                            $(".nav a[href=\"#" + id + "\"]").addClass("active");
                        }
                    },
                    offset: "50%"
                });
            }

            $(window).on("load", function () {
                var hash = location.hash.replace("#", "");

                if (hash !== "") {
                    location.hash = "";
                    $("html, body").stop().animate({
                        scrollTop: $("#" + hash).offset().top - 65
                    }, 1500, "easeInOutExpo");
                }

                if (window.Waypoint !== undefined) {
                    sticky = new Waypoint.Sticky({
                        element: $(".nav-section")
                    });
                }
            });
           
        },
        

        createMobileMenu: function(w) {
            var $_self = this;
            var $wrapper = $("#wrapper");
            var $navMobile;
            var etype;
        
            // Use navigator.userAgent for mobile detection (cross-browser)
            if (/Mobi|Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
                etype = "touchstart";
            } else {
                etype = "click";
            }
        
            // Set window width if passed as null
            if (w !== null) {
                w = $(window).innerWidth();
            }
        
            // Only create the mobile menu if the window width is less than or equal to 975px
            if (w <= 975 && !$_self.mobMenuFlag) {
        
                // Prepend mobile navigation menu to body
                $("body").prepend("<nav class=\"nav-mobile\"><i class=\"fa fa-times\"></i><h2>" + $_self.mobileMenuTitle + "</h2><ul></ul></nav>");
                $(".nav-mobile > ul").html($(".nav").html());
        
                // Clean up unwanted elements from the mobile nav
                $(".nav-mobile b, .nav-mobile .nav-logo").remove();
                $(".nav-mobile ul.dropdown-menu").removeClass().addClass("dropdown-mobile");
        
                // Clone any buttons from the navbar into the mobile menu
                if ($(".navbar > a.btn").length) {
                    $(".navbar > a.btn").each(function () {
                        $(".nav-mobile").append($(this).clone());
                    });
                    $(".nav-mobile > a.btn").removeClass("btn-light").addClass("btn-primary btn-sm");
                }
        
                $navMobile = $(".nav-mobile");
        
                // Handle click or touch events for opening the menu
                $("#nav-mobile-btn").on(etype, function (e) {
                    e.stopPropagation();
                    e.preventDefault();
        
                    setTimeout(function () {
                        $wrapper.addClass("open");
                        $navMobile.addClass("open");
                    }, 25);
        
                    // Close mobile menu if clicking outside of it
                    $(document).on(etype, function (e) {
                        if (!$(e.target).hasClass("nav-mobile") && !$(e.target).parents(".nav-mobile").length) {
                            $wrapper.removeClass("open");
                            $navMobile.removeClass("open");
                            $(document).off(etype);
                        }
                    });
        
                    // Close the menu when clicking the close icon
                    $(">i", $navMobile).on(etype, function () {
                        $wrapper.removeClass("open");
                        $navMobile.removeClass("open");
                        $(document).off(etype);
                    });
                });
        
                $_self.mobMenuFlag = true;
        
                // Use event delegation for click event on menu items
                $(".nav-mobile").on(etype, "li a", function(event) {
                    var navActive = $(this); // Phần tử được click
                    var scroll = 0; // Giá trị scroll mặc định
                    var target = $(navActive.attr("href")); // Mục tiêu cuộn
                    let index = $(this).closest("li").index(); // Đếm vị trí của `li` chứa liên kết
                
                    console.log("Clicked index:", index); // Debug vị trí click
                 // Xóa trạng thái 'active' khỏi tất cả các liên kết trong dropdown
                 $('.nav-mobile .dropdown a').removeClass('active');
                 // Thêm trạng thái 'active' vào liên kết tại vị trí đã click
                 $('.nav-mobile .dropdown a').eq(index).addClass('active');
         
                 // Reset toàn bộ slidershow và hiển thị slidershow tương ứng
                 $('.slidershow').removeAttr("style");
                 $('.slidershow').eq(index).attr("style","display:block");
                 $('#preloader').attr("style","display:block;");
                    // Kích hoạt slider sau 1 giây
                    setTimeout(handleSlider, 1000);
                    if (target.length) {
                       // Tính toán vị trí cuộn
                        scroll = target.offset().top - 65;
                    }
                
                    // Cuộn mượt đến mục tiêu
                    $("html, body").stop().animate({
                        scrollTop: scroll
                    }, 1500, "easeInOutExpo", function() {
                        navActive.blur(); // Bỏ focus khỏi liên kết sau khi hoàn thành
                    });
                
                    // Đóng menu mobile sau khi click
                    $wrapper.removeClass("open");
                    $navMobile.removeClass("open");
                    $(document).off(etype);
                
                    // Ngăn hành vi mặc định của trình duyệt
                    event.preventDefault();
                });
                
            }
        },
        

        heroHeight: function () {

            var $_self = this;

            if ($_self.heroFullScreen) {
                $("#hero").css({minHeight: $(window).innerHeight() + "px"});

                $(window).resize(function () {
                    var padding = parseInt($("#hero").css("padding-bottom")) + 70;
                    var nextMargin = parseInt($("#hero").next("section").css("margin-top"));
                    var wHeight = $(window).innerHeight() - padding;
                    var cHeight = $("#hero >.container").height();
                    var dif;
                    var xtraMT = -10;

                    if (nextMargin < 0 && !Number.isNaN(nextMargin)) {
                        wHeight += nextMargin + padding;
                    }

                    dif = wHeight - cHeight;

                    if ($(".nav-section.light").length) {
                        xtraMT = 10;
                    }

                    if (dif > 0 && $(".v-center").length) {
                        $("#hero >.container").css({"margin-top": (((dif) / 2) + xtraMT) + "px"});
                    }

                    $("#hero").css({minHeight: $(window).innerHeight() + "px"});
                });
            }
        },

        bgImageGrid: function () {

            if ($("#freewall").length) {
                $("#freewall .item").each(function () {
                    var $item = $(this);
                    $item.width(Math.floor(260 + 200 * Math.random()));
                    $item.css({"background-image": "url(" + $(">img", $item).attr("src") + ")"});
                    $(">img", $item).remove();
                });

                $("#freewall").appendTo("#wrapper");

                $(document).ready(function () {
                    var wall = new Freewall("#freewall");
                    wall.reset({
                        selector: ".item",
                        animate: false,
                        cellW: 20,
                        cellH: 320,
                        gutterX: 1,
                        gutterY: 1,
                        onResize: function () {
                            wall.fitWidth();
                        }
                    });
                    wall.fitWidth();
                });
            }
        },

   

        createBackgroundSlideshow: function () {
            var $_self = this;

            if ($(".bg-slideshow").length && $_self.slidehowImages.length) {
                $(".bg-slideshow").zoomSlider({
                    src: $_self.slidehowImages,
                    bullets: false,
                    speed: 10000,
                    switchSpeed: 1000,
                    interval: 6000
                });
            }
        },

        createLightboxGallery: function () {

            if (window.lightbox !== undefined) {
                lightbox.option({
                    "resizeDuration": 200,
                    "wrapAround": true,
                    "disableScrolling": true,
                    "showImageNumberLabel": false,
                    "positionFromBottom": 150
                });
            }
        },

        createOwlSliders: function () {
            var $_self = this;

            if ($(".timeline-gallery").length) {
                $(".timeline-gallery").owlCarousel({
                    nav: true,
                    dots: false,
                    responsive: {
                        "0": {
                            items: 1
                        }
                    },
                    rtl: $_self.rtlFlag
                });
            }

            if ($(".testimonials").length) {
                $(".testimonials").owlCarousel({
                    nav: false,
                    dots: true,
                    responsive: {
                        "0": {
                            items: 1
                        }
                    },
                    rtl: $_self.rtlFlag
                });
            }
        },

        createGallery: function () {

            var $gallery = $(".gallery-scroller");
            var scrolling = false;

            if ($(".gallery-scroller").length) {

                $(".gallery-right").on("click", function () {
                    if (scrolling) {
                        return false;
                    }

                    scrolling = true;
                    $gallery.animate({scrollLeft: $gallery.scrollLeft() + 380}, function () {
                        scrolling = false;
                    });
                });

                $(".gallery-left").on("click", function () {
                    if (scrolling) {
                        return false;
                    }

                    scrolling = true;
                    $gallery.animate({scrollLeft: $gallery.scrollLeft() - 380}, function () {
                        scrolling = false;
                    });
                });

                $(document).ready(function () {
                    $(".gallery-scroller").niceScroll({
                        cursorcolor: "#fff",
                        cursorwidth: "0px",
                        background: "#fff",
                        cursorborder: "0px solid #1F2326",
                        zindex: "999",
                        autohidemode: false,
                        enablemousewheel: false,
                        touchbehavior: true
                    });
                });
            }
        },

        countdown: function () {
            var $_self = this;
            var changeTime;

            if ($(".countdown").length) {

                changeTime = function (counter, $parent, future) {
                    var today = new Date();
                    var _dd = future - today;
                    var _dday;
                    var _dhour;
                    var _dmin;
                    var _dsec;

                    if (_dd < 0) {
                        // $parent.html("<div class=\"end\">" + $_self.countdownEndMsg + "</div>");
                        clearInterval(counter);

                        return false;
                    }

                    _dday = Math.floor(_dd / (60 * 60 * 1000 * 24) * 1);
                    _dhour = Math.floor((_dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
                    _dmin = Math.floor(((_dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
                    _dsec = Math.floor((((_dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);

                    $(".days > div", $parent).html(_dday);
                    $(".hours > div", $parent).html(_dhour);
                    $(".minutes > div", $parent).html(_dmin);
                    $(".seconds > div", $parent).html(_dsec);
                };

                $(".countdown").each(function () {
                    var counter;
                    var $parent = $(this);
                    var future = new Date($parent.data("date"));
                    var html = "";

                    if (future && Object.prototype.toString.call(future) === "[object Date]" && !Number.isNaN(future)) {
                        html = "<div class=\"days\"><div></div><span>" + $_self.cDays + "</span></div>" +
                        "<div class=\"hours\"><div></div><span>" + $_self.cHours + "</span></div>" +
                        "<div class=\"minutes\"><div></div><span>" + $_self.cMinutes + "</span></div>" +
                        "<div class=\"seconds\"><div></div><span>" + $_self.cSeconds + "</span></div>";

                        $parent.html(html);
                    }

                    counter = setInterval(function () {
                        changeTime(counter, $parent, future);
                    }, 1000);
                });
            }
        },

        parallaxBg: function () {

            var $_self = this;

            if (!$.browser.mobile && $(window).innerWidth() > 992) {

                $(window).on("scroll", function () {
                    var scrolled = $(window).scrollTop();

                    $(".parallax-background").each(function () {
                        var $elem = $(this);
                        var initY = $elem.offset().top;
                        var height = $elem.outerHeight();
                        var visible = $_self.isInViewport(this);
                        var diff;
                        var ratio;

                        if (visible) {
                            diff = scrolled - initY;
                            ratio = Math.round((diff / height) * 100);
                            $elem.css("background-position", "center " + parseInt(-(ratio * (height / 250))) + "px");
                        }
                    });
                });

            } else {
                $(".parallax-background").css({"background-position": "50% 50%", "background-size": "cover", "background-attachment": "scroll"});
            }
        },

        isInViewport: function (elem) {
            var obj = elem.getBoundingClientRect();

            return (
                (obj.height > 0 || obj.width > 0) &&
                obj.bottom >= 0 &&
                obj.right >= 0 &&
                obj.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                obj.left <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        windowResize: function () {

            var $_self = this;

            $(window).resize(function () {
                var w = $(window).innerWidth();

                $_self.createMobileMenu(w);

                $_self.blogMetas();

                if ($(window).innerWidth() < 751) {
                    $(".navbar > a.btn").addClass("btn-sm");
                    $(".navbar > a.btn").width("auto");
                }
            });
        },

        resizeVideos: function () {

            
        },

    

        objEvents: function () {

            //Fix buttons width (round to integer)
            $(".btn").each(function () {
                var $btn = $(this);
                var w = $btn.width();
                var xtr = 2;
                var len = $btn.text().split(" ").length;

                if (len > 2 || $btn.find("i").length !== 0) {
                    xtr = 15;
                } else if (len > 1) {
                    xtr = 8;
                }

                $btn.width(Math.round(w) + xtr);
               
            });

            //Rotate heart divider on mouseenter about element
            $("#about-us .element .image").on("mouseenter", function () {
                var $elem = $(this);

                if ($elem.parent().is(":first-child") && !$(">.divider-about-us", $elem.closest(".row")).hasClass("flip")) {
                    return false;
                }

                if (!$elem.hasClass("flip")) {
                    if ($("#about-us .element .image.flip").length) {
                        $("#about-us .element .image").toggleClass("flip");
                    } else {
                        $elem.toggleClass("flip");
                    }

                    $(">.divider-about-us", $elem.closest(".row")).toggleClass("flip");
                }
            });

            //Slide map info on mouseenter map_canvas
            $("#map_canvas").on("mouseenter", function () {
                $(".location-info").addClass("open");
            }).on("mouseleave", function () {
                $(".location-info").removeClass("open");
            });

            // Scroll effect of navigation logo and .scrollto buttons
            $(".nav-logo, .scrollto").on("click", function (event) {
                var $navActive = $(this);
                var scroll = 0;
                var href = $navActive.attr("href");

                if (/#/.test(href) && $(href).length) {

                    event.preventDefault();

                    if (href !== "#hero") {
                        scroll = $(href).offset().top - 65;
                    }

                    $("html, body").stop().animate({
                        scrollTop: scroll
                    }, 1500, "easeInOutExpo", function () {
                        $navActive.blur();
                    });
                }
            });

            //Element V2 image handler
            if ($(".element-v2").length) {
                $(".element-v2").each(function () {
                    var $elem = $(">.image", $(this));
                    $elem.css({"background-image": "url(" + $(">img", $elem).attr("src") + ")"});
                    $(">img", $elem).hide();
                });
            }

            if ($(".overflow-image").length) {
                $(".overflow-image").each(function () {
                    var $elem = $(this);
                    $elem.css({"background-image": "url(" + $(">img", $elem).attr("src") + ")"});
                });
            }

            if ($(".progress").length) {
                $(".progress").waypoint(function () {
                    $(".progress").each(function () {
                        $("> .progress-bar", $(this)).delay(300).queue(function (next) {
                            var $elem = $(this);
                            $elem.css("width", $elem.attr("aria-valuenow") + "%");
                            next();
                        });
                    });
                }, {
                    triggerOnce: true,
                    offset: "bottom-in-view"
                });
            }
        },

        parallaxTimeline: function () {

            var $_self = this;
            var tp;

            if ($_self.timelineParallax) {
                tp = function (e) {
                    $("> div", this).each(function () {

                        var $obj = $(this);
                        var val = $obj.attr("data-parallax");
                        var x = (e.clientX * val) / 300;
                        var y = (e.clientY * val) / 300;

                        $obj.css({
                            "-webkit-transform": "translateX(" + x + "px) translateY(" + y + "px)",
                            "-moz-transform": "translateX(" + x + "px) translateY(" + y + "px)",
                            "-ms-transform": "translateX(" + x + "px) translateY(" + y + "px)",
                            "-o-transform": "translateX(" + x + "px) translateY(" + y + "px)",
                            "transform": "translateX(" + x + "px) translateY(" + y + "px)"
                        });
                    });
                };

                if ($(window).innerWidth() > 992) {
                    $(window).scroll(function () {
                        var s = $(window).scrollTop();
                        var h = $(window).height();

                        $(".timeline [class^=\"template-\"]").each(function () {
                            var $obj = $(this);
                            var offset = $obj.offset().top;
                            var timelineH = $obj.height();

                            if ((s + h) >= offset && s <= (offset + timelineH)) {
                                $obj.on("mousemove", tp);
                            } else {
                                $obj.off("mousemove", tp);
                            }

                        });
                    });
                }
            }
        },

        blogMetas: function () {
            var $elems = $(".info-blog .bottom-info, .post-content .bottom-info");

            if ($elems.length) {
                $elems.each(function () {
                    var $obj = $(this);

                    if ($obj.height() > 35) {
                        $obj.addClass("center");
                    } else {
                        $obj.removeClass("center");
                    }
                });
            }
        },

        animateElems: function () {

            var animate = function () {
                $("[data-animation-delay]").each(function () {
                    var $this = $(this);
                    var s = $(window).scrollTop();
                    var h = $(window).height();
                    var d = parseInt($this.attr("data-animation-delay"), 10);
                    var dir = $this.data("animation-direction");

                    if (dir === undefined) {
                        return false;
                    }
                   
                   
                    $this.addClass("animate-" + dir);

                    $(document).ready(function () {
                        if ((s + h) >= $this.offset().top) {
                            if (Number.isNaN(d) || d === 0) {
                                
                                $this.removeClass("animate-" + dir).addClass("animation-" + dir);
                            } else {
                               
                                setTimeout(function () {
                                    
                                    $this.removeClass("animate-me").addClass("animation-" + dir);
                                }, d);
                            }
                        }
                    });
                });
            };

            if ($(window).innerWidth() >= 751) {
                $(window).scroll(function () {
                    animate();
                });

                animate();
            } else {
                $("[data-animation-delay]").addClass("visible");
            }
        }
    };

    Neela.init();

}(jQuery));





$('.thamdu').click(function(){
    $('.dropdown a').removeClass('active');
    $('.dropdown a').eq(6).addClass('active');
    $('.slidershow').removeAttr("style");
    $('.slidershow').eq(6).attr("style","display:block");
    $('#preloader').attr("style","display:block;");
    setTimeout(handleSlider,1000);
   
});
$('.mungcuoi').click(function(){
    $('.dropdown a').removeClass('active');
    $('.dropdown a').eq(5).addClass('active');
    $('.slidershow').removeAttr("style");
    $('.slidershow').eq(5).attr("style","display:block");
    $('#preloader').attr("style","display:block;");
    setTimeout(handleSlider,1000);
});
$('.sukien').click(function(){
    $('.dropdown a').removeClass('active');
    $('.dropdown a').eq(4).addClass('active');
    $('.slidershow').removeAttr("style");
    $('.slidershow').eq(4).attr("style","display:block");
    $('#preloader').attr("style","display:block;");
    setTimeout(handleSlider,1000);
});
$('.ablum').click(function(){
    $('.dropdown a').removeClass('active');
    $('.dropdown a').eq(3).addClass('active');
    $('.slidershow').removeAttr("style");
    $('.slidershow').eq(3).attr("style","display:block");
    $('#preloader').attr("style","display:block;");
    setTimeout(handleSlider,1000);
});
$('.capdoi').click(function(){
    $('.dropdown a').removeClass('active');
    $('.dropdown a').eq(1).addClass('active');
    $('.slidershow').removeAttr("style");
    $('.slidershow').eq(1).attr("style","display:block");
    $('#preloader').attr("style","display:block;");
    setTimeout(handleSlider,1000);
});

function handleSlider() {
    $('#preloader').attr("style","display:none;");
};


// Lấy toàn bộ URL hiện tại
const urlParams = new URLSearchParams(window.location.search);

// Lấy giá trị của tham số 'name'
const ten = urlParams.get('ten'); 

// Lấy giá trị của tham số 'age'
const call = urlParams.get('call'); 

const kieu = urlParams.get('kieu');

const day = urlParams.get('day');

const h = urlParams.get('h');
if(kieu != null){
    $('.end').text("Xuân Giang");
    $('.giachu1').html("Gia chủ<br>Lai Cách - Xuân Giang - Sóc Sơn - Hà Nội ");
    $('.lecuoi').html('Tại nhà gái<br>Số nhà 250,Xóm Giữa Lai Cách ,Xuân Giang, Sóc Sơn, Hà Nội.<br>21.279064, 105.894710');
    $('.tiec').html('Tiệm ABC<br>Số nhà 250,Xóm Giữa Lai Cách ,Xuân Giang, Sóc Sơn, Hà Nội.<br>21.279064, 105.894710');
    $('.giachu').html('Gia Chủ<br>Số nhà 250,Xóm Giữa Lai Cách,Xuân Giang,Sóc Sơn,Hà Nội.<br>21.279064, 105.894710');

}
if(day != null){
    $('.ngaycuoi').html('01 tháng 12, 2024<small>(Tức ngày 01 tháng 11 âm lịch)</small><small>AM 11:00</small>');
}
if(ten != null || call != null){
    $('.ten').text(call+" "+ten);
}