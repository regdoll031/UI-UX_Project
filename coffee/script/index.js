
let slideNo = 0;
let loop;

function slide(no) {
    slideNo += no;
    if(slideNo > 2) slideNo = 0;
    if(slideNo < 0) slideNo = 2;

    let x = (slideNo * -100) + '%';

    $('#slideBox').css('marginLeft', x);

    $('.title').hide();
    $('.title').eq(slideNo).delay(500).fadeIn();

    $('.page').css('opacity','.3');
    $('.page').eq(slideNo).css('opacity','1');
}

function playSlide(){
    clearInterval(loop);
    loop = setInterval('slide(1)',3000);
}

function stopSlide() {
    clearInterval(loop);
}


//섹션의 모달창 변경용 이미지, 타이틀
let list = [ 
    "images/list1_2.jpg", "images/list2_2.jpg", "유튜브영상", "", 
    "images/list4_2.jpg", "블로그", "지도","전화"  
];

let title = [
    "<b>Brand Strory.</b> 특별한 브랜드 스토리를 시작합니다.", 
    "<b>Business Introduce.</b> 사업분야를 안내해 드립니다.", 
    "<b>홍보동영상.</b> 저희 회사의 소개 영상입니다.",
    "",
    "<b>Product Gallery.</b> 우리 회사의 제품을 소개합니다.", 
    "Design Blog", 
    "<b>Contact.</b> 오시는 길을 안내합니다.", 
    "Call Number"
];


$(window).on('load', function(){ playSlide(); });

$(function(){

    //playSlide();

    $('#header').mouseenter( function(){ stopSlide() });
    $('#header').mouseleave( function(){ playSlide() });

    $('.slideLeft').click(function(){ slide(-1) });
    $('.slideRight').click(function(){ slide(1) });

    $('.page').click(function(){ 
        slideNo = $(this).index();
        slide(0);
    })

    $('.main').mouseenter(function(){
        $(this).children('.sub').stop().slideDown(300);
    });

    $('.main').mouseleave(function(){
        $(this).children('.sub').stop().slideUp(300);
    });

    $('#view,#back').click(function(){
        $('#menu,#back').fadeToggle();
    });


    //섹션의 캡션을 클릭할 때, 모달창 열기(이미지,타이틀 변경)
    $('.popup').click(function(){
        $('#modal').fadeIn();

        //클릭한 캡션의 순번
        let no = $(this).parent().index();

        //모달창 이미지 변경(배열에서 해당 순번째)
        $('#modalImage').show();
        $('#modalImage').attr('src', list[no]);
        $('#video, #map').hide();   //모달창 영상,지도 숨기기

        //모달창 타이틀 변경(배열에서 해당 순번째)
        $('#modalTitle').html(title[no]);

        //세 번째 리스트를 클릭하면, 팝업창에 영상 보이기
        if(no == 2) {
            $('#video').show();       //영상 보이기
            $('#video').get(0).play();    //영상 자동 재생
 
            $('#modalImage,#map').hide();    //모달창 이미지,지도 숨기기
        }

        //일곱 번째 리스트를 클릭하면, 팝업창에 지도 보이기
        if(no == 6) {
            $('#modalImage, #video').hide();     //이미지,영상 숨김
            $('#map').show();   //지도 보이기
        }

    });   //end $('.popup').click

    //블로그 리스트를 클릭할 때
    $('.blog').click(function(){
        window.open('http://uiux.kr');     //새 창(탭)을 열어 페이지 연결하기
    });

    //'전화상담' 리스트를 클릭할 때
    $('.call').click(function(){
        window.location.href = 'tel:07012345678';
    })


    //모달창 닫기 버튼 클릭할 때
    $('#modalClose').click(function(){
        $('#modal').fadeOut(200);    //모달창 숨기기
        $('#video').get(0).pause();    //영상 일시 정지
    });


});  // end $(function)




//화면이 1000px을 넘을 때 메뉴와 배경을 원래 상태로 되돌리기
$(window).resize(function(){

    if( $(window).width() > 1000) 
        $('#menu,#back').removeAttr('style');

});   // end $(window)


//화면 해상도에 따라 슬라이드 이미지 바꾸기(모바일 450px 기준)
function slideImage() {
    if( $(window).width() < 450) {
        $('.image').eq(0).attr('src', 'images/back_Image01m.jpg');
        $('.image').eq(1).attr('src', 'images/back_Image02m.jpg');
        $('.image').eq(2).attr('src', 'images/back_Image03m.jpg');
    }
    else {
        $('.image').eq(0).attr('src', 'images/back_Image01.jpg');
        $('.image').eq(1).attr('src', 'images/back_Image02.jpg');
        $('.image').eq(2).attr('src', 'images/back_Image03.jpg');
    }
}

//페이지가 열리거나, 창의 크기를 조절할 때 이미지 변경 스크립트(slideImage) 실행
$(document).ready(slideImage);
$(window).resize(slideImage);