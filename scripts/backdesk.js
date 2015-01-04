$(function () {
	$('#menu-btn').on('click', function () {
		var items = $('.menu-items');

		items.height((items.height() === 0) ? 'auto' : 0);
	});

	$('a[href^="mailto:"]').on('click', function () {
		var href = $(this).attr('href').substring(7);

		if(ga) {
			ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Email', eventLabel: 'Contact Link', eventValue : href});
		}
	});
});