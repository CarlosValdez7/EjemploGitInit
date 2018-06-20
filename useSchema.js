var mongoose = require('mongoose');
var schema = require('./schema.js');

mongoose.connect('mongobd://localhost:27017/test');
  var Empleado = mongoose.model('Empleado', schema, 'empleados');

  var empleado = new Empleado({
    nombre : 'Edgar',
    apellido : 'Lozano',
    edad : 24
  });

  empleado.save(function (error) {
    if(error){
      console.log(error);
      proccess.exit(1);
    }
    Empleado.find({},function (error, docs) {
      if(error){
        console.log(error);
        procces.exit(1);
      }
      docs.forEach(function (doc) {
        console.log(doc);
      });
      proccess.exit(0);
    });

  });
  //log('Conexion exitosa');
  //procces.exit(0);
