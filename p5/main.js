/* 
	ejercicio	: 5
	author 		: coke

*/

$(document).ready(function() {
	console.log('init');

	var x = 0;

		$('body').keypress(function(e){

			if (e.keyCode == 37) {
				x = x - 50;

				$('.box').css('left',x);
			}

			if (e.keyCode == 39) {
				x = x + 50;
				console.log(x);

				$('.box').css('left',x);
			}

		});

});