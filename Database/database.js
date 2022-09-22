const mysql = require('mysql');
const conexion = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password :'',
        database : 'obil_4.8.3',
    }
);
conexion.connect((error) => {
    if(error){
        console.log('No se pudo conectar a la base de datos' + error);
    }else{
        console.log('Conexion establecida');
    }
})

module.exports = conexion;