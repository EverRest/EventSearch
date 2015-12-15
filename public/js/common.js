$(document).ready(function() {

	//uLogin
	//$s = file_get_contents('http://ulogin.ru/token.php?token=' . $_POST['token'] . '&host=' . $_SERVER['HTTP_HOST']);
	//$user = json_decode($s, true);
	//$user['network'] - соц. сеть, через которую авторизовался пользователь
	//$user['identity'] - уникальная строка определяющая конкретного пользователя соц. сети
	//$user['first_name'] - имя пользователя
	//$user['last_name'] - фамилия пользователя
	//END


	//MAP

	//END
	
	//TAB-MENU
	jQuery('.tabs .tab-menu a').on('click', function(e)  {
		var nilaiAttr = jQuery(this).attr('href');
	 
	    jQuery('.tabs ' + nilaiAttr).show().siblings().hide();
	 
	    jQuery(this).parent('li').addClass('active').siblings().removeClass('active').delay(800);
	 
	    e.preventDefault();
	});
	//END


	//HAMBURGER
	$('.registration .reg_btn').click(function(){
		$('.registration .reg').slideToggle().delay(700);
	});

	$('nav .top_nav_btn').click(function(){
		$('nav .top_nav').slideToggle().delay(700);
	});	
	//END

	//LOAD MORE BUTTON
	//$('#more_btn').click(function(){
	//	$('#hidden_content').slideToggle().delay(700);
	//});		
	//END

	//DATEPIKER
	$(function() {
		$( "#datepicker" ).datepicker({
			showButtonPanel: false
		});
	});
	//END

	//BOTTOM BTN
	$('nav .bottom_menu_btn').click(function(){
		$('nav .bottom_menu').slideToggle().delay(700);
	});		
	//

	//FANCYBOX
	$(".fancybox").fancybox();
	//
});