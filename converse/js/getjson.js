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
			title += '<li><a href="html/allshop.html">' + res[i].title + '<i></i></a></li>';
		}
		$('.tab_head ul').html(title);
		for (var j = 0; j < res[0].floor_o.length; j++) {
			MAchild += '<li id="' + res[0].floor_o[j].id + '"><a href="html/allshop.html"><img src="' + res[0].floor_o[j].img + '"/><span>' + res[0].floor_o[j].font + '</span></a></li>'
		};
		$('#nana1 .nanaTop ul').html(MAchild);
		for (var k = 0; k < res[0].floor_t.length; k++) {
			MBchild += '<li id="' + res[0].floor_t[k].id + '"><a href="html/allshop.html"><img src="' + res[0].floor_t[k].img + '"/><span>' + res[0].floor_t[k].font + '</span></a></li>'
		};
		$('#nana1 .nanaBtm ul').html(MBchild);
		for (var j = 0; j < res[1].floor_o.length; j++) {
			WAchild += '<li id="' + res[1].floor_o[j].id + '"><a href="html/allshop.html"><img src="' + res[1].floor_o[j].img + '"/><span>' + res[1].floor_o[j].font + '</span></a></li>'
		};
		$('#nana2 .nanaTop ul').html(WAchild);
		for (var k = 0; k < res[1].floor_t.length; k++) {
			WBchild += '<li id="' + res[1].floor_t[k].id + '"><a href="html/allshop.html"><img src="' + res[1].floor_t[k].img + '"/><span>' + res[1].floor_t[k].font + '</span></a></li>'
		};
		$('#nana2 .nanaBtm ul').html(WBchild);
		for (var j = 0; j < res[2].floor_o.length; j++) {
			CAchild += '<li id="' + res[2].floor_o[j].id + '"><a href="html/allshop.html"><img src="' + res[2].floor_o[j].img + '"/><span>' + res[2].floor_o[j].font + '</span></a></li>'
		};
		$('#nana3 .nanaTop ul').html(CAchild);
		for (var k = 0; k < res[2].floor_t.length; k++) {
			CBchild += '<li id="' + res[2].floor_t[k].id + '"><a href="html/allshop.html"><img src="' + res[2].floor_t[k].img + '"/><span>' + res[2].floor_t[k].font + '</span></a></li>'
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
			img += '<li><a href="html/allshop.html"><img src="' + res[i].img + '"/></a></li>';
			btn += '<li>' + res[i].font + '</li>';
			if(i == 0){
				img = '<li class = "bactive"><a href="html/allshop.html"><img src="' + res[i].img + '"/></a></li>';
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
				top += '<div class = "main-head"><a href="html/allshop.html"><p style="text-decoration:underline;">' + res[i].title + '</p><img src="'+ res[i].pic + '"/></a></div>';
			}else if(i==(res.length-1)){
				top += '<div class = "main-head"><a href="html/allshop.html"><p>' + res[i].title + '</p><img src="'+ res[i].pic + '"/></a></div>';
			}else{
				top += '<div class = "main-head padlf"><a href="html/allshop.html"><p>' + res[i].title + '</p><img src="'+ res[i].pic + '"/></a></div>';
			}
			for (var j = 0; j < res[i].floorA.length; j++) {
				fa += '<dl><dt><a href="html/allshop.html"><img src="' + res[i].floorA[j].img + '"/></a></dt><dd><a href="">'+ res[i].floorA[j].font + '</a></dd><dd>' + res[i].floorA[j].price + '</dd><dd>'+ res[i].floorA[j].news +'</dd></dl>';
			};
			$('.mt_'+i+' .hot1').html(fa);
			for (var k = 0; k < res[i].floorB.length; k++) {
				fb += '<dl><dt><a href="html/allshop.html"><img src="' + res[i].floorB[k].img + '"/></a></dt><dd><a href="">'+ res[i].floorB[k].font + '</a></dd><dd>' + res[i].floorB[k].price + '</dd><dd>'+ res[i].floorB[k].news +'</dd></dl>';
			};
			$('.mt_'+i+' .hot2').html(fb);
			fa="";
			fb='';
			if(i==0){
				btn = '<a href="html/allshop.html" class="btn_'+i+' bton"><p>' + res[i].btn + '</p></a>';
			}else{
				btn += '<a href="html/allshop.html" class="btn_'+i+'"><p>' + res[i].btn + '</p></a>';
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
			fa += '<dl><dt><a href="html/allshop.html"><img src="' + res[0][j].img + '"/></a></dt><dd><a href="">'+ res[0][j].font + '</a></dd><dd>' + res[0][j].price + '</dd><dd>'+ res[0][j].news +'</dd></dl>';
		};
		
		for (var k = 0; k < res[1].length; k++) {
			fb += '<dl><dt><a href="html/allshop.html"><img src="' + res[1][k].img + '"/></a></dt><dd><a href="">'+ res[1][k].font + '</a></dd><dd>' + res[1][k].price + '</dd><dd>'+ res[1][k].news +'</dd></dl>';
		};
		
		for (var l = 0; l < res[2].length; l++) {
			fc += '<dl><dt><a href="html/allshop.html"><img src="' + res[2][l].img + '"/></a></dt><dd><a href="">'+ res[2][l].font + '</a></dd><dd>' + res[2][l].price + '</dd><dd>'+ res[2][l].news +'</dd></dl>';
		};
		
		
		$('.news1').html(fa);
		$('.news2').html(fb);
		$('.news3').html(fc);
	}
});
	


	
	
	


