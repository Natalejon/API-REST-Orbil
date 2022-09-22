const conexion = require('../Database/database');
const control = {}

//Para mostrar usuario
control.Fichas= (req,res) =>{
   
    let sql = `select * from fichas`;
   
    conexion.query(sql,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
            res.json(datos);
        }
    })
}
//Para registrar usuario
control.registrarFicha = (req,res)=> {

    const {numFicha, dateInit, dateFin, Estado, foraneProg} = req.body;

    let sql = `insert into fichas(id_ficha, fecha_inicio, fecha_fin, Estado_ficha, fk_id_programa)
    values('${numFicha}', '${dateInit}', '${dateFin}', '${Estado}', '${foraneProg}' ) `;
    
    conexion.query(sql,(error,datos)=> {
        if(error){ res.send('Error al registrar ficha a la bd');
        }else{
            let mensaje = 'La ficha se registro con exito'
            res.json({mensaje})
        }
    })
}
//Para traer un usuario individual
control.buscarFicha = (req,res) =>{
    let IdenFicha = req.params.iden;
    let nata = `select * from fichas where id_ficha = ${IdenFicha}`;
   
    conexion.query(nata,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
        
            res.json({datos});
        }
    })
}
//Para eliminar usuario
control.eliminarFicha = (req,res) =>{

    let id_ficha = req.params.ficha;
    let sql = `delete from fichas where id_ficha = ${id_ficha}`;

     conexion.query(sql,(error,datos)=> {
        	
     if(error){ res.send('Error al eliminar la ficha de la bd');
      }else{ 
       res.send('Se elimino la ficha de la bd');
    }
});
}
module.exports = control;