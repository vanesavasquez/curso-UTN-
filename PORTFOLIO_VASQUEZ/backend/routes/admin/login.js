var express= require ('express');
var router= express.Router();
var usariosModel=require('../../models/usuariosModel');

//GET home page
router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});


/* cerrar sesion */
router.get('/logout', function (req, res, next) {
    req.session.destroy();//destruye las variables de session 
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

//POST
 router.post('/', async(req,res,next)=> {
     try{
         var usuario=req.body.usuario;
         var password= req.body.password;

         console.log(req.body.usuario);//para ver si lo trae despeus lo comento

         
         var data=await usariosModel.getUserByUserNameAndPassword(usuario,password);

         if (data !=undefined){
             req.session.id_usuario = data.id;
             req.session.nombre = data.usuario;
             res.redirect('/admin/blog');
        }else{
            res.render('admin/login',{
                layout: 'admin/layout',
                error:  true
            }); 
        }
     }catch(error){
         console.log(error);
     }
 })

module.exports=router;
