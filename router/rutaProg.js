const express = require('express');
const rutProducto =express.Router();
const controlProduc = require('../controller/controladorProg.js');

rutProducto.get('/mostrarProduc', controlProduc.programa);
rutProducto.post('/insertarPrograma', controlProduc.registrarPrograma);
rutProducto.get('/listaCodigos/:id', controlProduc.buscarprograma);
rutProducto.get('/eliminarPrograma/:id_prog', controlProduc.eliminarPrograma);




module.exports = rutProducto;



