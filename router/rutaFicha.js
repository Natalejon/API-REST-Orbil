const express = require('express');
const rutProducto =express.Router();
const controlProduc = require('../controller/controlFichas');

rutProducto.get('/mostrarFicha', controlProduc.Fichas);
rutProducto.post('/insertarFicha', controlProduc.registrarFicha);
rutProducto.get('/listaCod/:iden', controlProduc.buscarFicha);
rutProducto.get('/eliminarFicha/:ficha', controlProduc.eliminarFicha);


module.exports = rutProducto;



