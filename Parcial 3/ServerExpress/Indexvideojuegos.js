const express = require('express');
const cors = require('cors')
const mysql2 = require('mysql2')
const app = express();

app.use(cors());

//create connection database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password:'070803',
    database: 'prueba2'
})

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

app.listen(8082,(req,res)=>{//MODIFICAR
    console.log("Servidor express corriendo en  puerto 8082")
});