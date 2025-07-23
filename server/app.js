const express = require("express");
const {API_VERSION} = require ("./constantes");

const app = express();
const authRoutes = require("./router/auth");
const userRoutes = require("./router/user");

//importar los archivos de ruta
app.use(express.static("uploats"))
//configurar body parse petcions HTTP
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//configure Header CORS

// configurar las rutas
app.use('/api/',authRoutes );
app.use('/api/',userRoutes);


module.exports = app;