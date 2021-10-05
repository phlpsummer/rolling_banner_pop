let num = 0
let timer;

timer = setInterval(rolling,40);

$(".list").on("mouseenter",function(){
    clearInterval(timer);
});
$(".list").on("mouseleave",function(){
    timer = setInterval(rolling,40);
});

function rolling(){
    //현재 위치값이 -120보다 작아지면(프레임 밖으로 벗어나면)
    if(num < -120){
        num = 0;  //0으로 초기화 후
        $(".list").children("li").eq(0).appendTo(".list");  //맨 앞요소를 맨뒤로 보냄
    }

    num-=2;
    $(".list").css({left:num});
}