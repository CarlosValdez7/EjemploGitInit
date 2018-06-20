

let express = require('express');

let app=express();

module.exports = function(){
  app.get('/',function (req,res) {
    let msg ="hola mundo";
    res.send(msg);
  });
  app.get('/user/:user',function(req,res){
    res.send('Usuario '+ req.params.user + ' con opcion = '+req.query.opcion);

  });
  app.get('/about',function(req,res){
    let msg ="acerca de";
    res.send(msg);
  });
  return app;
};
//app.listen(3002);
//console.log('esperando peticiones');

//instalar express
