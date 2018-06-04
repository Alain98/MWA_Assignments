class Grade{
	constructor (name, course, grade){
		this.id = ++Grade.generateID;
		this.name = name;
		this.course = course;
		this.grade = grade;
	}
}
Grade.generateID=0;
module.exports=Grade;