var express=require('express');
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
var app=express();
mongoose.Promise=global.Promise;

mongoose.connect('mongodb+srv://gourav:gourav@cluster0-lyhzc.mongodb.net/test?retryWrites=true&w=majority');


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.set('view engine','ejs');

var indexrout=require('./routers/indexs');

app.use(indexrout);

app.listen(8000,function(){
    console.log("app is running at 8000...");
  });


    