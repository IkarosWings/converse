$(function(){
	//top菜单
$.ajax({
	url:'json/index.json',
	type:'GET',
	success:function(res){
		var title = '';
		var MAchild = '';
		var MBchild = '';
		var WAchild = '';
		var WBchild = '';
		var CAchild = '';
		var CBchild = '';
		for(var i = 0 ; i < res.length; i ++){
			title += '<li><a href="">' + res[i].title + '<i></i></a></li>';
		}
		$('.tab_head ul').html(title);
		for (var j = 0; j < res[0].floor_o.length; j++) {
			MAchild += '<li id="' + res[0].floor_o[j].id + '"><a href=""><img src="' + res[0].floor_o[j].img + '"/><span>' + res[0].floor_o[j].font + '</span></a></li>'
		};
		$('#nana1 .nanaTop ul').html(MAchild);
		for (var k = 0; k < res[0].floor_t.length; k++) {
			MBchild += '<li id="' + res[0].floor_t[k].id + '"><a href=""><img src="' + res[0].floor_t[k].img + '"/><span>' + res[0].floor_t[k].font + '</span></a></li>'
		};
		$('#nana1 .nanaBtm ul').html(MBchild);
		for (var j = 0; j < res[1].floor_o.length; j++) {
			WAchild += '<li id="' + res[1].floor_o[j].id + '"><a href=""><img src="' + res[1].floor_o[j].img + '"/><span>' + res[1].floor_o[j].font + '</span></a></li>'
		};
		$('#nana2 .nanaTop ul').html(WAchild);
		for (var k = 0; k < res[1].floor_t.length; k++) {
			WBchild += '<li id="' + res[1].floor_t[k].id + '"><a href=""><img src="' + res[1].floor_t[k].img + '"/><span>' + res[1].floor_t[k].font + '</span></a></li>'
		};
		$('#nana2 .nanaBtm ul').html(WBchild);
		for (var j = 0; j < res[2].floor_o.length; j++) {
			CAchild += '<li id="' + res[2].floor_o[j].id + '"><a href=""><img src="' + res[2].floor_o[j].img + '"/><span>' + res[2].floor_o[j].font + '</span></a></li>'
		};
		$('#nana3 .nanaTop ul').html(CAchild);
		for (var k = 0; k < res[2].floor_t.length; k++) {
			CBchild += '<li id="' + res[2].floor_t[k].id + '"><a href=""><img src="' + res[2].floor_t[k].img + '"/><span>' + res[2].floor_t[k].font + '</span></a></li>'
		};
		$('#nana3 .nanaBtm ul').html(CBchild);
	}
});

//banner
$.ajax({
	url:'json/ban.json',
	type:'GET',
	success:function(res){
		var img = '';
		var btn = '';
		for (var i = 0; i < res.length; i++) {
			img += '<li><a href=""><img src="' + res[i].img + '"/></a></li>';
			btn += '<li>' + res[i].font + '</li>';
			if(i == 0){
				img = '<li class = "bactive"><a href=""><img src="' + res[i].img + '"/></a></li>';
				btn = '<li class = "select">' + res[i].font + '</li>';
			}
		};
		//img += '<li><a href=""><img src="' + res[0].img + '"/></a></li>';
		$('.bmg ul').html(img);
		$('.banbtn').html(btn);
	}
});

//热卖单品
$.ajax({
	url: 'json/best.json',
	type: 'GET',
	success:function(res){
		var top = '';
		var fa = '';
		var fb = '';
		var btn = '';
		for (var i = 0; i < res.length; i++) {
			if(i==0){
				top += '<div class = "main-head"><a href=""><p style="text-decoration:underline;">' + res[i].title + '</p><img src="'+ res[i].pic + '"/></a></div>';
			}else if(i==(res.length-1)){
				top += '<div class = "main-head"><a href=""><p>' + res[i].title + '</p><img src="'+ res[i].pic + '"/></a></div>';
			}else{
				top += '<div class = "main-head padlf"><a href=""><p>' + res[i].title + '</p><img src="'+ res[i].pic + '"/></a></div>';
			}
			for (var j = 0; j < res[i].floorA.length; j++) {
				fa += '<dl><dt><a href=""><img src="' + res[i].floorA[j].img + '"/></a></dt><dd><a href="">'+ res[i].floorA[j].font + '</a></dd><dd>' + res[i].floorA[j].price + '</dd><dd>'+ res[i].floorA[j].news +'</dd></dl>';
			};
			$('.mt_'+i+' .hot1').html(fa);
			for (var k = 0; k < res[i].floorB.length; k++) {
				fb += '<dl><dt><a href=""><img src="' + res[i].floorB[k].img + '"/></a></dt><dd><a href="">'+ res[i].floorB[k].font + '</a></dd><dd>' + res[i].floorB[k].price + '</dd><dd>'+ res[i].floorB[k].news +'</dd></dl>';
			};
			$('.mt_'+i+' .hot2').html(fb);
			fa="";
			fb='';
			if(i==0){
				btn = '<a href="" class="btn_'+i+' bton"><p>' + res[i].btn + '</p></a>';
			}else{
				btn += '<a href="" class="btn_'+i+'"><p>' + res[i].btn + '</p></a>';
			}
		};
		$('.main-top').html(top);
		$('.btn-bom').html(btn);
	}
});

//新品推荐
$.ajax({
	url: 'json/news.json',
	type: 'GET',
	success:function(res){
		var fa = '';
		var fb = '';
		var fc = '';

		for (var j = 0; j < res[0].length; j++) {
			fa += '<dl><dt><a href=""><img src="' + res[0][j].img + '"/></a></dt><dd><a href="">'+ res[0][j].font + '</a></dd><dd>' + res[0][j].price + '</dd><dd>'+ res[0][j].news +'</dd></dl>';
		};
		
		for (var k = 0; k < res[1].length; k++) {
			fb += '<dl><dt><a href=""><img src="' + res[1][k].img + '"/></a></dt><dd><a href="">'+ res[1][k].font + '</a></dd><dd>' + res[1][k].price + '</dd><dd>'+ res[1][k].news +'</dd></dl>';
		};
		
		for (var l = 0; l < res[2].length; l++) {
			fc += '<dl><dt><a href=""><img src="' + res[2][l].img + '"/></a></dt><dd><a href="">'+ res[2][l].font + '</a></dd><dd>' + res[2][l].price + '</dd><dd>'+ res[2][l].news +'</dd></dl>';
		};
		
		
		$('.news1').html(fa);
		$('.news2').html(fb);
		$('.news3').html(fb);
	}
});
	

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


	//banner图	
	var num=0;
	$('.banner .menu ul li').eq(num).addClass('select');
	$('.banner .bmg ul li').eq(num).addClass("bactive");
	$('.banner .bmg ul li').eq(num).css({'opacity':1,'alpha':'alpha(opacity:100)'});
	//轮播事件
	function lunbo(){
		$('.banner .menu ul li').eq(num).addClass('select').siblings().removeClass('select');
		$('.banner .bmg ul li').eq(num).addClass("bactive").siblings().removeClass('bactive');
		$('.banner .bmg ul li').eq(num).stop().animate({'opacity':1,'alpha':'alpha(opacity:100)'},1000).siblings().stop().animate({'opacity':0,'alpha':'alpha(opacity:0)'},1000);
	}
	var timer=setInterval(function(){
		num++;
		if(num==8){
			num=0;
		}
		lunbo();
	},4000);
	//划上停止事件	
	$('.bmg').hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(function(){
			num++;
			if(num==8){
				num=0;
			}
			lunbo();
		},4000);
	})
	//点击切换事件
	function getOver(){
		$('.banbtn li').hover(function() {
			clearInterval(timer);
			num=$(this).index();
			lunbo();
		}, function() {
			clearInterval(timer);
			num=$(this).index();
			lunbo();
		});
		$(".bLeft").click(function(event) {
			clearInterval(timer);
			if(num == 0){
				num = 8;
			}else{
				num--;
			}
			lunbo();
		});
		$(".bRight").click(function(event) {
			clearInterval(timer);
			if(num == 8){
				num = 0;
			}else{
				num++;
			}
			lunbo();
		});
	}
	getOver();
	$(".igc").hover(function() {
		$(this).find(".ighov").css('display', 'block');
	}, function() {
		$(this).find(".ighov").css('display', 'none');
	});
	
	var s;
	for(var i = 0; i < 4; i++){
        $('.main-top div').eq(i).hover(function() {
        	s=$(this).index();
        	$('.main-top div').find('p').css('text-decoration', 'none');
           	$(this).find('p').css('text-decoration', 'underline').css('transition-duration', '0.3s');
       		$(".boult")
       		$(".mt_0").removeClass('mton').animate({opacity:0}, 200);
       		$(".mt_1").removeClass('mton').animate({opacity:0}, 200);
       		$(".mt_2").removeClass('mton').animate({opacity:0}, 200);
       		$(".mt_3").removeClass('mton').animate({opacity:0}, 200);
			$(".mt_"+s).addClass('mton').animate({opacity:1}, 200);
			$(".btn_0").removeClass('bton').animate({opacity:0}, 200);
       		$(".btn_1").removeClass('bton').animate({opacity:0}, 200);
       		$(".btn_2").removeClass('bton').animate({opacity:0}, 200);
       		$(".btn_3").removeClass('bton').animate({opacity:0}, 200);
			$(".btn_"+s).addClass('bton').animate({opacity:1}, 200);
        }, function() {
           	
        });
    }
})
