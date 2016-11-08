$(function  () {
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