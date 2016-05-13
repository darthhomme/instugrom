var express = require('express');
var router = express.Router();
var Photo = require('../../models/photo');

router.get('/', function(req,res){
  Photo.find({}, function(err, dbPhotos){
    res.json({photos: dbPhotos})
  });
});

router.get('/:id', function(req, res, next){
 Photo.findById( req.params.id, function(err, dbPhoto){
   if(err) {};
   res.json(dbPhoto);
 });
});

// POST
router.post('/', function(req, res, next){
 Photo.create(req.body.photo, function(err, photo){
   res.json(photo);
 });
});

// PUT
router.put('/:id', function(req, res){
 Photo.findByIdAndUpdate(req.params.id, req.body.photo, {new:true}, function(err, photo){
   res.json(photo);
 });
});

// DELETE
router.delete('/:id', function(req, res){
 Photo.findByIdAndRemove(req.params.id, function(err){
   if(err){ res.status(500).end(); };
   res.status(204).end();
 });
});


module.exports = router;
