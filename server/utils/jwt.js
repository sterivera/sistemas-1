const jwt = require("jsonwebtoken");
const {JWT_SECRET_KEY} = require("../constantes");

function createAccesotoken (user) {
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 3);

    //son los datos del token
    const payload = {
        token_type: "access",
        user_id: user._id,
        iat: Date.now(),//cuando fue creado el token
        exp: expToken.getTime()//cuando expira en token
    }

    return jwt.sign(payload, JWT_SECRET_KEY)
}



function createrefreshToken (user){
    const expToken = new Date();
    expToken.setHours(expToken.getMonth() + 1);

    //son los datos del token
    const payload = {
        token_type: "refresh",
        user_id: user._id,
        iat: Date.now(),                    //cuando fue creado el token
        exp: expToken.getTime()             //cuando expira en token
    }

    return jwt.sign(payload, JWT_SECRET_KEY)
}

function decoded(token){
    return jwt.decode(token, JWT_SECRET_KEY, true);
}

module.exports = {
    createAccesotoken, 
    createrefreshToken,
    decoded
}