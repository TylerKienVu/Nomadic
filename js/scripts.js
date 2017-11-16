$(function() {
    $('.lazy').lazy();

    setTimeout(function() {
		$('#landing-img').addClass('dim');
	}, 1000);
	setTimeout(function() {
		$('#intro-text').removeClass('hidden');
	}, 3000);
	setTimeout(function() {
		$('#socal').removeClass('hidden');
	}, 4000);
});