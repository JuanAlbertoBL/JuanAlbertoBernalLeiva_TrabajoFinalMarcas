const express = require("express")
const app = express()
const port = 2077

app.use(express.json())

app.listen(port, () => {
console.log("Servidor abierto")
})

let trabajos = [
    {"id":1, "nombre":"Cafetería", "descripcion":"Crear un juego usando bucles en Java", "fecha":"9/11/2025", "curso": "Primero DAM", "trimestre": "Primer trimestre", "enlace":"https://drive.google.com/file/d/1pz2qJ_w-WAwDHC7yTsX4u-CdNG94nxIe/view?usp=sharing", "asignatura":"Programación"},
    {"id":2, "nombre":"Ejercicios de ALU", "descripcion":"Ejecicios de práctica de Unidad Aritmético Lógica", "fecha": "27/10/2025", "curso": "Primero DAM", "trimestre":"Primer trimestre", "enlace":"https://drive.google.com/file/d/1f0kraO4XTjQ6pSgUWfZ5ZsSSIVPNaxY-/view?usp=sharing", "asignatura":"Sistemas Informáticos" },
    {"id":3, "nombre":"SQLite Tarea 1", "descripcion":"Crear tablas para una base de datos", "fecha":"20/11/2025", "curso":"Primer DAM", "trimestre":"Primer trimestre", "enlace":"https://drive.google.com/file/d/14_knj2RpH_rATSi9BCkQZ0XX90IV6D36/view?usp=sharing", "asignatura":"Base de Datos"},
    {"id":4, "nombre":"Tarea práctica diagramas", "descripcion":"Ejercicios de diagramas de clase y objetos", "fecha":"3/12/2025", "curso":"Primero DAM", "trimestre":"Primer trimestre", "enlace":"https://drive.google.com/file/d/1OB5hHAuRgQI6rU2D8FnpIQTmd79fyhAT/view?usp=sharing", "asignatura":"Entornos de desarrollo"},
    {"id":5, "nombre":"Práctica: Tu Portfolio", "descripcion":"Crear un portfolio personal", "fecha":"12/12/2025", "curso":"Primero DAM", "trimestre":"Primer trimestre", "enlace":"https://drive.google.com/file/d/1iEcXS-6YxsQUwl6rdAFKGz66fS1MtWri/view?usp=sharing", "asignatura":"Lenguaje de marcas"},
    {"id":6, "nombre":"MySQL Tarea 1", "descripcion":"Crear tablas en Linux", "fecha":"15/04/2026", "curso":"Primero DAM", "trimestre":"Tercer trimestre", "enlace":"https://drive.google.com/file/d/1R5984QsOlL_XytbhpzX29k9vcDTSiAEI/view?usp=sharing", "asignatura":"Base de Datos"},
    {"id":7, "nombre":"Speed Test: Empleados", "descripcion":"Crear un programa en 20 minutos", "fecha":"6/02/2026", "curso":"Primero DAM", "trimestre":"Segundo trimestre", "enlace":"https://drive.google.com/file/d/1CaX3alUApQ0k7WmH3Fp06V0VObzhb60c/view?usp=sharing", "asignatura":"Programación"},
    {"id":8, "nombre":"Tarea Paradigmas 1", "descripcion":"Ejercicios de paradigmas de la programación", "fecha":"9/03/2026", "curso":"Primero DAM", "trimestre":"Segundo trimestre", "enlace":"https://drive.google.com/file/d/1KNKXPVdBMDA3xBg0BgVoCqJOFz4Swum2/view?usp=sharing", "asignatura":"Sistemas Informáticos"},
    {"id":9, "nombre":"Práctica: Creación de un fichero", "descripcion":"Práctica para probar la creación y borrado de ficheros en Java", "fecha":"13/04/2026", "curso":"Primero DAM", "trimestre":"Tercer trimestre", "enlace":"https://drive.google.com/file/d/1jVM-5x_ROVH1VNtsMXZ_ka7mu9o5cfml/view?usp=sharing", "asignatura":"Programación"},
    {"id":10, "nombre":"Boletín Recursividad", "descripcion":"Ejercicios para practicar recursividad en Java", "fecha":"23/03/2026", "curso":"Primero DAM", "trimestre":"Segundo trimestre", "enlace":"https://drive.google.com/file/d/1WZsWELeifWJ5Z9CPrjfXBXpwmWJE6IAk/view?usp=sharing", "asignatura":"Programación"}
]

let notas = [
    {"id":1, "trabajo_id":1, "nota":10, "profesor":"Javi"},
    {"id":2, "trabajo_id":2, "nota":10, "profesor":"Fran"},
    {"id":3, "trabajo_id":3, "nota":10, "profesor":"Fran"},
    {"id":4, "trabajo_id":4, "nota":8.5, "profesor":"Adrián"},
    {"id":5, "trabajo_id":5, "nota":10, "profesor":"Javi"},
    {"id":6, "trabajo_id":6, "nota":10, "profesor":"Fran"},
    {"id":7, "trabajo_id":7, "nota":10, "profesor":"Javi"},
    {"id":8, "trabajo_id":8, "nota":10, "profesor":"Fran"},
    {"id":9, "trabajo_id":9, "nota":10, "profesor":"Javi"},
    {"id":10, "trabajo_id":10, "nota":10, "profesor":"Javi"}
]