/* 
	ejercicio	: 6
	author 		: coke

*/

$(document).ready(function() {

	$('#mainDiv').on('click', function() {

		var i 	= $('#mainDiv ul li:last-child').attr('rel');
		var j 	= parseInt(i) + 1;

		$('#mainDiv ul').append('<li rel="'+j+'">Elemento '+j+'</li>');


	}).children().click(function(e) { return false;});
	

});