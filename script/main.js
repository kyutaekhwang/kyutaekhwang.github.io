$(document).ready(function(){

	$("nav").onePageNav();

	var menu = $("nav ul");

	// when I click
	$("#menu-icon").click(function() {
		//toggle the menu
		menu.slideToggle();
	});


	// when I resize the window
	$(window).resize(function () {
		var width = $(window).width();
		// if window width is > 768 and the menu is hidden
		if(width > 784 && menu.is(":hidden")) {
			menu.removeAttr("style");
		}

	});

	// add paralax (stellar.js)
	$.stellar();

    //  $('footer').scrollToFixed( {
    //     bottom: 0,
    //     limit: $('footer').offset().top,
    //     preFixed: function() { $(this).find('.footer-distributed'); },
    //     postFixed: function() { $(this).find('.footer-distributed'); }
    // });


	// $('footer').hide();
	// 	if($(document).height() < $(window).height()){
	// 		$('footer').show();
	// 	}
	// $(window).resize(function(){
	// 	console.log("resized");
	// 	if($(document).height() > $(window).height()){
	// 		console.log("hide footer now");
	// 		$('footer').slideUp('slow');
	// 	}
	// 	else{
	// 		$('footer').slideDown('slow');
	// 	}
	// });

	// $(window).scroll(function(){        
 //    	if ($(window).scrollTop() + $(window).height() >= $(document).height() - 0){
 //            $('footer').slideDown('fast');
 //            $('#white2').stop().animate({
 //                bottom:'6px'
 //            },400);
 //   		}
 //    	else{
 //            $('footer').slideUp('fast');
 //            $('#white2').stop().animate({
 //                bottom:'-44px'
 //        	},400);
 //   		}
	// });

	// $(document).ready(function() {
	// 	if ($(window).height() >= $(document).height() ){
	// 		$('footer').data('size','hide');
	// 	}
	// 	else{
	// 		$('footer').data('size','show');
	// 	}
	// });

});
