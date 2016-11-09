$(function(){
	var shop_cars;
	$.ajax({
		url: '../json/shops.json',
		type: 'GET',
		success:function(res){
			for(var i = 0; i < res.length; i++){
				shop_cars += '<ul class="shopcart-list clearfix"><li class="shopcart-info-change"><div id="shopping_cart_remove_sku" class="removeBtn">移除</div><div class="editBtn" sizeref="40">编辑</div></li><li class="shopcart-list-image"><a href="" target="_blank" ><img src="../img/'+ res[i].model +'_1M_NEW.png"></a></li><li class="shopcart-list-info"><dl><dt><a href="">' + res[i].title  + '</a></dt><dd>型号：' + res[i].model + '</dd><dd>颜色：'+ res[i].color +'</dd><dd>尺码：'+ res[i].size +'</dd><br></dl></li><li class="shopcart-list-price"><div class="list-price">'+ res[i].price +'</div><div class="shopcart-list-pronum"><span>数量</span><div class="numbox"><input id="skuQty" value="1" name="skuQty" type="text"><div class="btnbox"><span class="add changeadd"></span><span class="reduce changereduce"></span></div></div></div></li></ul>'
				
				
			}
			
			$(".shopcart-container-left").html(shop_cars);
			
			
		}
	});

	
})


/*//记录
$(".shop_but").click(function(){
	window.open("details.html?id=" + $(this).attr('id')+ "");
});

//跳转
var id = location.search.substr(1).split("=")[1];
*/


/*'<ul class="shopcart-list clearfix"><li class="shopcart-info-change"><div id="shopping_cart_remove_sku" class="removeBtn">移除</div><div class="editBtn" sizeref="40">编辑</div></li><li class="shopcart-list-image"><a href="" target="_blank" ><img src="../img/'+ res[i].model +'_1M_NEW.png"></a></li><li class="shopcart-list-info"><dl><dt><a href="">' + res[i].title  + '</a></dt><dd>型号：' + res[i].model + '</dd><dd>颜色：'+ res[i].color +'</dd><dd>尺码：'+ res[i].size +'</dd><br></dl></li><li class="shopcart-list-price"><div class="list-price">'+ res[i].price +'</div><div class="shopcart-list-pronum"><span>数量</span><div class="numbox"><input id="skuQty" value="1" name="skuQty" type="text"><div class="btnbox"><span class="add changeadd"></span><span class="reduce changereduce"></span></div></div></div></li></ul>'*/