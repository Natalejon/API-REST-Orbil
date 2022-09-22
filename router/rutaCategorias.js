const express = require('express');
const rutProducto =express.Router();
const controlProduc = require('../controller/controlCategorias');

rutProducto.get('/mostrarCategorias', controlProduc.categorias);
rutProducto.post('/insertarCategoria', controlProduc.registrarCategorias);
rutProducto.get('/listaCat/:idCa', controlProduc.buscarCategorias);
rutProducto.get('/eliminarCategoria/:id_Cat', controlProduc.eliminarCategorias);



module.exports = rutProducto;



