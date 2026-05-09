const express = require("express")
const app = express()
const port = 2077

app.use(express.json())

app.listen(port, () => {
console.log("Servidor abierto")
})

const cors = require("cors")
app.use(cors())

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
    {"id":2, "trabajo_id":2, "nota":6, "profesor":"Fran"},
    {"id":3, "trabajo_id":3, "nota":7.8, "profesor":"Fran"},
    {"id":4, "trabajo_id":4, "nota":8.5, "profesor":"Adrián"},
    {"id":5, "trabajo_id":5, "nota":10, "profesor":"Javi"},
    {"id":6, "trabajo_id":6, "nota":9, "profesor":"Fran"},
    {"id":7, "trabajo_id":7, "nota":10, "profesor":"Javi"},
    {"id":8, "trabajo_id":8, "nota":5, "profesor":"Fran"},
    {"id":9, "trabajo_id":9, "nota":10, "profesor":"Javi"},
    {"id":10, "trabajo_id":10, "nota":6.25, "profesor":"Javi"}
]

//================================================
//Endpoints para el recurso principal (trabajos):
//================================================

//obtener todos los trabajos y Búsquedas y filtros:
app.get("/trabajos", (req,res) => {
    if (req.query.nombre){  //filtra por nombre
        const trabajo = trabajos.filter(a => a.nombre.includes(req.query.nombre))
        return res.json(trabajo)
    } else if (req.query.asignatura && req.query.trimestre){    //filtra por múltiples campos: asignatura y trimestre
        const trabajo = trabajos.filter(a => a.asignatura == req.query.asignatura && a.trimestre == req.query.trimestre)
        return res.json(trabajo)
    } else if(req.query.asignatura){    //orden alfabético
        if (req.query.asignatura == "desc"){    //orden descendente
            const trabajo = trabajos.sort((a, b) => b.asignatura.localeCompare(a.asignatura))
            return res.json(trabajo)
        } else if(req.query.asignatura == "asc"){   //orden ascendente
            const trabajo = trabajos.sort((a, b) => a.asignatura.localeCompare(b.asignatura))
            return res.json(trabajo)
        }
    }
    else {
    return res.json(trabajos)
    }
})

//Seleccionar por id con route params con menejo de error 404:
app.get("/trabajos/:id", (req, res) => {
    const trabajo = trabajos.find(a => a.id == req.params.id);
    if (trabajo){
    return res.json(trabajo);
    }
    return res.status(404).json({ error: "404, no encontrado" });
});

//selccionar por nombre con query params:
app.get("/trabajo", (req, res) => {
    const trabajo = trabajos.find(a => a.nombre == req.query.nombre);
    if(trabajo){
    return res.json(trabajo);
    }
    return res.status(404).json({ error: "404, no encontrado"})
});

//añadir un trabajo y mensaje HTTP 201 (created) o 400(bad request):
app.post("/trabajos", (req,res) =>{
    if(!req.body.nombre || !req.body.descripcion || !req.body.fecha || !req.body.curso || !req.body.trimestre || !req.body.enlace || !req.body.asignatura){
        return res.status(400).json({ error: "400, bad request"}) 
    }
    let nuevoTrabajo = {
        id: trabajos.length+1,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        curso: req.body.curso,
        trimestre: req.body.trimestre,
        enlace: req.body.enlace,
        asignatura: req.body.asignatura
    }
    trabajos.push(nuevoTrabajo);
    return res.status(201).json(nuevoTrabajo)
})

//modificar un registro existente con mensaje HTTP 200:
app.put("/trabajos/:id", (req,res) => {
    const trabajo = trabajos.find(a => a.id == req.params.id);
    if(!trabajo){
        return res.status(404).json({error: "no se encuentra"})
    }
    trabajos[req.params.id-1].nombre = req.body.nombre;
    trabajos[req.params.id-1].descripcion = req.body.descripcion;
    trabajos[req.params.id-1].fecha = req.body.fecha;
    trabajos[req.params.id-1].curso = req.body.curso;
    trabajos[req.params.id-1].trimestre = req.body.trimestre;
    trabajos[req.params.id-1].enlace = req.body.enlace;
    trabajos[req.params.id-1].asignatura = req.body.asignatura;

    return res.status(200).json(trabajos[req.params.id-1])
})

