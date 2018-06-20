 var assert = require('chai').assert;
 var app= require('./server.js');
 var superagent= require('superagent');
 const URL_TEST='http://localhost:3002';

 describe('Probar servdior', function(){
   var server;
    beforeEach(function() {
      server = app().listen(3002);
    });
    afterEach(function() {
      server.close();
    });

    it('Prueba ruta base',function(done) {
      superagent.get(URL_TEST, function(error,res) {
        assert.ifError(error);
        assert.equal(res.status,200);
        assert.equal(res.text,'hola mundo');
        done();

      })
    });
    it('Prueba ruta acerca de', function(done){
      superagent.get(URL_TEST+"/about", function(error,res) {
        assert.ifError(error);
        assert.equal(res.status,200);
        assert.equal(res.text,'acerca de');
        done();
    });
  });
 });
