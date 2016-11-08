//top菜单
$.ajax({
	url:'../json/index.json',
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
			MAchild += '<li id="' + res[0].floor_o[j].id + '"><a href=""><img src="../' + res[0].floor_o[j].img + '"/><span>' + res[0].floor_o[j].font + '</span></a></li>'
		};
		$('#nana1 .nanaTop ul').html(MAchild);
		for (var k = 0; k < res[0].floor_t.length; k++) {
			MBchild += '<li id="' + res[0].floor_t[k].id + '"><a href=""><img src="../' + res[0].floor_t[k].img + '"/><span>' + res[0].floor_t[k].font + '</span></a></li>'
		};
		$('#nana1 .nanaBtm ul').html(MBchild);
		for (var j = 0; j < res[1].floor_o.length; j++) {
			WAchild += '<li id="' + res[1].floor_o[j].id + '"><a href=""><img src="../' + res[1].floor_o[j].img + '"/><span>' + res[1].floor_o[j].font + '</span></a></li>'
		};
		$('#nana2 .nanaTop ul').html(WAchild);
		for (var k = 0; k < res[1].floor_t.length; k++) {
			WBchild += '<li id="' + res[1].floor_t[k].id + '"><a href=""><img src="../' + res[1].floor_t[k].img + '"/><span>' + res[1].floor_t[k].font + '</span></a></li>'
		};
		$('#nana2 .nanaBtm ul').html(WBchild);
		for (var j = 0; j < res[2].floor_o.length; j++) {
			CAchild += '<li id="' + res[2].floor_o[j].id + '"><a href=""><img src="../' + res[2].floor_o[j].img + '"/><span>' + res[2].floor_o[j].font + '</span></a></li>'
		};
		$('#nana3 .nanaTop ul').html(CAchild);
		for (var k = 0; k < res[2].floor_t.length; k++) {
			CBchild += '<li id="' + res[2].floor_t[k].id + '"><a href=""><img src="../' + res[2].floor_t[k].img + '"/><span>' + res[2].floor_t[k].font + '</span></a></li>'
		};
		$('#nana3 .nanaBtm ul').html(CBchild);
	}
});
