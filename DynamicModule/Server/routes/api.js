var express = require('express');
var loki = require('lokijs');
var router = express.Router();
var modules, moduleTypes;
var db = new loki('./config.json',{
  autoload: true,
	autoloadCallback : ()=>{
    modules = db.getCollection("modules");
    if (modules === null) {
      modules = db.addCollection("modules");
    }
    moduleTypes = db.getCollection("moduleTypes");
    if (moduleTypes === null) {
      moduleTypes = db.addCollection("moduleTypes");
    }
    moduleTypes.on('error',function(obj){
      console.log('error ... adding 1 to userID');
      console.error(obj);
      return null;
    });
    moduleTypes.checkAllIndexes();
  },
	autosave: true, 
	autosaveInterval: 1000
});

router.get('/modules', function(req, res, next) {
  if(modules){
    res.send(formatModules(modules.findObjects()));
  }else{
    res.send([]);
  }
});

router.post('/modules', function(req, res, next) {
  modules.insert(req.body);
  res.send(formatModules(modules.findObjects()));
});

router.put('/modules/:id', function(req, res, next) {
  let moduleId = req.param("id");
  console.log(moduleId);
  let module = modules.get(moduleId);
  console.log(module);
  if(module){
    Object.assign(module, req.body);
    modules.update(module);
    res.send(formatModules([module])[0]);
  }else{
    res.status(404).send(`Not found module: ${moduleId}`);
  }
});

function formatModules(modules){
  if(modules){
    return modules.map(module=>{
      let result = Object.assign({}, module);
      result.id = module.$loki;
      delete result.$loki;
      delete result.meta;
      return result;
    });
  }else{
    return [];
  }
}


router.get('/moduleTypes', function(req, res, next) {
  if(moduleTypes){
    res.send(formatModuleTypes(moduleTypes.findObjects()));
  }else{
    res.send([]);
  }
});

router.post('/moduleTypes', function(req, res, next) {
  let id = req.body.id;
  if(id){
    if(moduleTypes.findObjects({id:id}).length){
      res.status(401).send(`已存在id为${id}的Module Type`);
    }else{
      console.log(req.body);
      moduleTypes.insert(req.body);
      res.send(formatModuleTypes(moduleTypes.findObjects()));
    }
    
  }else{
    res.status(401).send("必须包含id");
  }
});

router.put('/moduleTypes/:id', function(req, res, next) {
  let moduleTypeId = req.param("id");
  console.log(moduleTypeId);
  let moduleType = moduleTypes.findObject({id:moduleTypeId});
  console.log(moduleType);
  if(moduleType){
    delete req.body.id;
    Object.assign(moduleType, req.body);
    console.log(moduleType);
    moduleTypes.update(moduleType);
    res.send(formatModuleTypes([moduleType])[0]);
  }else{
    res.status(404).send(`Not found module: ${moduleTypeId}`);
  }
});

function formatModuleTypes(types){
  if(types){
    return types.map(type=>{
      let result = {};
      Object.assign(result, type);
      delete result.$loki;
      delete result.meta;
      return result;
    });
  }else{
    return [];
  }
}

module.exports = router;
