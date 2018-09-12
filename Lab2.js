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

//From example
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
console.log('age: ' + getAge("1980/08/10"));
