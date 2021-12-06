var pool=require('./bd');//llamamos a la BD
var md5=require('md5');// lo necesito por q es el q transforma  la contraseña para q este encriptada

async function getUserByUserNameAndPassword (user,password){
    try{
        var query="select * from usuarios where usuario = ? and password = ? limit 1";

        var rows= await pool.query(query, [user, md5(password)]);
        return rows[0];
    }catch(error){
        console.error();
    }
}
module.exports={getUserByUserNameAndPassword}