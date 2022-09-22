const conexion = require('../Database/database');
const controlador = {}

//Para mostrar programas
controlador.categorias= (req,res) =>{
   
    let sql = `select * from categorias`;
   
    conexion.query(sql,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
            res.json(datos);
        }
    })
}
//Para registrar programa
controlador.registrarCategorias = (req,res)=> {

    const {IdCategorias, Categoria} = req.body;

    let sql = `insert into categorias(Pk_Categorias, Nombre_Categoria)
    values('${IdCategorias}', '${Categoria}')`;
    
    conexion.query(sql,(error,datos)=> {
        if(error){ res.send('Error al registro la categoria a  la bd');
        }else{
            let mensaje = 'La categoria se registro con exito'
            res.json({mensaje})
        }
    })
}
//Para traer un programa individual
controlador.buscarCategorias = (req,res) =>{
    let IdCategoria = req.params.idCa;
    let nata = `select * from categorias where Pk_Categorias = ${IdCategoria}`;
   
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
controlador.eliminarCategorias = (req,res) =>{

    let id_Cate = req.params.id_Cat;
    let sql = `delete from categorias where Pk_Categorias = ${id_Cate}`;

     conexion.query(sql,(error,datos)=> {
     if(error){ res.send('Error al eliminar categoria de la bd');
      }else{ 
        
       res.send('Se elimino categoria de la bd');
    }
});
}

module.exports = controlador;