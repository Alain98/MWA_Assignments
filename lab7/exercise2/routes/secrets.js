var express = require('express');
var router = express.Router();
const crypto = require('crypto');

var MongoClient = require('mongodb').MongoClient;

const dcph = crypto.createDecipher('aes256', 'asaadsaad');

/* GET users listing. */
router.get('/', function (req, res, next) {
	const db = req.db;
	MongoClient.connect('mongodb://127.0.0.1:27017/lab7', function (err, client) {
		if (err) throw err;
		const db = client.db('lab7');

		db.collection('homework7').findOne({}, { _id: 0 }, function (err, data) {

			let msgDecrypted = '';
			dcph.on('readable', () => {
				const data = dcph.read();
				if (data) {
					msgDecrypted += data.toString('utf8');
				}
			});
			dcph.on('end', () => {
				res.send(msgDecrypted);
			})
			dcph.write(data.message, 'hex');
			dcph.end();
		});
	})
});


module.exports = router;
