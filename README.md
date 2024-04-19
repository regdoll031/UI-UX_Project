# 프론트 통합 웹 페이지 
## 개요
- HTML, CSS, JavaScript를 활용하여 UI/UX 프론트 웹 페이지 

#### 만든 목적
- 오프라인으로 진행되던 서류작업을 온라인화
- 서류작업 기능을 동적으로 구현하여 추후에도 관리 가능

#### 일정
- 23.07.24 ~ 20.08.25
- 참여도 : 100% (개인 프로젝트)

## 사용 기술 및 개발 환경
- Language : HTML5, CSS3, JavaScript, jQuery
- Tool : Visual Studio Code , GitHub, Git(SourceTree)

## 내용
### 구현 기능
### HTML, CSS
- nav, header, section, footer, modalBox 구현

- ### nav 일부
~~~
       <div id="navBox">   <!--상단 내비게이션 박스-->

        <div id="navInBox">    <!--내부 1200 박스-->


            <div id="logoBox">   <!--로고 박스-->
                <a href="index.html"><img src='images/logo2.png' id="logo" /> </a>
            </div>


            <nav id="navi">     <!--내비게이션 영역-->

                <button id="view">&equiv;</button>

                <ul id="menu">
                    <li class="main"><a href="#">COMPANY</a></li>
                    <li class="main"><a href="#">ABOUT US <i class="fa-solid fa-chevron-down more_icon"></i></a>
                        <ul class="sub">
                            <li class="subMenu"><a href="#">SubMenu1-1</a></li>
                            <li class="subMenu"><a href="#">SubMenu1-1</a></li>
                        </ul>
                    </li>
~~~

- ### header 일부
~~~
      <header id="header">

        <ul id="slideBox">
            <li class="slide"><img src="images/back_Image01.jpg" alt="slideImage" class="image"></li>
            <li class="slide"><img src="images/back_Image02.jpg" alt="slideImage" class="image"></li>
            <li class="slide"><img src="images/back_Image03.jpg" alt="slideImage" class="image"></li>
        </ul>

        <button class="slideButton slideLeft"><span class="material-symbols-outlined">arrow_circle_left</span></button>
        <button class="slideButton slideRight"><span class="material-symbols-outlined">arrow_circle_right</span></button>

        <ul id="pagination">
            <li class="page"></li>
            <li class="page"></li>
            <li class="page"></li>
        </ul>

        <ul id="titleBox">
            <li class="title">
                <h1>Wonderful Mind</h1>
                <p>새로운 시작이 필요한 순간, 휴식이 필요합니다</p>
            </li>
~~~

- ### section 일부
~~~
       <section id="sec1">

        <ul id="listBox1">
            <li class="list1">
                <img src="images/list1.jpg" alt="Brand Story">
                <div class="caption popup">
                    <span class="material-symbols-outlined">add_circle</span>
                </div>
            </li>
            <li class="list1">
                <img src="images/list2.jpg" alt="Business Introduce">
                <div class="caption popup">
                    <span class="material-symbols-outlined">add_circle</span>
                </div>
            </li>
            <li class="list1">
                <img src="images/list3.jpg" alt="Brand Video">
                <div class="caption popup">
                    <span class="material-symbols-outlined">add_circle</span>
                </div>
            </li>
            <li class="list1">
                <h3>Our News</h3>
                <p>새로운 소식을 알려드립니다.</p>
                <hr>
            </li>
            <li class="list1">
                <img src="images/list4.jpg" alt="Product Gallery">
                <div class="caption popup">
                    <span class="material-symbols-outlined">add_circle</span>
                </div>
            </li>  
~~~

- ### footer 부분
~~~
       <footer id="footer">
        <div id="footerBox">
            <p>회사정보(Information) 상호명 : 디자인OO <span class="line">|</span><br class="br"> 대표 : 디자인OO | 전화 : 070-1234-5678<br>
                사업자등록번호 : 000-샘플시안-00000 <span class="line">|</span><br class="br"> E-mail : email@naver.com</p>
        </div>
    </footer>
~~~

- ### modal 일부
~~~
       <div id="modal">

        <div id="modalBox">   <!--모달창 내부 박스-->

            <img src="images/list1_2.jpg" alt="Modal Image" id="modalImage">
            
            <video src="media/video01.mp4" muted playsinline loop id="video"></video>
            
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26097.87770957328!2d126.8107706308365!3d35.150766684843425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357189b31de0322b%3A0x981f75762c46ea2d!2z6re466aw7Lu07ZOo7YSw7JWE7Lm0642w66-4IOq0keyjvOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1690259450409!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
~~~

### 구현 기능 
### JavaScript, jQuery
- slide, popup, 반응형, modal 구현

- ### slide 일부
~~~
       
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

~~~

- ### modal 일부
~~~
       
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

~~~

- ### 반응형 일부
~~~
       
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

~~~


# 결과
## JavaScript, jQeury 사용
- Header slide에 번호를 부여해 슬라이드 마지막 번째에서 넘어갈 시 처음 슬라이드로 넘어오게 구현하였다.
- 8개의 section에 각각의 모달창을 구현하여 팝업창이 띄워지게 구현하였다.
- 1000px이상일 때 메뉴와 배경을 원래 상태로 되돌리고
- 768px, 450px일 때 웹 페이지가 조절될 수 있도록 반응형 웹으로 구현하였다.
