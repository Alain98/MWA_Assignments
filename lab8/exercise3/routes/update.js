var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

router.post('/', function (req, res, next) {
  MongoClient.connect('mongodb://127.0.0.1:27017/lab8', function (error, client) {
    if (error) throw error;
    const db = client.db('lab8');

    const doc = {
      'name': req.body.name,
      'category': req.body.category,
      'coords': [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
    }
    db.collection('location').update({ _id: ObjectId(req.body.id) }, doc, function (err, docInsert) {
      res.setHeader('Content-Type', 'application/json');
      if (err) res.send(JSON.stringify({ 'success': 'false', 'message': 'Unable to update location!' }));
      else res.send(JSON.stringify({ 'success': 'true', 'message': 'Location updated' }))
    }
    );
  });
});
module.exports = router;
