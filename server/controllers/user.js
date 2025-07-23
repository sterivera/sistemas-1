async function getMe(req,res){
    res.status(200).send({msg: "Hola, estas dentro"});
}
module.exports = {
    getMe,
}