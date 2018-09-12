// Encapsulation Person Class
class Person {
<<<<<<< HEAD:Lab2/Lab2.js
	
	var Friends = [];
	
    constructor(name, birth) {
        this.name = name;
        this.birthdate = birth;
=======
    constructor(name, birth) {
        this.name = name;
        this.birthdate = birth;
	    this.Friends = [];
>>>>>>> 14ad13931f562058ddf031c2b00e76bf40ce6b4e:Lab2.js
    }
	//mutator add new friend
    addFriend(name) {
        Friends.push(name);
    }
	//print greeting
	greet() {
<<<<<<< HEAD:Lab2/Lab2.js
		console.log("I am ", name);
	}
}

=======
		console.log("I am ", this.name);
	}
}

var Person1 = new Person("Kevin", 05/01/1998);
console.log( Person1.greet() );



>>>>>>> 14ad13931f562058ddf031c2b00e76bf40ce6b4e:Lab2.js
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
<<<<<<< HEAD:Lab2/Lab2.js
=======

>>>>>>> 14ad13931f562058ddf031c2b00e76bf40ce6b4e:Lab2.js
console.log('age: ' + getAge("1980/08/10"));
