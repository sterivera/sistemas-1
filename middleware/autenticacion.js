function ensureAuth(req, res, next){
    console.log("Estas en el metodo autenticacion");
    // todo el codigo para validar el usuario
    next();
}

module.export = {
    ensureAuth,
}