//Title: Lab02
//Date: Sept. 12
//Author: Kevin Tran kdt8
//ES5

//// Encapsulation
function Person(name, birth) {
    this.name = name;
    this.birth = birth;
    this.Friends = [];
}

//CLASS PERSON - ACCESSOR Calculate Age
Person.prototype.calcAge = function() {
    var today = new Date();
    var birthDate = new Date(this.birth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

//CLASS PERSON - MUTATOR Add a friend to Friend list
Person.prototype.addFriend = function(name) {
    this.Friends.push(name);
};

//CLASS PERSON - Display Friends
Person.prototype.showFriends = function() {
    return this.Friends;
};

//CLASS PERSON - Print Greeting
Person.prototype.greeting = function() {
    return "My name is " + this.name;
};

////Inheritance and Polymorphism

// Inheritance
function Student(name, birth, major) {
    Person.call(this, name, birth);
    this.major = major;
}

// Student Inherits Class Person
Student.prototype = Object.create(Person.prototype);

//TESTING PERSON
console.log("Testing PERSON")
var p1 = new Person("Kevin", "05/01/1998");
console.log( p1.showFriends() );
p1.addFriend("Tony");
console.log( p1.showFriends() );
console.log( p1.calcAge() );
console.log( p1.greeting() );

//TESTING STUDENT
console.log("----------\nTesting STUDENT");
var s1 = new Student("Tony", "04/23/1998", "Computer Science");
console.log( s1.showFriends() );
s1.addFriend("Kevin");
console.log( s1.showFriends() );
console.log( s1.calcAge() );
console.log( s1.greeting() );