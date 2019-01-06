//members that cannot be publicly accessed are (Private Memebers)


//mebers that do not use
// private members and that can be publicly accesed are(Public Members)


//Memebers tht use private members and can be publicly accesed are
//called (Privileged members)



//Private member must be implemented as:
//Local variable/function of the constructor


//Public member must be implemented as A member of (this) keyword
//or a member of the constructor"s prototype

//A privileged member must be implemented as:
//a member of the this keyword inside the constructor

function TheatreSeats(){
	var seats = [];
	this.placePerson = function(person){
		seats.push(person);
	};
	this.countOccupiedSeats = function(){
		return seats.length;
	};
	this.maxSize = 10;	
}

TheatreSeats.prototype.isSoldOut = function(){
	return this.countOccupiedSeats() >= this.maxSize;
};

TheatreSeats.prototype.countFreeSeats = function(){
	return this.maxSize - this.countOccupiedSeats();
}