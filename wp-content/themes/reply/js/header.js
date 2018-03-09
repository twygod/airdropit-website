$(window).scroll(function () {
	var header = $('.navbar-default');
	var content = $('.content');
    if($(window).scrollTop() > header.offset().top && !(header.hasClass('sticky'))){
		header.addClass('sticky');
		content.addClass('sticky');
    }
	else if($(window).scrollTop() == 0){
		header.removeClass('sticky');
		content.removeClass('sticky');
    }
});