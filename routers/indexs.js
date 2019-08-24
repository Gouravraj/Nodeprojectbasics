var express = require('express');
var router = express.Router();

var MyUsers = require('../models/users');

router.get('/',function(req,res){
    res.render('index');
  });

router.get("/user",function(req,res){
    MyUsers.find({},function(err,result){
      if (err) return err;
      res.render('user',{Result:result});
    })
  }); 

router.get("/user/:name/:id",function(req,res){
     MyUsers.findById(req.params.id,function(err,result){
        if (err) return err;
        res.render('userprofile',{Result:result});
     })
   })
  
router.post("/:id/useredit",function(req,res){
       var email = req.body.email;
       var name = req.body.name;
       var number = req.body.number;
       var pass = req.body.pass;
       var data = {email:email,name:name,number:number,pass:pass}
    MyUsers.findByIdAndUpdate(req.params.id,{$set:data},function(err,result){
      if (err) return err;
      res.redirect('/'+req.params.id+'/editform');
    })
  })

router.get("/:id/delete",function(req,res){
    var email = req.body.email;
    var name = req.body.name;
    var number = req.body.number;
    var pass = req.body.pass;
    var data = {email:email,name:name,number:number,pass:pass}
 MyUsers.findByIdAndRemove(req.params.id,{$set:data},function(err,result){
   if (err) return err;
   res.redirect('/');
 })
})

router.get("/:id/editform",function(req,res){
     MyUsers.findById(req.params.id,function(err,result){
       if (err) return err;
       res.render('edit',{Result:result});
     })
   })

router.get("/adddata",function(req,res){
    var mydata=new MyUsers(req.query);
    mydata.save()
    .then(result=>{
  res.redirect('/');
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
  })

router.get("/api/use",function(req,res)
    {
    MyUsers.find({},function(err,result){
      if(err) return err;
      res.json(result);
    })
  }); 
module.exports=router;



