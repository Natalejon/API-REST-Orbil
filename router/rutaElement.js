const express = require('express');
const rutProducto =express.Router();
const controlElement = require('../controller/controlElementos');

rutProducto.get('/mostrarElemento', controlElement.elementos);
rutProducto.post('/insertarElemento', controlElement.registrarElementos);
rutProducto.get('/listaElementos/:id', controlElement.buscarElementos);
rutProducto.get('/eliminarElemento/:id_El', controlElement.eliminarElementos);


module.exports = rutProducto;



