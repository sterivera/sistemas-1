const mongoose = require ("mongoose");

const UsuarioSchema = new mongoose.Schema(
    {
        cedula: {
            unique: true,
            type: String
        },
        nombre: String,
        apellido: String,
        email: {
            unique: true,
            type: String
        },
        password: String,
        rol: String,
        active: Boolean,
        avatar: String
    }
);

module.exports=mongoose.model("Usuario",UsuarioSchema);