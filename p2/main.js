/* 
	ejercicio	: 2
	author 		: coke

	Pregunta 2
	Crear una función que devuelva una copia de un objeto, si el objeto contiene un arreglo éste también debe ser una copia.

*/
	
	var test = {'name':'coke', 'age':35, 'notes': [7,6,7] };

	function copyObject(obj) {

		var newObj = {};

		//recorro el objeto 
		for (var key in obj) {
			newObj[key] = obj[key];
		}
		
		return newObj;
	}

	/* 	forma de uso 
		===========/
		
		var copied = copyObject(test); 

	*/