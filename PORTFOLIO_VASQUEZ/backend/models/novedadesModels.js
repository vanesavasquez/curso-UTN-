var pool=require('./bd');
async function getnovedades(){
    var query='select * from novedades order by id desc';
    var rows= await pool.query(query);
    return rows;
}
async function insertNovedades(obj){
    try{
        var query= "insert into novedades set ?";
        var rows= await pool.query(query, [obj])
        return rows;
    }
    catch (error){
        console.log(error);
        throw error;
    }
}

//eliminar las novedades

async function deleteNovedadById(id) {
    var query = "delete from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

//edicion
// funcion q trae la entrada a editar por el id
async function getNovedadById(id) {
    var query = "select * from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

//editar la entrada seleccionada

async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports= {getnovedades,insertNovedades, deleteNovedadById, modificarNovedadById, getNovedadById}