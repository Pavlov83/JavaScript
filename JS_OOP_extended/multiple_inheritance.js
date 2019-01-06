function Person(name,surname){
	this.name = name;
	this.surname = surname;
}

function Developer(name,surname,knownLanguage){
	Person.apply(this,arguments);
}

function Student(name,surname,subjectOfStudy){

	Person.apply(this.arguments){
	this.subjectOfStudy = subjectOfStudy;

}

//We can create combined objects

function devStudent(name,surname,subjectOfStudy,knownLanguage){
	Developer.call(name,surname,knownLanguage);
	Student.call(this, name, surname,subjectOfStudy);
}

var johnSmith = new DevStudent("John","Smith","C++","Javascript");

johnSmith.knownLanguage;