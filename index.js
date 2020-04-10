// objects

// Cup

// height, radius, shape, color, purpose-["How to pour stuff in a cup", "how to pour from a cup", // "How to hold it"]

// var Cup = {
// 	height: 20,
// 	radius: 40,
// 	shape: "circular",
// 	color: "red",
// 	volumeOccupied: 0,
// 	pourStuff: function(vol) {
// 		this.volumeOccupied = this.volumeOccupied - vol;
// 	},
// 	putStuff: function(vol) {
// 		this.volumeOccupied = this.volumeOccupied + vol;
// 	},
// };

// let Cup_2 = function(height, radius, shape, color) {
// 	this.height = height;
// 	this.radius = radius;
// 	this.shape = shape;
// 	this.color = color;
// 	this.volumeOccupied = 0;
// 	this.pourStuff = function(vol) {
// 		this.volumeOccupied = this.volumeOccupied - vol;
// 	};
// 	this.putStuff = function(vol) {
// 		this.volumeOccupied = this.volumeOccupied + vol;
// 	};
// 	this.getVolumeOccupied = function() {
// 		return this.volumeOccupied;
// 	};
// };

// let newCup = new Cup_2(10, 30, "oval", "pink");
// let newCup2 = new Cup_2(100, 3, "ovalular", "pinkish");
// newCup2.pourStuff(25);
// newCup.pourStuff(23);

// newCup.getVolumeOccupied();
// newCup2.getVolumeOccupied();


// Traditional functions have this binding, so they can catch the reference calling them, whereas arrow functions dont have this binding so instead of catching reference which calls it, it looks in nearest scope.
// function() {

// }

// () => {

// };

let name = function(nm) {
	this.nm = nm;
	this.getName = getName;
}
var getName = function() {
	return this.nm;
}
let nme = new name("Nik");

let name2 = function(nm) {
	this.nm = nm;
	this.getName = getName2;
}
var getName2 = () => {
	return this.nm;
}
let nme2 = new name2("Nik");

console.log(`Trad`, nme.getName())
console.log(`Arrow`, nme2.getName())

// "Name: "+ this.name

// let student = function(name, age, cohort) {
	
// 	this.name = name;
// 	this.age = age
// 	this.cohort = cohort;
// 	this.getStudent = function() {
// 		return `Name: ${this.name}, age: ${this.age} and cohort: ${this.cohort}`
// 	}
// 	this.getName = function() {
// 		return this.name;
// 	}
// }

// var student_1 = new student("cooper", "22", "pegs");
// student_1.name
