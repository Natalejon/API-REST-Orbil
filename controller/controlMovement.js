const conexion = require('../Database/database');
const control = {}

//Para mostrar elementos
control.Movimientos = (req,res) =>{
   
    let sql = `select * from  movimiento`;
   
    conexion.query(sql,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
            res.json(datos);
        }
    })
}
//Para registrar movimientos
control.registrarMovimientoElement = (req,res)=> {

    const {estadoPermiso,  estadoMovi, joranadaReserva,  cantidad, fechaInicio, fechaFin, observacion, instructor, ElementForaneo, userForaneo } = req.body;
        
    let sql = `insert into movimiento(Estado_permiso, Estado_Mv, Jornada_Reserva, Cantidad, Fecha_Inico, Fecha_fin, Observacion, id_instructor, Fk_elemento, Fk_usuario)
    values('${estadoPermiso}','${estadoMovi}','${joranadaReserva}','${cantidad}', '${fechaInicio}','${fechaFin}','${observacion}','${instructor}','${ElementForaneo}','${userForaneo}')`;
    

    conexion.query(sql,(error,datos)=> {
        if(error){ res.send('Error al registrar el  movimiento a la bd' + error);
        
        }else{
            let mensaje = 'El movimiento se registro con exito'
            res.json(mensaje)
        }
    })
}

//Para traer un  elementos individual
control.buscarMovimiento = (req,res) =>{
    let IdentMovi = req.params.idd;
    let nata = `select * from movimiento where PK_Movimento = ${IdentMovi}`;
   
    conexion.query(nata,(error,datos)=> {
        if(error){
            console.log('Error al conectar a la base de datos');
        }else{
            res.json(datos);
        }
    })
}
//Para eliminar elementos
control.eliminaMovimiento= (req,res) =>{

    let id_movimiento = req.params.id_Mo;
    let sql = `delete from  movimiento where PK_Movimento = ${id_movimiento}`;

     conexion.query(sql,(error,datos)=> {
     if(error){ res.send('Error al eliminar el  movimiento de la bd');
      }else{ 
       res.send('Se elimino el  movimiento de la bd');
    }
});
}
    // < -- Reserva del Ambiente -->
control.reservaAmbiente = (req,res)=> {


    let { jornada, reserva, fechaInicio, fechaFin, elemento, usuario } = req.body;
        
    let sql = `insert into movimiento(Jornada_Reserva, Fecha_reserva_ambiente, Fecha_Inico, Fecha_fin, Fk_elemento,Fk_usuario)
                VALUES ('${jornada}', '${reserva}', '${fechaInicio}', '${fechaFin}', ${elemento}, ${usuario})`;
    

    conexion.query(sql,(error,datos)=> {
        if(error){ res.send('Error al reservar el  movimiento de la bd' + error);
    }else{ 
     res.json('Se reservo el  ambiente de la bd');
  }
})};

//Metodo actualizar
control.actualizarAmbiente = (req,res)=> {

    let code = req.params.PK_Movimento;
    let {estado, movimientos, jornada, cantidad, reserva, fechaInicio, fechaFin, elemento, usuario } = req.body;
        
let sql = `Update movimiento set Estado_permiso = ${estado},  Estado_Mv = ${movimientos}, 
        Jornada_Reserva = ${jornada}, Cantidad = ${cantidad}, Fecha_reserva_ambiente = ${reserva}, 
        Fecha_Inico = ${fechaInicio}, Fecha_fin = ${fechaFin}, Fk_elemento = ${elemento}, Fk_usuario = ${usuario} where PK_Movimento = ${code}`;
    

    conexion.query(sql,(error,datos)=> {
        if(error){ res.send('Error al actualizar el  movimiento a la bd' + error);
        
        }else{
            let mensaje = 'El movimiento se actualizo con exito'
            res.json(mensaje)
        }
    })
}

module.exports = control;