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

app.get('/personas',(req,res)=>{//consulta en el diagonal el nombre de la tabla
    
    console.log(req.query.ID_PERSONA);

    let consulta=''

    if(typeof(req.query.ID_PERSONA)=='undefined'){
        consulta = `SELECT * FROM personas`;
    }
    else{
        consulta = `SELECT * FROM personas WHERE ID_PERSONA = ${req.query.ID_PERSONA}`;
    }

    console.log(consulta)

    connection.query(
        consulta,
        function(err, results, fields) {
            if(results.length==0){
                res.json({ mensaje:"ID_PERSONA no existe"});
            } 
            else {
                res.json(results);
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

