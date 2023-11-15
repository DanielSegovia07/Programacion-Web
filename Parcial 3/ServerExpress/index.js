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

app.get('/',(req,res)=>{//consulta en el diagonal el nombre de la tabla
    //console.log(req.query.idUsuario);
    connection.query(
        'SELECT * FROM personas',
        function(err, results, fields){
            console.log(results);
            console.log(fields);

            console.log(results);//array de objetos
            res.json(results);
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