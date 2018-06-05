var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const dcph = crypto.createDecipher('aes256', 'asaadsaad');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const db=req.db;
  db.homework7.findOne({}, {_id: 0}, function(err, data){

    const msgDecrypted = '';
    dcph.on('readable',()=>{
       const data = dcph.read();
       if(data){
         msgDecrypted += data.toString('utf8');
       }
    });
    dcph.on('end', ()=>{
      res.send(msgDecrypted);
    })
    dcph.write(data.message, 'hex');
    dcph.end();
  });
});

module.exports = router;
