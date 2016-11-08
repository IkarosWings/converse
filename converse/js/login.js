$(function(){
	$(".L-box").find("input").click(function(){
		$(this).siblings("span").css("display","none");
	})
	$(".L-box").find("input").blur(function(){
		if($(this).val()==""){
			$(this).siblings("span").css("display","block");
			$(this).css("border-color","red");
			$(this).siblings(".error").css("display","none");
		}
		
	})
	var phone_true = false;
	var email_true = false;
	var password_true = false;
	var password_again = false;
	//手机号
	var phv;
	$(".ph").blur(function(){
		phv = $(this).val();
		if( phv == ""){
			$(this).css("border-color","red");
			$(this).siblings("span").css("display","block");
			$(this).siblings(".error").css("display","none");
		}else if(/^[1-3]\d{10}$/.test(phv)){
			$(this).css("border-color","black");
			$(this).siblings("span").css("display","none");
			$(this).siblings(".error").css("display","none");
			phone_true = true;
		}else{
			$(this).siblings("span").css("display","none");
			$(this).siblings(".error").css("display","block");
			$(this).css("border-color","red");
		}
	})
	//邮箱
	var eml;
	$(".eml").blur(function(){
		emlv = $(this).val();
		if( emlv == ""){
			$(this).css("border-color","red");
			$(this).siblings("span").css("display","block");
			$(this).siblings(".error").css("display","none");
		}else if(/(@([a-zA-Z0-9]+)\.com)$/.test(emlv)){
			$(this).css("border-color","black");
			$(this).siblings("span").css("display","none");
			$(this).siblings(".error").css("display","none");
			email_true = true;
		}else{
			$(this).siblings("span").css("display","none");
			$(this).siblings(".error").css("display","block");
			$(this).css("border-color","red");
		}
	})
	//手机邮箱合集
	var emlphv;
	$(".emlph").blur(function(){
		emlphv = $(this).val();
		if( emlphv == ""){
			$(this).css("border-color","red");
			$(this).siblings("span").css("display","block");
			$(this).siblings(".error").css("display","none");
		}else if(/(@([a-zA-Z0-9]+)\.com)$/.test(emlphv)||/^[1-3]\d{10}$/.test(emlphv)){
			$(this).css("border-color","black");
			$(this).siblings("span").css("display","none");
			$(this).siblings(".error").css("display","none");
		}else{
			$(this).siblings("span").css("display","none");
			$(this).siblings(".error").css("display","block");
			$(this).css("border-color","red");
		}
	})
	
	//密码
	var pwv;
	$(".pw").blur(function(){
		pwv = $(this).val();
		if( pwv == ""){
			$(this).css("border-color","red");
			$(this).siblings("span").css("display","block");
			$(this).siblings(".error").css("display","none");
		}else if(pwv.length > 12 || pwv.length < 6){
			$(this).css("border-color","red");
			$(this).siblings("span").css("display","none");
			$(this).siblings(".error").css("display","block");
		}else{
			if(/\d/g.test(pwv)&&/[a-zA-Z]/g.test(pwv)||/[a-zA-Z]/g.test(pwv)&&/\s/.test(pwv)||/\d/g.test(pwv)&&/\s/.test(pwv)){
				$(this).css("border-color","black");
				$(this).siblings("span").css("display","none");
				$(this).siblings(".error").css("display","none");
				password_true = true;
			}else{
				$(this).css("border-color","red");
				$(this).siblings("span").css("display","none");
				$(this).siblings(".error").css("display","block");
			}
		}
	})
	//确认密码
	$(".pw2").blur(function(){
		if($(this).val() == ""){
			$(this).css("border-color","red");
			$(this).siblings("span").css("display","block");
			$(this).siblings(".error").css("display","none");
		}else if($(this).val() == pwv){
			$(this).css("border-color","black");
			$(this).siblings("span").css("display","none");
			$(this).siblings(".error").css("display","none");
			password_again = true;
		}else{
			$(this).css("border-color","red");
			$(this).siblings("span").css("display","none");
			$(this).siblings(".error").css("display","block");
		}
	})
	
	//注册cookie
	$("#register").click(function(){
		if(phone_true==true&&email_true==true&&password_true==true&&password_again==true){
			$.cookie("phone", phv,{expires:7});
			$.cookie("email", eml,{expires:7});
			$.cookie("password", pwv,{expires:7});
			alert("注册成功");
		}
	})
	//登录cookie
	$("#login").click(function(){
		var oldphone = $.cookie("phone");
		var oldemail = $.cookie("email");
		var oldpassword = $.cookie("password");
		if((emlphv==oldphone||emlphv==oldemail)&&pwv==oldpassword){
			alert("登录成功");
		}else{
			alert("账户密码错误");
		}
	})
	
})



