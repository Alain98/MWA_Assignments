var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.post('/', function (req, res, next) {
  MongoClient.connect('mongodb://127.0.0.1:27017/lab8', function (err, client) {
    if (err) throw err;
    const db = client.db('lab8');
    const doc = { _id: ObjectId(req.body.id) };
    db.collection('location').remove(doc, function (err, removed) {
      res.setHeader('Content-Type', 'application/json');
      if (err) res.send(JSON.stringify({ 'success': 'false', 'message': 'Unable to delete location!' }));
      else res.send(JSON.stringify({ 'success': 'true', 'message': 'Location deleted successfully!' }));
    });
  });
});


module.exports = router;