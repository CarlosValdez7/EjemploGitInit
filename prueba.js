

let express = require('express');
let app=express();


  app.get('/hola',function(req,res){
    let msg ="Hola mundo 2";
    res.send(msg);
  });

app.get('/cliente',function(req,res){
res.send({cliente:"ejemplo cliente"});
});


app.listen(3000);


