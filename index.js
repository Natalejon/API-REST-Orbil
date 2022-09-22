const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser'); 

         

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
 
app.use(cors());
app.use(morgan('dev')); 

app.use(require('./router/rutaProg'))
app.use(require('./router/rutUser'))
app.use(require('./router/rutaFicha'))
app.use(require('./router/rutaElement'))
app.use(require('./router/rutaMovimiento'))
app.use(require('./router/rutaCategorias'))

app.listen(4000,() =>{
    console.log('Natasha');
});