const Usuario=require("../models/user");
const bcrypt=require("bcryptjs");
const jwt=require("../utils/jwt");

async function register(req,res){
    const {cedula, nombre, apellido, email, password}= req.body;//recogiendo datos del body 
    const usernew= new Usuario({
        cedula,
        nombre,
        apellido,
        email:email.toLowerCase(),
        rol:"user",
        active:"false",
        
    });
    const salt= bcrypt.genSaltSync(10);
    const hashpass= bcrypt.hashSync(password,salt);
    usernew.password=hashpass;
    try{
//control del proceso
    const userStored = await usernew.save();
    res.status(201).send(userStored);

    } catch(error){
        
        if (error.code === 11000){
            res.status(400).send({msg : "El usuario ya existe"});
        }else{
            res.status(400).send({msg : "Error de conexcion a la db", error});
        }
    }
}

async function login(req,res) {
    const {email, password} =req.body;
    
    if(!email) res.status(400).send({msg: "El email es obligatorio"});
    if(!password) res.status(400).send({msg: "El contraseña es obligattoria"});

    console.log(email, password);
    const emailMinuscula = email.toLowerCase();
    try{
    const logeado = await Usuario.findOne({email:emailMinuscula});
    console.log(logeado);
    if (!logeado){
        res.status(400).send({msg : "El usuario no existe"});
    }else{
            bcrypt.compare(password, logeado.password,
                (bcryptError, check) =>{
                    if(bcryptError){
                        res.status(500).send({msg: "Error del encriptador"});
                    }else if (!check){
                        res.status(400).send({msg: "Contraseña incorrecta"});
                    }else if(!logeado.active){
                        res.status(400).send({msg: "Usuario inactivo"});
                    }else{
                        res.status(200).send({
                          access: jwt.createAccesotoken(logeado),
                          refresh: jwt.createrefreshToken(logeado)

                        })
                    }
        } )
    }
    }catch(error){
        res.status(400).send({msg: "error en la conexion en la base de datos", error});
    }
    
}

async function refreshAccessToken(req, res) {
    const {token} = req.body;
    if (!token) res.status(400).send({msg: "No hay token"});
    
    const { user_id } = jwt.decoded (token);
    try{
        const userStorage = await Usuario.findOne({_id: user_id});
        res.status(200).send({accessToken : jwt.createAccessToken(userStorage)});

    }catch (error){
        res.status(400).send({msg: "Error con el servidor de base de datos", error});
    }
}


 module.exports={
    register,
    login,
    refreshAccessToken
 };