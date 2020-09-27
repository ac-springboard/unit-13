'use strict';

let stars = $('#rating').children('.star');

$('#rating').on('click', ".star", function (evt) {
	const idx = $(this).index();
	$(stars).removeClass('bright');
	$(stars).filter(function () {
		return $(this).index() <= idx;
	}).addClass('bright');
});
