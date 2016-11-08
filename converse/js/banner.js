$(function(){
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
		alert();
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
})
