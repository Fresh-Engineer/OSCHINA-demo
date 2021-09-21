$(document).ready(function (){
    $("#t1").hover(function (){
        $("#t1").css("background-color","rgb(126,211,33)");
        $("#t2").css("background-color","darkgray");
        $("#t3").css("background-color","darkgray");
        $("#p1").css("display","block");
        $("#p2").css("display","none");
        $("#p3").css("display","none");
    });
    $("#t2").hover(function (){
        $("#t2").css("background-color","rgb(126,211,33)");
        $("#t1").css("background-color","darkgray");
        $("#t3").css("background-color","darkgray");
        $("#p2").css("display","block");
        $("#p1").css("display","none");
        $("#p3").css("display","none");
    });
    $("#t3").hover(function (){
        $("#t3").css("background-color","rgb(126,211,33)");
        $("#t2").css("background-color","darkgray");
        $("#t1").css("background-color","darkgray");
        $("#p3").css("display","block");
        $("#p2").css("display","none");
        $("#p1").css("display","none");
    });
    $("#t4").hover(function (){
        $("#t4").css("background-color","rgb(126,211,33)");
        $("#t5").css("background-color","darkgray");
        $("#t6").css("background-color","darkgray");
        $("#p4").css("display","block");
        $("#p5").css("display","none");
        $("#p6").css("display","none");
    });
    $("#t5").hover(function (){
        $("#t5").css("background-color","rgb(126,211,33)");
        $("#t4").css("background-color","darkgray");
        $("#t6").css("background-color","darkgray");
        $("#p5").css("display","block");
        $("#p4").css("display","none");
        $("#p6").css("display","none");
    });
    $("#t6").hover(function (){
        $("#t6").css("background-color","rgb(126,211,33)");
        $("#t5").css("background-color","darkgray");
        $("#t4").css("background-color","darkgray");
        $("#p6").css("display","block");
        $("#p5").css("display","none");
        $("#p4").css("display","none");
    });
})
