var course = new Object();

var course = {
	title: "JavaScript Essential Training",
	instructor: "My teacher",
	level:1,
	published: true,
	views: 0,
	updateViews: function(){
		return ++course.views;
	}
}
console.log(course);

var currentDate = new Date();

var course02 = new Course();

// Best way to do it is this:

function Course(title,instructor,level,published,views){

	this.title = title;
	this.instructor = instructor;
	this.level = level;
	this.published = published;
	this.views = views;
	this.updateViews = function(){
		return ++this.updateViews;
	};

} 

var course01 = new Course("My javascript course","Me",1,true,0);

console.log(course01);
