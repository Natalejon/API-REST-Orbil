const conexion = require('../Database/database');
const control = {}

//Para mostrar usuario
control.usuario= (req,res) =>{
   
    let sql = `select * from usuario`;
   
    conexion.query(sql,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
            res.json(datos);
        }
    })
}
//Para registrar usuario
control.registrarUsuario = (req,res)=> {

    const {identidad, name, type, correo, clave, celular, idFicha} = req.body;

    let sql = `insert into usuario(id_usuario, nombre, tipo_usuario, correo, clave, telefono, fk_id_ficha)
    values('${identidad}','${name}', '${type}', '${correo}', '${clave}', '${celular}', '${idFicha}' )`;
    
    conexion.query(sql,(error,datos)=> {
        if(error){ res.send('Error al registrar el usuario a la bd');
        }else{
            let mensaje = 'El usuario se registro con exito'
            res.json({mensaje})
        }
    })
}
//Para traer un usuario individual
control.buscarUsuario = (req,res) =>{
    let IdentUser = req.params.iden;
    let nata = `select * from usuario where id_usuario = ${IdentUser}`;
   
    conexion.query(nata,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
            res.json(datos);
        }
    })
}
//Para eliminar usuario
control.eliminarUsuario = (req,res) =>{

    let id_user = req.params.id_Us;
    let sql = `delete from usuario where id_usuario = ${id_user}`;

     conexion.query(sql,(error,datos)=> {
     if(error){ res.send('Error al eliminar el usuario de la bd');
      }else{ 
       res.send('Se elimino el usuario de la bd');
    }
});
}
/*control.registrarProducto = (req,res)=> {

    const {nombre, descripcion, valor, stock, up} = req.body;

    let sql = `insert into productos(Nombre_Pdto, Descripcion_Pdto, Valor_Pdto, Stock, fk_UP)
    values('${nombre}', '${descripcion}', '${valor}', '${stock}', '${up}') `;
    
    conexion.query(sql,(error,datos)=> {
        if(error){ res.send('Error al insertar el producto a la bd');
        }else{
            let mensaje = 'El producto se inserto con exito'
            res.json({mensaje})
        }
    })
}*/
module.exports = control;