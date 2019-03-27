var express = require('express');
var loki = require('lokijs');
var router = express.Router();
var instances, templates;
var db = new loki('./config.json',{
  autoload: true,
	autoloadCallback : ()=>{
    instances = db.getCollection("instances");
    if (instances === null) {
      instances = db.addCollection("instances");
    }
    templates = db.getCollection("templates");
    if (templates === null) {
      templates = db.addCollection("templates");
    }
    templates.on('error',function(obj){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      console.log('error ... adding 1 to userID');
      console.error(obj);
      return null;
    });
    templates.checkAllIndexes();
  },
	autosave: true, 
	autosaveInterval: 1000
});

router.get('/instances', function(req, res, next) {
  if(instances){
    res.send(formatInstances(instances.findObjects()));
  }else{
    res.send([]);
  }
});

router.post('/instances', function(req, res, next) {
  instances.insert(req.body);
  res.send(formatInstances(instances.findObjects()));
});

router.put('/instances/:id', function(req, res, next) {
  let moduleId = req.param("id");
  console.log(moduleId);
  let module = instances.get(moduleId);
  console.log(module);
  if(module){
    Object.assign(module, req.body);
    instances.update(module);
    res.send(formatInstances([module])[0]);
  }else{
    res.status(404).send(`Not found module: ${moduleId}`);
  }
});

router.delete('/instances/:id', function(req, res, next) {
  let moduleId = req.param("id");
  console.log(moduleId);
  let module = instances.get(moduleId);
  console.log(module);
  if(module){
    instances.remove(module);
    res.send(module);
  }else{
    res.status(404).send(`Not found module: ${moduleId}`);
  }
});

function formatInstances(instances){
  if(instances){
    return instances.map(instance=>{
      let result = Object.assign({}, instance);
      result.id = instance.$loki;
      delete result.$loki;
      delete result.meta;
      return result;
    });
  }else{
    return [];
  }
}


router.get('/templates', function(req, res, next) {
  if(templates){
    res.send(formatTemplates(templates.findObjects()));
  }else{
    res.send([]);
  }
});

router.post('/templates', function(req, res, next) {
  let id = req.body.id;
  if(id){
    if(templates.findObjects({id:id}).length){
      res.status(401).send(`已存在id为${id}的Module Type`);
    }else{
      console.log(req.body);
      templates.insert(req.body);
      res.send(formatTemplates(templates.findObjects()));
    }
    
  }else{
    res.status(401).send("必须包含id");
  }
});

router.put('/templates/:id', function(req, res, next) {
  let templateId = req.param("id");
  console.log(templateId);
  let template = templates.findObject({id:templateId});
  console.log(template);
  if(template){
    delete req.body.id;
    Object.assign(template, req.body);
    console.log(template);
    templates.update(template);
    res.send(formatTemplates([template])[0]);
  }else{
    res.status(404).send(`Not found template: ${templateId}`);
  }
});


router.delete('/templates/:id', function(req, res, next) {
  let templateId = req.param("id");
  console.log(templateId);
  let template = templates.findObject({id:templateId});
  console.log(template);
  if(template){
    templates.remove(template);
    res.send(formatTemplates([template])[0]);
  }else{
    res.status(404).send(`Not found template: ${templateId}`);
  }
});

function formatTemplates(templates){
  if(templates){
    return templates.map(type=>{
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
