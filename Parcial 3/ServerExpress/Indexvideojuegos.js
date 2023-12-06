const express = require('express');
const cors = require('cors')
const mysql2 = require('mysql2')
const app = express();
const { jsPDF } = require("jspdf");
const path = require('path');

app.use(cors());

//create connection database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password:'070803',
    database: 'prueba2'
})


//? Consulta de todos las peliculas de la base de datos
app.get('/', (req, res) => {
    console.log(req.query.ID);
    let consulta = ''
    if (typeof (req.query.ID) == 'undefined') {
        consulta = `select * from videojuegos`
    } else {
        consulta = `select * from videojuegos where ID=${req.query.ID}`
    }
    console.log(consulta);

    connection.query(
        consulta,
        function (err, results, fields) {
            if (results.length == 0) {
                res.json({ mensaje: "No hay registrado nada" });
            }
            else {
                res.json(results);
            }
        }
    );
});

app.get('/videojuegos',(req,res)=>{//consulta en el diagonal el nombre de la tabla
    
    console.log(req.query.ID);

    let consulta=''

    if(typeof(req.query.ID)=='undefined'){
        consulta = `SELECT * FROM videojuegos`;
    }
    else{
        consulta = `SELECT * FROM videojuegos WHERE ID = ${req.query.ID}`;
    }

    console.log(consulta)

    connection.query(
        consulta,
        function(err, results, fields) {
            if(results.length==0){
                res.json({ status:0,
                    mensaje:"ID no existe",
                    datos: {} });
            } 
            else {
                res.json({status: 1,
                        mensaje : "GOTY encontrado",
                        datos: (results.length==1) ? results[0] : results}
                        );
            }
            
        }
    )
});

app.post('/videojuegos',(req,res)=>{//alta
    console.log(req.query);
    let sentenciaSQL = '';
    if (typeof(req.query.Titulo) == 'undefined' || typeof(req.query.Desarrollador) == 'undefined' || typeof(req.query.Lanzamiento) == 'undefined' || typeof(req.query.Genero) == 'undefined' || typeof(req.query.Plataforma) == 'undefined' || typeof(req.query.Precio) == 'undefined') {
        res.json({ 
            status: 0,
            mensaje: "Completa todos los campos por favor",
            datos: {} 
        });
    } 
    else {
        sentenciaSQL = `INSERT INTO Videojuegos (Titulo, Desarrollador, Lanzamiento, Genero, Plataforma, Precio)VALUES('${req.query.Titulo}', '${req.query.Desarrollador}', '${req.query.Lanzamiento}', '${req.query.Genero}', '${req.query.Plataforma}','${req.query.Precio}')`;
        console.log(sentenciaSQL);
        connection.query( sentenciaSQL,function(err, results, fields) {
                console.log(results);
                if (results && results.affectedRows == 1) {
                    res.json({ 
                        status: 1,
                        mensaje: "Insercion exitosa",
                        datos: {} 
                    });
                } else {
                    res.json({ 
                        status: 0,
                        mensaje: "Hubo un error al insertar",
                        datos: {} 
                    });
                }
            }
        )
    }
});

app.delete('/videojuegos',(req,res)=>{//delete
    console.log(req.query.ID);

    let sentenciasql=''


    if(typeof(req.query.ID)=='undefined'){
        res.json({ status:0,
            mensaje:"Falto enviar ID",
            datos: {} });
    }
    else{
        sentenciasql = `DELETE FROM videojuegos WHERE ID = ${req.query.ID}`;
    }

    connection.query( sentenciasql, function(err, results, fields) {

            console.log(err);
            console.log(results);
            console.log(fields);

            if (results.affectedRows==1){
                    res.json({ status:1,
                    mensaje:"Registro eliminado",
                    datos: {} });
            }else{
                res.json({ status:0,
                    mensaje:"No se pudo eliminar",
                    datos: {} });
            }            
        }
    )
});

app.listen(8082,(req,res)=>{
    console.log("Servidor express corriendo en  puerto 8082")
});

app.put('/videojuegos', (req, res) => {
    console.log(req.query);
    let sentenciaSQL = '';
    if (typeof (req.query.Titulo) == 'undefined' || typeof (req.query.Lanzamiento) == 'undefined' || typeof (req.query.Desarrollador) == 'undefined' || typeof (req.query.Genero) == 'undefined' || typeof (req.query.Precio) == 'undefined' ) {
        res.json({
            status: 0,
            mensaje: "Completa todos los campos por favor",
            datos: {}
        });
    }
    else {
        
        sentenciaSQL = `UPDATE Videojuegos SET Titulo = '${req.query.Titulo}', Desarrollador = '${req.query.Desarrollador}', Lanzamiento = '${req.query.Lanzamiento}', Genero = '${req.query.Genero}', Plataforma = '${req.query.Plataforma}', Precio = '${req.query.Precio}' WHERE ID = '${req.query.ID}'`;
        console.log(sentenciaSQL);
        connection.query(
            sentenciaSQL,
            function (err, results, fields) {
                console.log(results);
                if (results && results.affectedRows == 1) {
                    res.json({
                        status: 1,
                        mensaje: "Videojuego modificado exitosamente",
                        datos: {}
                    });
                } else {
                    res.json({
                        status: 0,
                        mensaje: "Hubo un error al modificar el videojuego, por favor intenta de nuevo",
                        datos: {}
                    });
                }
            }
        )
    }
});

// Crear PDF 
app.get('/videojuegos/formato', (req, res) => {
    let doc = new jsPDF();
    doc.setFontSize(12);
    const Titulo = req.query.Titulo;
    const Desarrollador = req.query.Desarrollador;
    const Lanzamiento = req.query.Lanzamiento;
    const Genero = req.query.Genero;
    const Plataforma = req.query.Plataforma;
    const Precio = req.query.Precio;
    doc.text('Título:', 10, 10);
    doc.text(Titulo, 10, 20);
    doc.text('Desarrollador:', 10, 40);
    doc.text(Desarrollador, 10, 50);
    doc.text('Lanzamiento:', 10, 70);
    doc.text(Lanzamiento, 10, 80);
    doc.text('Genero:', 10, 100);
    doc.text(Genero, 10, 110);
    doc.text('Plataforma:', 10, 130);
    doc.text(Plataforma, 10, 140);
    doc.text('Precio:', 10, 160);
    doc.text(Precio, 10, 170);

    let archivoPDF = path.join('C:\\wamp64\\www\\Programacion-Web\\CRUD', 'videojuego.pdf');
    doc.save(archivoPDF, function (err) {
        if (err) {
            return res.sendStatus(500);
            console.log('error');
            
        }
        res.download(archivoPDF);
        console.log('descarga exitosa')
    });
});



