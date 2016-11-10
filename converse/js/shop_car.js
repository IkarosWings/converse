$(function(){

	/*var shop_cars = "";
	$.ajax({
		url: '../json/shops.json',
		type: 'GET',
		success:function(res){
			for(var i = 0; i < res.length; i++){
				if(i == 0){
					shop_cars += '<div class="shopcart-title">您的购物车：'+ 0 +'件商品</div>' 
				}
				shop_cars += '<ul class="shopcart-list clearfix"><li class="shopcart-info-change"><div id="shopping_cart_remove_sku" class="removeBtn">移除</div><div class="editBtn" sizeref="40">编辑</div></li><li class="shopcart-list-image"><a href="" target="_blank" ><img src="../img/'+ res[i].model +'_1M_NEW.png"></a></li><li class="shopcart-list-info"><dl><dt><a href="">' + res[i].title  + '</a></dt><dd>型号：' + res[i].model + '</dd><dd>颜色：'+ res[i].color +'</dd><dd>尺码：'+ res[i].size +'</dd><br></dl></li><li class="shopcart-list-price"><div class="list-price">'+ res[i].price +'</div><div class="shopcart-list-pronum"><span>数量</span><div class="numbox"><input id="skuQty" value="1" name="skuQty" type="text"><div class="btnbox"><span class="add changeadd"></span><span class="reduce changereduce"></span></div></div></div></li></ul>'
				if(i == res.length-1){
					shop_cars += '<a class="buying-link" href="../index.html"><div class="buying-button">继续购物</div></a>'
				}
			}
			$(".shopcart-container-left").html(shop_cars);
			
		}
	});*/
	sp_msg()
	sp_car();
	$("#add-buycart-btn").click(function(){
		var id = $(this).find("span").attr("id");
		var first = $.cookie("goods")==null?true:false;
		var same = false;
		if(first){
			$.cookie("goods",'[{id:'+id+',num:1}]',{expires:7});
			$.cookie('first','false');
		}else{
			var str = $.cookie('goods');
			var arr = eval(str);
			for(var attr in arr){
				if(arr[attr].id == id){		
					arr[attr].num = arr[attr].num + 1;  //让json结构中num自增。
					var cookieStr = JSON.stringify(arr);//将json对象转换成字符串.
					$.cookie('goods',cookieStr,{expires:7});
					same = true;
				}
			}
			//如果id不同，重新建立商品对象;
			if(!same){
				var obj  = {id:id,num:1};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				$.cookie('goods',cookieStr);
			}
		}
		sp_car();
		alert("加入购物车成功");
		window.open("../html/shop_cart.html");
	})
	function sp_car(){
		var sp_str = $.cookie('goods');
		if(sp_str){//如果购物车cookie不为空。
			var sp_obj = eval(sp_str);
			var sp_num = 0 ; 
			for(var i in sp_obj){
				sp_num = Number(sp_obj[i].num) + sp_num;
			}
			//$('.sp_num').html(sp_num);
		}
	}
	function sp_msg(){
		$.ajax({
			url:'../json/shops.json',
			type:'GET',
			success:function(res){
				var sp_str = $.cookie('goods');
				if(sp_str){
					var sp_obj = eval(sp_str);
					var sp_num = 0 ;
					var html = ''; 
					var total = 0;
					var gross = 0;					
					var rebat = 0;
					
					for(var i in sp_obj){
						html += '<ul class="shopcart-list clearfix" id="' + res[sp_obj[i].id].NO + '"><li class="shopcart-info-change"><div id="shopping_cart_remove_sku" class="removeBtn">移除</div><div class="editBtn" sizeref="40">编辑</div></li><li class="shopcart-list-image"><a href="" target="_blank" ><img src="../img/'+ res[sp_obj[i].id].model +'_1M_NEW.png"></a></li><li class="shopcart-list-info"><dl><dt><a href="">' + res[sp_obj[i].id].title  + '</a></dt><dd>型号：' + res[sp_obj[i].id].model + '</dd><dd>颜色：'+ res[sp_obj[i].id].color +'</dd><dd>尺码：'+ res[sp_obj[i].id].size +'</dd><br></dl></li><li class="shopcart-list-price"><div class="list-price">¥'+ res[sp_obj[i].id].price*sp_obj[i].num +'</div><div class="shopcart-list-pronum"><span>数量</span><div class="numbox"><input id="skuQty" value="'+sp_obj[i].num+'" name="skuQty" type="text"><div class="btnbox"><span class="add changeadd"></span><span class="reduce changereduce"></span></div></div></div></li></ul>'
						total += res[sp_obj[i].id].price*sp_obj[i].num;
						gross += sp_obj[i].num;
						
					}
					
					$('.shopcart-container-left-main').html(html);
					$(".header-space2").html("订单总计：¥"+total);
					$(".header-space3").html(gross+"件商品");
					$(".shopcart-container-left .shopcart-title").html("您的购物车："+gross+"件商品");
					$(".summary-info").find("li").eq(0).find(".info").html("¥"+total);
					$(".summary-info").find("li").eq(1).find(".info").html("¥"+rebat);
					$(".summary-info").find("li").eq(2).find(".info").html("¥"+total);
					$(".removeBtn").click(function(){
						var _this = $(this)
						var sum = $(this).parent().parent().attr('id');
						var sp_str = $.cookie("goods");
						if(sp_str){
							var sp_arr = eval(sp_str);
							for(var i in sp_arr){
								if(sp_arr[i].id == sum){
									sp_arr.splice(i, 1);
									var cookieStr = JSON.stringify(sp_arr);
									$.cookie("goods", cookieStr, {expires: 7});
									_this.parent().parent().remove();
									sp_car();
									sp_msg();
								}
							}
						}
					})
					$(".add").click(function(){
						var _this = $(this);
						var id = $(this).parent().parent().parent().parent().parent().attr('id');
						var str = $.cookie('goods');
						var arr = eval(str);
						for(var attr in arr){
							if(arr[attr].id == id){		
								arr[attr].num = Number(arr[attr].num) + 1;  
								var cookieStr = JSON.stringify(arr);
								$.cookie('goods',cookieStr,{expires:7});
							}
						}
						sp_car();
						sp_msg();
						
					});
					$(".reduce").click(function(){
						if(sp_obj[i].num != 1){
							var _this = $(this);
							var id = $(this).parent().parent().parent().parent().parent().attr('id');
							
							var str = $.cookie('goods');
							var arr = eval(str);
							for(var attr in arr){
								if(arr[attr].id == id){		
									arr[attr].num = Number(arr[attr].num) - 1;  
									var cookieStr = JSON.stringify(arr);
									$.cookie('goods',cookieStr,{expires:7});
								}
							}
							sp_car();
							sp_msg();
						}
					});
					
				}
			}
		})
	}
})
