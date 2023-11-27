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
                        datos: results[0]});
            }
            
        }
    )
});

app.post('/',(req,res)=>{//alta
    res.json({ mensaje:"Servidor Express respondiendo a post"});
});

app.delete('/',(req,res)=>{//alta
    res.json({ mensaje:"Servidor Express respondiendo a delete"});
});

app.listen(8082,(req,res)=>{
    console.log("Servidor express corriendo en  puerto 8082")
});