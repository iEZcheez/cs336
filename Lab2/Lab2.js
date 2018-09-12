// Encapsulation Person Class
class Person {
    constructor(name, birth) {
        this.name = name;
        this.birthdate = birth;
	    this.Friends = [];
    }
	//mutator add new friend
    addFriend(name) {
        Friends.push(name);
    }
	//print greeting
	greet() {
		console.log("I am ", this.name);
	}
}

var Person1 = new Person("Kevin", 05/01/1998);
console.log( Person1.greet() );



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
