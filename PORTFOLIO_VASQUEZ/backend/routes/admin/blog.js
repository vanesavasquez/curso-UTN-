var express= require ('express');
var router= express.Router();
var novedadesModel=require('../../models/novedadesModels')

router.get('/', async function(req,res,next){

    var novedades= await novedadesModel.getnovedades();
    res.render('admin/blog',{
        layout:'admin/layout',
        usuario: req.session.nombre,
        novedades  
    });

});

router.get('/agregar', async function(req,res,next){

    var novedades= await novedadesModel.getnovedades();
    res.render('admin/agregar',{
        layout:'admin/layout',
        //usuario: req.session.nombre,
        //novedades  
    });

});

router.post('/agregar', async function(req, res, next){

    try{
         if(req.body.titulo !="" && req.body.subtitulo != "" && req.body.cuerpo != ""){
             await novedadesModel.insertNovedades(req.body),
             res.redirect('/admin/blog')
         }else{
             res.render('admin/agregar', {
                 layout: 'admin/layout',
                 error: true,
                 message: 'Todos los campos son necesarios'

             })             
         }
    }catch (error){
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se Cargo la entrada'
        })
    }
})
//elimino la entrada

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/blog');
});

//traer la entrada a editar y enviar a la vista q la va a modificar

router.get('/editar/:id', async (req, res, next) => {
    var id = req.params.id;
    //console.log(req.params.id);//para ver si lo esta guardando
    var novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/editar', {
        layout: 'admin/layout',
        novedad,
    });
});

//ahra vamso a modifiar la entrada que seleccionamos para editar, con los datos nuevos y los vamos a cargar en la bd
router.post('/modificar', async (req, res, next) => {
    try {
        var obj={
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }
        console.log(obj);//para ver si trae los datos nuevos
        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/blog');
    } catch (error) {
        console.log(error);
        res.render('admin/editar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se pudo modificar la novedad',
        });
    }
});

module.exports=router;