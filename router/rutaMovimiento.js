const express = require('express');
const rutProducto =express.Router();
const controlProduc = require('../controller/controlMovement');
const rutaReserva = require('../controller/reservaAmbiente')

rutProducto.get('/mostrarMovi', controlProduc.Movimientos);
rutProducto.post('/insertarMovi', controlProduc.registrarMovimientoElement);
rutProducto.get('/listass/:idd', controlProduc.buscarMovimiento);
rutProducto.get('/eliminarMovi/:id_Mo', controlProduc.eliminaMovimiento);
rutProducto.post('/ambiente', controlProduc.reservaAmbiente);
rutProducto.post('/actualizar/:PK_Movimento', controlProduc.actualizarAmbiente);



//Otro Controlador
rutProducto.post('/reserva', rutaReserva.validarReserva)

module.exports = rutProducto;



