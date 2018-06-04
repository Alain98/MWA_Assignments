var Grade = require('../model/Grade');

class GradeDao{
	
	static getGrades(){
		return GradeDao.grades;
	}
	
	static addGrade(grade){
		GradeDao.grades.push(new Grade(grade.name, grade.course, grade.grade));
	}
	
	static getGrade(id){
		for(let ids in GradeDao.grades){
			if(id == GradeDao.grades[ids].id){
				return GradeDao.grades[ids];
			}
		}
	}

}

GradeDao.grades=[
	new Grade('Alain', 'web Application Programming','90'),
	new Grade('Alain', 'Modern web Application','98'),
	new Grade('Alain', 'web Application Architecture','93')
];
module.exports = GradeDao;