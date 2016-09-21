/* 
	ejercicio	: 1
	author 		: coke

	 ¿Cuál es el problema con el siguiente código?
		var	alumno1	=	{nombre:	"Matías",	edad:5}
		var	alumno2	=	alumno1
		alumno2.nombre	=	"Sebastián"


	R: Al asignar el valor de Sebastián al objecto alumno2, se cambiará también el nombre de alumno1, ya que alumno1 es una referencia de alumno2, por ende cualquier propiedad que se cambie afectará a ambos.
*/
