$(document).ready(function(){

	$('.button_search').click(function(){
		if($('.header_top').hasClass('small')){
			if($('.block_search').hasClass('open')){
				$('.block_search').removeClass('open');
				$('.block_header_login span').css('display', 'inline');
			}else{
				$('.block_search').addClass('open');
				$('.block_header_login span').css('display', 'none');
			}
		}
	});

	$('.menu_more').click(function(){
		$(this).toggleClass('active');
		$('.ul_more').slideToggle(600);
	});

	$('.menu .ul').click(function(){
		if($('.menu_more').css('display') == 'block'){
			$('.menu_more').removeClass('active');
			$('.ul_more').slideUp(600);
		}
	});

	$('.menu .menu_show').click(function(){
		$('.menu .ul').slideToggle(600);
	});

	$(document).click(function(e){
		if($('.menu_show').css('display') == 'block'){
			if ($(e.target).parents().filter('.menu:visible').length != 1){
				$('.menu .ul').slideUp(600);
			}
		}
		if($('.menu_more').css('display') == 'block'){
			if ($(e.target).parents().filter('.menu:visible').length != 1){
				$('.menu_more').removeClass('active');
				$('.ul_more').slideUp(600);
			}
		}
	});

	$('.ul_more .more a').click(function(){
		$(this).toggleClass('active');
		$(this).parent().find('.ul_more_sub').slideToggle(600);
	});

	$('.menu_left .more').click(function(){
		$(this).parent().toggleClass('active');
		$(this).parent().find('.menu_left_sub').slideToggle(600);
	});

	$('.tabs a').click(function(){
		$('.tabs').find('.cur').removeClass('cur');
		$(this).addClass('cur');
		$('.tab_content_1').css('display', 'none');
		$('.'+$(this).attr('id')+'_content').css('display', 'block');
	});

	tmp_footer = $('.footer').height()+3;
	tmp_footer_2 = $('.footer').height()+20;
	$('.footer').css('margin-top', '-'+tmp_footer+'px');
	$('.content').css('padding-bottom', tmp_footer_2);

});

$(window).resize(function(){
	if($(window).width() < 570){
		$('.header_top').addClass('small');
		$('.menu .ul').css('display', 'none');
	}
	if($(window).width() > 570){
		$('.header_top').removeClass('small');
		$('.block_search').removeClass('open');
		$('.block_header_login span').css('display', 'inline');
		$('.menu .ul').css('display', 'table');
	}
	if($('.ul_more').css('display') == 'block'){
		$('.menu_more').removeClass('active');
		$('.ul_more').css('display', 'none');
	}
	$('.footer').css('margin-top', '-'+tmp_footer+'px');
	$('.content').css('padding-bottom', tmp_footer_2);
});