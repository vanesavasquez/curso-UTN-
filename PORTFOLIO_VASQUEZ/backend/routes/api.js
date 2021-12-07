var express= require ('express');
var router= express.Router();
var novedadesModel=require('../models/novedadesModels');
var cloudinary=require('cloudinary').v2;

router.get('/blog', async function(req,res,next){

    var novedades= await novedadesModel.getnovedades();

    novedades=novedades.map(novedades =>{
        if(novedades.img_id){
            const imagen= cloudinary.image(novedades.img_id,{
                width:960,
                height:200,
                crop: 'fill'
            });
            return{
                ...novedades,
                imagen
            }
        }else{
            return{
                ...novedades,
                imagen:''
            }
        }
    });
   res.json(novedades);

});
module.exports=router;