$(function () {
	$('#menu-btn').on('click', function () {
		var items = $('.menu-items');

		items.height((items.height() === 0) ? 'auto' : 0);
	});
});