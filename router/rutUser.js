const express = require('express');
const rutProducto =express.Router();
const controlUser = require('../controller/controlUser');

rutProducto.get('/mostrarUser', controlUser.usuario);
rutProducto.post('/insertarUsuario',controlUser.registrarUsuario);
rutProducto.get('/lista/:iden', controlUser.buscarUsuario);
rutProducto.get('/eliminar/:id_Us', controlUser.eliminarUsuario);

//Ejemplo de sena empresa
//rutProducto.post('/insertar', controlUser.registrarProducto);


module.exports = rutProducto;



