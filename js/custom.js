



let num = 0
let timer;

timer = setInterval(rolling,20);

$(".list").on("mouseenter",function(){
    clearInterval(timer);
});
$(".list").on("mouseleave",function(){
    timer = setInterval(rolling,20);
});

//썸네일 클릭시 동적 레이어팝업 -생성-
$(".list li").on("click",function(e){
    e.preventDefault();

    $("body").append(
        $("<aside class='pop'>")
            .fadeIn(500)
            .append(
                $("<div class='con'>"),
                $("<span class='btnClose'>")
                    .text("close")
            )
    )
});

//닫기 버튼 클릭시 -제거-
//  - 이벤트 위임(Event Delegate) 필요(원래 있는 태그가 아니기 때문) -> 항상 있는 body에게 위임
$("body").on("click",".pop .btnClose", function(){
    $(".pop").fadeOut(500,function(){
        $(this).remove();
    });
});


//함수 정의
function rolling(){
    //현재 위치값이 -120보다 작아지면(프레임 밖으로 벗어나면)
    if(num < -240){
        num = 0;  //0으로 초기화 후
        $(".list").children("li").eq(0).appendTo(".list");  //맨 앞요소를 맨뒤로 보냄
    }

    num-=2;
    $(".list").css({left:num});
}