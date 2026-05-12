# JuanAlbertoBernalLeiva_TrabajoFinalMarcas
## Trabajo final de Lenguaje de Marcas  
**Idea:**💡   
Crear una página web que muestre algunos de los trabajos que he ido realizando a lo largo del curso, aprovechando que ya tengo creada la página de mi portfolio.
Usar como recurso principal los trabajos y tareas con los campos: id, nombre, descripción, fecha, curso, trimestre, autor y asignatura.
Como recurso secundario, id, trabajo_id, nota y profesor.   

**Frontend:**📄  
En mi portfolio, en el apartado Proyectos, se muestran los recursos principales (trabajos) ordenados en forma de tarjetas. Tiene nombre, descripción y enlace.  
He añadido un buscador que filtra por el nombre (Tiene que ser exacto, respetando mayúsculas y tildes).  
Debajo de las tarjetas se encuentra un formulario para añadir trabajos, hay que ingresar todos los campos requeridos para poder crearlo.  
Cada tarjeta además tiene la función eliminar representada como un círculo con una 'x' en la parte superior derecha.    

**How to use**🔧    
-Abrir index.js  
-En index, abrir terminal y escribir 'nodemon index.js' para abrir el servidor, si da error instalar nodemon con 'npm install nodemon'  
-Abrir main.html, click derecho y Open with Live Server  

**Bruno**🐶  
El repositorio incluye un archivo comprimido con una colección de Bruno con todos los endpoints a vuestra disposición llamado ColeccionBrunoAmbosRecursos_trabajoFinalMarcasV2Final.zip  

**Construido con:**🛠️  
Visual Studio Code  

---

## Endpoints🔍
A continuación un breve resumen de todos los endpoints implantados en la API, incluyendo título, descripción de su función y un ejemplo de uso:  

---
### Trabajos

**GET /trabajos**  
Obtiene todos los trabajos.  
Ejemplo: GET `http://localhost:2077/trabajos`

**GET /trabajos/:id**  
Obtiene un trabajo por su id.  
Ejemplo: `GET http://localhost:2077/trabajos/1`

**GET /trabajo?nombre=**  
Obtiene un trabajo por su nombre exacto.  
Ejemplo: `GET http://localhost:2077/trabajo?nombre=Cafetería`

**POST /trabajos**  
Crea un nuevo trabajo. Requiere todos los campos en el body.  
Ejemplo: `POST http://localhost:2077/trabajos`

**PUT /trabajos/:id**  
Modifica un trabajo existente.  
Ejemplo: `PUT http://localhost:2077/trabajos/1`

**DELETE /trabajos/:id**  
Elimina un trabajo.  
Ejemplo: `DELETE http://localhost:2077/trabajos/1`

---

### Notas

**GET /notas**  
Obtiene todas las notas.  
Ejemplo: `GET http://localhost:2077/notas`

**GET /trabajos/:id/notas**  
Obtiene las notas de un trabajo concreto.  
Ejemplo: `GET http://localhost:2077/trabajos/1/notas`

**POST /notas**  
Crea una nueva nota. Requiere trabajo_id, nota y profesor en el body.  
Ejemplo: `POST http://localhost:2077/notas`

**DELETE /notas/:id**  
Elimina una nota.  
Ejemplo: `DELETE http://localhost:2077/notas/1`

---

### Filtros y búsquedas

**GET /trabajos?nombre=**  
Filtra trabajos por nombre (búsqueda parcial).  
Ejemplo: `GET http://localhost:2077/trabajos?nombre=Java`

**GET /trabajos?asignatura=&trimestre=**  
Filtra trabajos por asignatura y trimestre simultáneamente.  
Ejemplo: `GET http://localhost:2077/trabajos?asignatura=Programación&trimestre=Primer trimestre`

**GET /trabajos?asignatura=**  
Ordena los trabajos por asignatura (asc/desc).  
Ejemplo: `GET http://localhost:2077/trabajos?asignatura=desc`

**GET /notas?notaMin=**  
Filtra notas mayores a un valor.  
Ejemplo: `GET http://localhost:2077/notas?notaMin=7`

**GET /notas?notaMax=**  
Filtra notas menores a un valor.  
Ejemplo: `GET http://localhost:2077/notas?notaMax=9`

**GET /notas?notaMin=&notaMax=**  
Filtra notas entre dos valores.  
Ejemplo: `GET http://localhost:2077/notas?notaMin=7&notaMax=9`

**GET /notas?profesor=**  
Busca notas por nombre del profesor.  
Ejemplo: `GET http://localhost:2077/notas?profesor=Javi`

---

### Estadísticas

**GET /estadisticas/notas**  
Devuelve la media, el máximo y el mínimo de las notas.  
Ejemplo: `GET http://localhost:2077/estadisticas/notas`

**GET /estadisticas/total**  
Devuelve el total de trabajos y notas.  
Ejemplo: `GET http://localhost:2077/estadisticas/total`

**GET /estadisticas/notas/top?top=N**  
Devuelve los N trabajos con mejor nota.  
Ejemplo: `GET http://localhost:2077/estadisticas/notas/top?top=3`

**GET /estadisticas/notas/peores?peores=N**  
Devuelve los N trabajos con peor nota.  
Ejemplo: `GET http://localhost:2077/estadisticas/notas/peores?peores=3`

**GET /estadisticas/trabajos-por-asignatura**  
Cuenta cuántos trabajos hay por asignatura.  
Ejemplo: `GET http://localhost:2077/estadisticas/trabajos-por-asignatura`

