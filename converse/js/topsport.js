$(function(){
	//缓冲菜单
    window.onscroll = function(){
        var oDiv = document.getElementById("chat");
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        bufferMove(parseInt(150 + scrollTop));
        if($(window).scrollTop() >= 130){
            if($(".nav").height() >= 90){
                topstart();
            }
        }else{
            $(".nav_top").css("height","80px").css("line-height","70px");
            $(".tab_head a").css('font-size', "18px");
            $(".tab_head a i").css('left', "50%").css('right', 'auto');;
            $(".tab_head").css("height","50px");
            $(".nav_top span").css("line-height", "70px");
        }
    }
    var timer = null;
    function bufferMove(iTarget){
        var oDiv = document.getElementById("chat");
        clearInterval(timer);
        timer = setInterval(function(){
            var speed = (iTarget - oDiv.offsetTop) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(oDiv.offsetTop == iTarget){
                clearInterval(timer);
            }else{
                oDiv.style.top = oDiv.offsetTop + speed + "px";
            }
        }, 30);
    }    
    //top运动
    function topstart(){
        if($(".nav").height()>140){
            $(".nav_top").css("height","50px").css("line-height","30px");
            $(".tab_head a i").css('right', "-6px").css("left", "auto");
            $(".tab_head a").css('font-size', "14px");
            $(".tab_head").css("height","30px");
            $(".nav_top span").css("line-height", "50px");
        }else{
             $(".nav").slideUp('fast',function(){
                $(".nav_top").css("height","50px").css("line-height","30px");
                $(".tab_head a i").css('right', "-6px").css("left", "auto");
                $(".tab_head a").css('font-size', "14px");
                $(".tab_head").css("height","30px");
                $(".nav_top span").css("line-height", "50px");
                $(".nav").slideDown('fast');
            });
        }
    }
    alert();
    for(var i = 0; i < 3; i++){
    	
        $('.tab_head li').eq(i).hover(function() {
            if($(this).index()<3){
                if($(".nav").height()>140){
                    $(".bgall").css('display', 'none').css('z-index','1000');
                    $(".nana").css('display', 'none').css('height', '0').css('opacity', '0');  
                }else{
                    $(this).find("a").css('text-decoration', 'underline');
                    $(".bgall").css('display', 'block').css('z-index','99');
                    $("#nana"+($(this).index()+1)).slideDown(
                        200, function() {
                        $(this).css('display', 'block').css('height', 'auto');
                    }).animate({opacity:1}, 200);
                    $("#nana"+($(this).index()+1)).hover(function() {
                        $(".bgall").css('display', 'block').css('z-index','99');
                        $(this).css('display', 'block').css('height', 'auto').css('opacity', '1');
                    }, function() {
                        $(".bgall").css('display', 'none').css('z-index','1000');
                        $(this).css('display', 'none').css('height', '0').css('opacity', '0');  
                    });
                }
                $("nav_top").mouseover(function(event) {
                    $(".bgall").css('display', 'none').css('z-index','1000');
                    $(".nana").css('display', 'none').css('height', '0').css('opacity', '0');  
                });

            }
                if($("#nana"+($(this).index()+1))!=0){
                    $(".bgall").css('display', 'block').css('z-index','99');
                }
        }, function() {
            if($("#nana"+($(this).index()+1)).height()!=0){
                $(this).find("a").css('text-decoration', 'none');
                $(".bgall").css('display', 'none').css('z-index','1000');
                $("#nana"+($(this).index()+1)).animate({

                    },
                    600, function() {
                    $(this).css('display', 'none').css('opacity', '0').css('height', '0');;
                });
            }else{
                $(".bgall").css('display', 'block').css('z-index','99');
            }
        });
    }
    $(".nana ul li a").hover(function() {
        $(this).find('span').css('text-decoration',' underline');
    }, function() {
        $(this).find('span').css('text-decoration',' none');
    });
    var n = 0;
    $(".search").click(function(event) {
            if(n==0){
                $(".lgn").animate({opacity:0}, 400).css('display', 'none');
                $(".rgn").animate({opacity:0}, 400).css('display', 'none');
                $(".loding").animate({height:0,}, 400).css('display', 'block');
                $(".sch").animate({height:40, opacity:1}, 400).css('display', 'block');
                $(".bgall").css('display', 'block').css('z-index','99');
                n++;
            }else if($(".nav").height()>400){
                $(".lgn").animate({opacity:0}, 400).css('display', 'none');
                $(".rgn").animate({opacity:0}, 400).css('display', 'none');
                $(".sch").animate({height:40,opacity:1}, 400).css('display', 'block');
                $(".loding").animate({height:0,}, 400).css('display', 'block');
                $(".bgall").css('display', 'block').css('z-index','99');
                n++;
            }else{
                $(".loding").animate({height:0,}, 400).css('display', 'none');
                $(".sch").animate({height:0,opacity:0}, 400).css('display', 'none');
                $(".bgall").css('display', 'none').css('z-index','1000');
                n=0;                    
            }
    });
    $(".login").click(function(event) {
            if(n==0){
                $(".rgn").animate({opacity:0}, 400).css('display', 'none');
                $(".sch").animate({height:0}, 400).css('display', 'none');
                $(".lgn").animate({opacity:1}, 400).css('display', 'block');
                $(".loding").animate({height:397}, 400).css('display', 'block');
                $(".bgall").css('display', 'block').css('z-index','99');
                n++;
            }else if(($(".nav").height()>140)&&($(".nav").height()<200)){
                $(".sch").animate({height:0}, 400).css('display', 'none');
                $(".lgn").animate({opacity:1}, 400).css('display', 'block');
                $(".loding").animate({height:397}, 400).css('display', 'block');
                $(".bgall").css('display', 'block').css('z-index','99');
                n++;
            }else{
                $(".sch").animate({height:0}, 400).css('display', 'none');
                $(".loding").animate({height:0,}, 400).css('display', 'none');
                $(".bgall").css('display', 'none').css('z-index','1000');
                n=0;                    
            }
    });
    $(".log").click(function(event) {
        if (true) {
            $(".sch").animate({height:0}, 400).css('display', 'none');
            $(".rgn").animate({opacity:0}, 400).css('display', 'none');
            $(".lgn").animate({opacity:1}, 400).css('display', 'block');
            $(".loding").animate({height:397}, 400).css('display', 'block');
            $(".bgall").css('display', 'block').css('z-index','99');
            n++;
        }else if(($(".nav").height()>=200)&&($(".nav").height()<400)){
            $(".lgn").animate({opacity:1}, 400).css('display', 'block');
            $(".rgn").animate({opacity:0}, 400).css('display', 'none');
        };
            
    });
    $(".reg").click(function(event) {
        if (true) {
            $(".sch").animate({height:0}, 400).css('display', 'none');
            $(".lgn").animate({opacity:0}, 400).css('display', 'none');
            $(".rgn").animate({opacity:1}, 400).css('display', 'block');
            $(".loding").animate({height:397}, 400).css('display', 'block');
            $(".bgall").css('display', 'block').css('z-index','99');
            n++;
        }else if(($(".nav").height()>=200)&&($(".nav").height()<400)){
            $(".lgn").animate({opacity:0}, 400).css('display', 'none');
            $(".rgn").animate({opacity:1}, 400).css('display', 'block');
        };
    });
    $(".bgall").click(function(event) {
        $(".sch").animate({height:0, opacity:0}, 400).css('display', 'none');
        $(".loding").animate({height:0,}, 400).css('display', 'none');
        $(".bgall").css('display', 'none').css('z-index','1000');
        n=0;  
    });


})