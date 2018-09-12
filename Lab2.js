// Encapsulation Person Class
class Person {
	
	var Friends = [];
	
    constructor(name, birth) {
        this.name = name;
        this.birthdate = birth;
    }
	//mutator add new friend
    addFriend(name) {
        Friends.push(name);
    }
	//print greeting
	greet() {
		console.log("I am ", name);
	}
}

// Inheritance + Polymorphism
class Student extends Person {
    constructor(name, birth) {
        super(name, birth);
        this.study = study;
    }
    greet() {
        console.log("I am a student named ", name);
    }
}
