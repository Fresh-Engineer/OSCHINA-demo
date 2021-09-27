// 绑定二维码，实现mouseon mouseout事件
let icon=$(".code-icon");
let code=$(".osc-code");
icon.mouseover(function (){
    code.css("display","block");
})
icon.mouseout(function (){
    code.css("display","none");
})

//绑定点击返回顶部按钮，实现返回顶部功能
let timer = null;
function returnTop(){
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        let oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = oTop -100;
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    });
}

//实现点击取消图片
let banner = $('.large-ad');
let  n = 1;
function button1(){
    n = 0;
    banner.css("-webkit-animation","mymove");
    banner.css("-webkit-animation-iteration-count","1");
    banner.css("-webkit-animation-duration","2s");
    banner.css("-webkit-animation-fill-mode","forwards");
    // if (n === 0){
    //     banner.css("animation-play-state","paused");
    //
    // }
}
