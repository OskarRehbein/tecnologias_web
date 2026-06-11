*Paradigmas de la programacion*

**Programacion Orientada a Eventos**

Las interacciones de usuario ocurren en una instancia especifica, donde sus acciones generan eventos.
Estos eventos pueden ser clocks, teclas presionadas, etc.

Ejemplo, al ingresar el rut para recuperar clave, te pide un formato especifico (Sin puntos y guion), pero para esto se puede generar un evento para que se formatee solo, dejando de lado la necesidad de necesitar un formato especifico.

**Desarrollo web**

JavaScript suele ser el lenguaje mas usado para esto.
* Es ligero
* Funciona en todas las plataformas
* Esta estandarizado
* Orientada a objetos
Desventajas
* Muy permisivo (No advierte de errores en la creacion del software, solo en ejecucion).
* TypeScript intenta solucionar esto.


**JavaScript**

* Html funciona de la misma manera pero agrega un </script> capaz de correr codigo en el html.
* El script tiene una funcion en particular.

**parsing**
* Empieza el parsing
* Primero encuentra el script, despues lo ejecuta
* Una vez ejecutado, se termina el parsing
* En el ejemplo (index.hmtl), la pagina no se renderizaba hasta que terminara de ejecutarse el alert.
* Esto se puede evitar haciendolo asincronico

Variables de JavaScript
* let, const, var
* let permiote varios tipos de variables (str, int, etc.).
* console.log: Muestas el valor de variables en la consola.
* En log se le puede especificar el tipo de dato usando 'typeof'
