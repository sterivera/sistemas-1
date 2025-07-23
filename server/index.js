const conectarBD = require ("./db");
const app = require ("./app");

const PORT = process.env.PORT || 3977;

async function main () {
    console.log ("hola mundo");
    await conectarBD();

     app.listen(PORT,()=> {
        console.log("&&&&&&&&&")
        console.log(`Express funciona en el puerto: ${PORT}`);
     })
    
}
main();