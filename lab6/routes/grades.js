var express = require('express');
var router = express.Router();
const GradeDao = require('../dao/gradeDAO');


// GET all grades
router.get('/', function(req, res, next) {
	res.end(JSON.stringify(GradeDao.getGrades()));
});

// Add a new grade 
router.post('/', function(req, res, next) {
  req.assert('name', 'name is required').notEmpty();
  req.assert('course', 'course is required').notEmpty();
  req.assert('grade', 'grade is required').notEmpty();

  // check for errors!
  var errors = req.validationErrors();
  if (errors) {
      res.end(JSON.stringify(errors,null,'\t'));
  }
  GradeDao.addGrade(req.body);
  res.end('Record add !');
});

// GET a specific grade 
router.get('/:id', function(req, res, next) {
    res.end(JSON.stringify(GradeDao.getGrade(req.params.id)));
});


module.exports = router;
