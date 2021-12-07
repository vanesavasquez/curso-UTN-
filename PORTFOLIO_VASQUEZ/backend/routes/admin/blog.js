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
module.exports=router;