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
	$('#more_btn').click(function(){
		$('.more').slideToggle(800).delay(400);
	});		
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
	//END

	//FANCYBOX
	$(".fancybox").fancybox();
	//END

	//CAROUSEL
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		autoHeight : true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});
	//END

});