//eliminar un registro:
app.delete("/trabajos/:id", (req,res) => {
    const index = trabajos.findIndex(a => a.id == req.params.id)
    const trabajo = trabajos.find(a => a.id == req.params.id);
    if(trabajo){
    trabajos.splice(index, 1)
    return res.send("trabajo con id " + req.params.id + " eliminado")
    }
    return res.status(404).json({error: "no encontrado"})
})
//==============================================
//Endpoints para el recurso secundario (notas):
//==============================================

//Obtener todos los registros y búsquedas y filtros:
app.get("/notas", (req,res) => {
    if(req.query.notaMin && req.query.notaMax){     //filtrar entre dos notas
        const nota = notas.filter(a => a.nota > Number(req.query.notaMin) && a.nota < Number(req.query.notaMax))
        return res.json(nota)
    } else if(req.query.notaMax){   //filtrar notas menores a x
        const nota = notas.filter(a => a.nota < Number(req.query.notaMax))
        return res.json(nota)
    } else if(req.query.notaMin){  //filtrar notas mayores a x
        const nota = notas.filter(a => a.nota > Number(req.query.notaMin))
        return res.json(nota)
    } else if(req.query.profesor){
        const profe = notas.filter(a => a.profesor.includes(req.query.profesor))
        return res.json(profe)
    }
    else{
    return res.json(notas)
    }
})

//obtener registros secundarios que pertenecen a un registro principal concreto (mostrar notas y profesor al seleccionar un trabajo):
app.get("/trabajos/:id/notas", (req, res) => {
    const nota = notas.filter(a => a.trabajo_id == Number(req.params.id));
    if(nota.length > 0){
    return res.json(nota);
    }
    return res.status(404).json({ error: "404, no encontrado"})
});

//añadir una nota nueva:
app.post("/notas", (req,res) => {
    if(!req.body.nota || !req.body.profesor || !req.body.trabajo_id){
        return res.status(400).json({ error: "400, bad request"}) 
    }
    let nuevaNota = {
        id: notas.length+1,
        trabajo_id: req.body.trabajo_id,
        nota: req.body.nota,
        profesor: req.body.profesor,
    }
    notas.push(nuevaNota);
    return res.status(201).json(nuevaNota)
})

//eliminar un registro del recurso secundario:
app.delete("/notas/:id", (req,res) => {
    const index = notas.findIndex(a => a.id == req.params.id)
    const nota = notas.find(a => a.id == req.params.id);
    if(nota){
    notas.splice(index, 1)
    return res.send("nota con id " + req.params.id + " eliminado")
    }
    return res.status(404).json({error: "no encontrado"})
})

//===========================
//Endpoints de estadísticas
//===========================

//Obtener media, min y max:
app.get("/estadisticas/notas", (req,res) => {
    const media = (notas.reduce((suma, a) => suma + a.nota, 0) / notas.length).toFixed(2)   //media, limitado a 2 decimales
    const max = Math.max(...notas.map(a => a.nota))     
    const min = Math.min(...notas.map(a => a.nota))
    return res.json({media, max, min})
})

//obtener el total de registros:
app.get("/estadisticas/total", (req, res) => {
    const totalTrabajos = trabajos.length
    const totalNotas = notas.length
    return res.json({totalTrabajos, totalNotas})
})

//obtener registros más altos:
app.get("/estadisticas/notas/top", (req, res) => {
    const n = Number(req.query.top) //define la cantidad de registros a mostrar
    const top = notas.sort((a, b) => b.nota - a.nota).slice(0, n)   //ordena de mayor a menor y parte desde pos 0 hasta pos definida en el query
    return res.json(top)
})

//obtener los registros más bajos
app.get("/estadisticas/notas/peores", (req, res) => {
    const n = Number(req.query.peores) //define la cantidad de registros a mostrar
    const peores = notas.sort((a, b) => a.nota - b.nota).slice(0, n)   //ordena de menor a mayor y parte desde pos 0 hasta pos definida en el query
    return res.json(peores)
})

//contar cuántos trabajos hay por asignatura:
app.get("/estadisticas/trabajos-por-asignatura", (req, res) => {
    const nTrabajos = trabajos.reduce((contador, a) => {
        contador[a.asignatura] = (contador[a.asignatura] || 0) + 1
        return contador
    }, {})
    return res.json(nTrabajos)
})