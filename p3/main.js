/* 
	ejercicio	: 3
	author 		: coke

	Pregunta 3

	Se pide modelar el siguiente problema:
	
	En una sala de clases hay alumnos, cada alumno tiene notas y un promedio final. Se pide:
	
	Crear la función constructora alumno que recibe el nombre de éste y un arreglo con las notas
	
	La función constructora debe revisar que el nombre sea un string y que el arreglo de notas sean integers
	
	Crear el método promedio que devuelva el promedio de notas de todos los alumnos.
	
	alumno1	=	Student.new("Oscar", [10, 9, 10])
	alumno1.promedio() //	9.6666667


*/
	
		function Alumnos(name, notes) {

			if (typeof name == 'string' ) {
				//validation of name ok
					if ( Array.isArray( notes )) {
						var error = false;

						for (var i = 0; i < notes.length; i++) {
							
							//es int?
							if ( notes[i] % 1 === 0) {
								error = 0;
							} else {
								error = 1;
								//console.log('la nota '+notes[i]+' no es del tipo int');
								return false;
							}
						}

						
						if ( error === 0) {
							//console.log('creando obj');
							this.name 		= name;
							this.notes		= notes;
							this.promedio 	= function() {

								var sum = 0;

								for (var i = 0; i < notes.length; i++) {
									sum = sum + notes[i];
								}

								var avg = sum / notes.length;
								console.log(avg);	
							};
						}

					} else {
						console.log('No se puede crear el objeto, ya que las notas no son partes de un array');
					}

			} else {
				console.log('No se puede crear el ojbecto, ya que el nombre no es un string');
	
			}
		}


	/* 	forma de uso 
		===========/
		
		var pedro = new Alumnos('pedro',[7,6,7]);
		pedro.promedio();

	*/