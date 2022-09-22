const conexion = require('../Database/database');
const controlador = {}

//Para mostrar programas
controlador.programa= (req,res) =>{
   
    let sql = `select * from programa`;
   
    conexion.query(sql,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
            res.json(datos);
        }
    })
}
//Para registrar programa
controlador.registrarPrograma = (req,res)=> {

    const {ficha, nameProgram} = req.body;

    let sql = `insert into programa(id_programa, nombre_programa)
    values('${ficha}', '${ nameProgram}')`;
    
    conexion.query(sql,(error,datos)=> {
        if(error){ res.send('Error al registro el programa a la bd');
        }else{
            let mensaje = 'El programa se registro con exito'
            res.json({mensaje})
        }
    })
}
//Para traer un programa individual
controlador.buscarprograma = (req,res) =>{
    let fichaProgram = req.params.id;
    let nata = `select * from programa where id_programa = ${fichaProgram}`;
   
    conexion.query(nata,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
            let mensaje = 'RESULTADOS!'
            res.json({mensaje,datos});
        }
    })
}
//Para eliminar programa
controlador.eliminarPrograma = (req,res) =>{

    let id_prog = req.params.id_prog;
    let sql = `delete from programa where id_programa = ${id_prog}`;

     conexion.query(sql,(error,datos)=> {
     if(error){ res.send('Error al eliminar el producto a la bd');
      }else{ 
        
       res.send('Se elimino el programa de la bd');
    }
});
}

module.exports = controlador;