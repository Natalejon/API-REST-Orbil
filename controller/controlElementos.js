const conexion = require('../Database/database');
const control = {}

//Para mostrar elementos
control.elementos = (req,res) =>{
   
    let sql = `select * from  elementos`;
   
    conexion.query(sql,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
            res.json(datos);
        }
    })
}
//Para registrar elementos 
control.registrarElementos = (req,res)=> {
	
    const {pk_serial,estado,image,nombreElementos,autor,descripcion,tipoElemento,stock,FkCategorias} = req.body;

    let sql = `insert into elementos(Pk_Elemento,Estado,Imagen,Nombre_Elementos,Autor,Descripcion,Tipo_Elemento,Stock,Fk_Categorias)
    values('${pk_serial}','${estado}','${image}','${nombreElementos}','${autor}','${descripcion}','${tipoElemento}','${stock}','${FkCategorias}')`;
    
    conexion.query(sql,(error,datos)=> {
        if(error){ res.send('Error al registrar el  elemento a la bd');
        }else{
            let mensaje = 'El  elemento se registro con exito'
            res.json({mensaje})
        }
    })
}
//Para traer un  elementos individual
control.buscarElementos = (req,res) =>{
    let IdentElemen = req.params.id;
    let nata = `select * from elementos where Pk_Elemento = ${IdentElemen}`;
   
    conexion.query(nata,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
            res.json(datos);
        }
    })
}
//Para eliminar elementos
control.eliminarElementos = (req,res) =>{

    let id_elemento = req.params.id_El;
    let sql = `delete from  elementos where Pk_Elemento = ${id_elemento}`;

     conexion.query(sql,(error,datos)=> {
     if(error){ res.send('Error al eliminar el  elemento de la bd');
      }else{ 
       res.send('Se elimino el  elemento de la bd');
    }
});
}
module.exports = control;