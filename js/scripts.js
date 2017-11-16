$(function() {
    $('.lazy').lazy();

    setTimeout(function() {
		$('#landing-img').addClass('dim');
	}, 1000);
	setTimeout(function() {
		$('#intro-text').removeClass('hidden');
	}, 3000);
	setTimeout(function() {
		$('#to').removeClass('hidden');
	}, 3500);
	setTimeout(function() {
		$('#socal').removeClass('hidden');
	}, 4500);
	setTimeout(function() {
		$('#intro-button').removeClass('hidden');
	}, 5500);
});