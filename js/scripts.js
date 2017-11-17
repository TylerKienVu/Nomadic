$(function() {
    $('.lazy').lazy();

    /*HomePage*/
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
	/*HomePage*/

	/*Team*/
	setTimeout(function() {
		$('#evan').removeClass('hidden');
	}, 500);
	setTimeout(function() {
		$('#bryson').removeClass('hidden');
	}, 800);
	setTimeout(function() {
		$('#rhian').removeClass('hidden');
	}, 1100);
	setTimeout(function() {
		$('#katelyn').removeClass('hidden');
	}, 1400);	
	setTimeout(function() {
		$('#tyler').removeClass('hidden');
	}, 1700);
	setTimeout(function() {
		$('#cody').removeClass('hidden');
	}, 2000);	
	/*Team*/

	/*Contact*/
	setTimeout(function() {
		$('#ideas').removeClass('hidden');
	}, 2500);
	setTimeout(function() {
		$('#hear').removeClass('hidden');
	}, 4000);
	setTimeout(function() {
		$('#know').removeClass('hidden');
	}, 5600);
	setTimeout(function() {
		$('#email-button').removeClass('hidden');
	}, 6500);
	setTimeout(function() {
		$('#smile').removeClass('hidden');
	}, 7000);
	/*Contact*/
});