var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

router.post('/', function (req, res, next) {
  MongoClient.connect('mongodb://127.0.0.1:27017/lab8', function (error, client) {
    if (error) throw error;
    const db = client.db('lab8');

    db.collection('location').createIndex({ 'coords': '2d' });
    db.collection('location').find({
      $and: [
        { 'coords': { $near: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)] } },
        { 'name': { $regex: req.body.name, $options: 'i' } },
        { 'category': { $regex: req.body.category, $options: 'i' } }
      ]
    }).limit(3).toArray(function (err, dataArray) {
      res.setHeader('Content-Type', 'application/json');
      res.send(dataArray);
    });
  });
});

module.exports = router;
