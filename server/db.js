const mongoose = require('mongoose');
const{DB_USER,DB_PASSWORD,DB_HOST} = require("./constantes");

async function conectarMongoDB (){

    try{
        await mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,);
            console.log("La conexion fue exitosa");
    }catch(error){  
        console.log("Existe un error",error);
    }
}

module.exports=conectarMongoDB;