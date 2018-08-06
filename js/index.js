window.onload = function(){
    search();
    secondKill();
};
/*头部搜索*/
var search = function(){
    /*搜索框对象*/
    var search = document.getElementsByClassName('headerBox')[0];
    /*banner对象*/
    var banner = document.getElementsByClassName('banner')[0];
    /*高度*/
    var height = banner.offsetHeight;

    window.onscroll = function(){
        var top = document.documentElement.scrollTop;
        /* 页面指定了DTD，即指定了DOCTYPE时，使用document.documentElement。
            页面没有DTD，即没指定DOCTYPE时，使用document.body。*/
        /*当滚动高度大于banner的高度时候颜色不变*/
        if(top > height){
            search.style.background  = "rgba(201,21,35,0.85)";
        }else{
            var op = top/height * 0.85;
            search.style.background  = "rgba(201,21,35,"+op+")";
        }
    };
};
/*秒杀倒计时*/
var secondKill = function(){
    /*复盒子*/
    var parentTime = document.getElementsByClassName('sk_time')[0];
    /*span时间*/
    var timeList = parentTime.getElementsByClassName('num');

    console.log(timeList.length);

    var times = 7   * 60 * 60;
    var timer;
    timer = setInterval(function(){
        times  -- ;

        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = times%60;

        console.log(h+'-'+m+"-"+s);

        timeList[0].innerHTML = h>10?Math.floor(h/10):0;
        timeList[1].innerHTML = h%10;

        timeList[2].innerHTML = m>10?Math.floor(m/10):0;
        timeList[3].innerHTML = m%10;

        timeList[4].innerHTML = s>10?Math.floor(s/10):0;
        timeList[5].innerHTML = s%10;
        if(times <= 0){
            clearInterval(timer);
        }
    },1000);

};


$(document).ready(function () {

    //轮播图片
    var $li = $(".ul1>li");
    var count = 0;

    //默认自动轮播下一张图片
    function lunbo() {
        count++;
        if(count === $li.length){
            count = 0;
        }
        $li.eq(count).fadeIn(100).siblings().fadeOut(100);
    }
     setInterval(lunbo,1500);




    /*置顶图标实现置顶功能*/
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $(".goTop").fadeIn(500);
        }
        else
        {
            $(".goTop").fadeOut(500);
        }
    });
    $(".goTop").click(function(){
        $('html').animate({scrollTop:0},1000);
    });
});

