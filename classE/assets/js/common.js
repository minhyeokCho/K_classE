/* 《 공통 스크립트 》 */

$(document).ready(function(){
	$('.main_slide').length && mainSlide(); //main slide
	$('.coach_slide').length && coachSlide(); //코치 slide
	$('.rv_slide').length && reviewSlide(); //리뷰 slide
	$('.terms_wrap').length && checkBox(); //체크 박스 전체동의
	$('.faq_wrap').length && faq(); //faq slide
	$('.popup').length && popup(); //popup
});

function mainSlide(){ //main slide
	var mainSlide = new Swiper('.main_slide', {
		slidesPerView:1,
		loop: true,
		loopAdditionalSlides : 1,
		speed : 1000,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination : { // 페이징 설정
			el : '.swiper-pagination',
			clickable : true,
		},
	});
}

function coachSlide(){ //코치 slide
	var coachSlide = new Swiper('.coach_slide', {
		slidesPerView:1,
		loop: true,
		loopAdditionalSlides : 1,
		observer: true,
		observeParents: true,
		speed : 1000,
		navigation: {
			nextEl: '.btn_arrow.next',
			prevEl: '.btn_arrow.prev',
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
	});
}

function reviewSlide(){ //리뷰 slide
	var reviewSlide = new Swiper('.rv_slide', {
		slidesPerView:3,
		spaceBetween : 30,
		loop: true,
		loopAdditionalSlides : 1,
		observer: true,
		observeParents: true,
		speed : 1000,
		navigation: {
			nextEl: '.rv_btn_arrow.next',
			prevEl: '.rv_btn_arrow.prev',
		},
	});
}

function checkBox(){ //체크 박스 전체동의
	$("#cbx_chkAll").click(function() {
		if($("#cbx_chkAll").is(":checked")) $("input[name=chk]").prop("checked", true);
		else $("input[name=chk]").prop("checked", false);
	});

	$("input[name=chk]").click(function() {
		var total = $("input[name=chk]").length;
		var checked = $("input[name=chk]:checked").length;

		if(total != checked) $("#cbx_chkAll").prop("checked", false);
		else $("#cbx_chkAll").prop("checked", true);
	});
}

function faq() { //faq
	$('.faq_wrap .item .que').on('click', function(e){
		e.preventDefault()

		if(!($(this).parent().hasClass('active'))){
			$('.faq_wrap .item').removeClass('active')
			$('.faq_wrap .item .ans').slideUp();
			$(this).parent().addClass('active')
			$(this).siblings().slideDown();
		}else{
			$('.faq_wrap .item').removeClass('active')
			$('.faq_wrap .item .ans').slideUp();
		}
	})
}

function dimShow(){ /* 딤드 show */
	$('body').addClass('dim');
}
function dimHide(){ /* 딤드 hide */
	$('body').removeClass('dim');
}

function popup(){ //알럿팝업
	$('.btn_pop').on('click', function(e){ /* 팝업열기 */
		e.preventDefault();
		var target = $(this).attr('open-pop') || e;
		$('.popup' + '.' + target).fadeIn(200);
		dimShow();
	});

	$('.js-pop_close').on('click', function(e){ /* 팝업닫기 */
		e.preventDefault();
		var target= $(this).closest('.popup');
		target.fadeOut(200);
		setTimeout(dimHide, 150);
	});

	$(document).mouseup(function (e){ /* 닫기 */
		var popArea = $('.popup');
		if(popArea.has(e.target).length === 0 && $('body').hasClass('dim')){
			popArea.fadeOut(200);
			setTimeout(dimHide, 150);
		}
	});
}
