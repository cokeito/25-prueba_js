/* 
	ejercicio	: 4
	author 		: coke

*/

$(document).ready(function() {
	console.log('init');

	$('body').on('input','#userInput', function() {
		$('#userOutput').html( $(this).val() );
	});


	$('body').on('change','#fontSize', function() {
		console.log($(this).val());
		$('#userOutput').css({ "font-size": parseInt($(this).val()) });
	});

	$('body').on('change','#fontColor', function() {
		console.log($(this).val());
		$('#userOutput').css({ "color": $(this).val() });
	});


});
	
		