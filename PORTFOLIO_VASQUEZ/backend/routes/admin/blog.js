var express= require ('express');
var router= express.Router();
var novedadesModel=require('../../models/novedadesModels');
var util=require('util');
var cloudinary=require('cloudinary').v2;
const uploader= util.promisify(cloudinary.uploader.upload);
const destroy= util.promisify(cloudinary.uploader.destroy);


router.get('/', async function(req,res,next){

    var novedades= await novedadesModel.getnovedades();

    novedades=novedades.map(novedad =>{
        if(novedad.img_id){
            const imagen= cloudinary.image(novedad.img_id,{
                width:100,
                height:100,
                crop: 'fill'
            });
            return{
                ...novedad,
                imagen
            }
        }else{
            return{
                ...novedad,
                imagen:''
            }
        }
    });
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
        usuario: req.session.nombre,
        novedades  
    });

});

router.post('/agregar', async function(req, res, next){

    try{

        var imag_id='';
        if (req.files && Object.keys(req.files).length > 0){
            imagen=req.files.imagen;
            img_id= (await uploader(imagen.tempFilePath)).public_id;
            //console.log(imagen_id);
        }


         if(req.body.titulo !="" && req.body.subtitulo != "" && req.body.cuerpo != ""){
             await novedadesModel.insertNovedades({
                 ...req.body, // trae todo lo q tenga req.body //... es el spread
                 img_id
             });
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

    let novedad= await novedadesModel.getNovedadById(id);
    if(novedad.img_id){
        await (destroy(novedad.img_id));
    }

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
        
        let img_id= req.body.img_original;
        let borrar_img_vieja=false;

        if(req.body.img_delete=== "1"){//el usuario marco borrar imagen
            img_id=null;
            borrar_img_vieja=true;
        }else{
            if(req.files && Object.keys(req.files).length > 0){
                imagen=req.files.imagen;
                img_id= (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja=true; //por q es true aca vevr apunte
            }
        }
        if(borrar_img_vieja && req.body.img_original){
            await (destroy(req.body.img_original));
        }


        var obj={
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id
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