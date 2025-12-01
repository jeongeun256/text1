//#header gnb 이동하기
$(function () {
    let headerH = $('#header').outerHeight();

    $('.gnb a').on('click', function (e) {
        e.preventDefault();

        let target = $(this).attr('href');
        let offsetTop = $(target).offset().top - headerH;

        $('html, body').animate({ scrollTop: offsetTop }, 600);
    });
});

//#visual visualSwiper 시작, 메인 배너 부분
var swiper = new Swiper(".visualSwiper", {
    slidesPerView: 1, // 한 슬라이드에 보여줄 갯수
    spaceBetween: 0, // 슬라이드 사이 여백
    autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 3000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    effect: 'fade', // 페이드 효과 사용
    speed: 1500, // fade 효과의 전환 시간을 1000ms(1.5초)로 설정
    loop: true, // 슬라이드 반복 여부
    navigation: false, // 화살표 버튼 제거
    pagination: {
        el: "#visual .swiper-pagination",
        clickable: false,  // 불렛 버튼 클릭 여부
    }

});

//#section4 Interior design silde 시작
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 14,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    preventInteractionOnTransition: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: false,           // 화살표 버튼 제거

});

//#setion5 Equipment slide 시작
var swiper = new Swiper(".equipmentSwiper", {
    slidesPerView: 5,
    spaceBetween: 11,
    centeredSlides: true,
    loop: true,
    preventInteractionOnTransition: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".equipment_btn_next",
        prevEl: ".equipment_btn_prev",
    },
});

//#setion6 Column slide 시작
var swiper = new Swiper(".columnSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 44,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    preventInteractionOnTransition: true,
    pagination: {
        el: ".column_pagination",
        clickable: false,
    },
    navigation: {
        nextEl: ".column_btn_next",
        prevEl: ".column_btn_prev",
    },
    // 슬라이드 변경 시 이벤트
    on: {
        slideChangeTransitionStart: function () {
            // 모든 슬라이드 반투명 처리
            this.slides.forEach(slide => slide.style.opacity = '0.6');
            // 현재 활성 슬라이드 불투명 처리
            this.slides[this.activeIndex].style.opacity = '1';
        },
        init: function () {
            this.slides.forEach(slide => slide.style.opacity = '0.6');
            this.slides[this.activeIndex].style.opacity = '1';
        }
    }
});

//#setion7 Event slide 시작
var swiper = new Swiper(".eventSwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    //centeredSlides: true,
    loop: true,
    preventInteractionOnTransition: true,
    pagination: {
        el: ".event_pagination",
        clickable: false,
    },
    navigation: {
        nextEl: ".event_btn_next",
        prevEl: ".event_btn_prev",
    },
});

//aside top 버튼 
$(function () {
    //맨 위 부드럽게 이동
    $(".aside button").click(function () {
        $("html,body").animate({
            // 세로위치 0
            scrollTop: '0'
            //1초동안
        }, 1000);
    });

    //일정 구간부터 버튼 나타나게 하기
    $(".aside button").hide();
    // 스크롤하면,
    $(window).scroll(function () {
        // 100보다 크면 보이고, 100보다 작으면 사라진다.
        if ($(this).scrollTop() > 100) {
            $(".aside button").fadeIn()
        } else {
            $(".aside botton").fadeOut()
        }
    });
});

