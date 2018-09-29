var a = 100;


function test(){
    let a = 2;
    return a * a;
}

//let a = 2;

function test2(){
    var a = 200;
    return a * a;
}
console.log(test());
console.log(test2());

//Closures
function makeGreeter(c) {
    console.log(c);
    return function(a, b) {
        console.log(a + b + c);
    }
}
var friendlyGreeter = makeGreeter(10);
friendlyGreeter(1,2);

//Inheritence
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 0; i < 10; i++){
    if (i = 9) {
        console.log(i);
    }

    function buildListOfFunctions(list) {
        var result = [];
        for (let  i = 0; i < list.length; i++) {
            result.push( function() {console.log("function " + i)} );
        }
        return result;
    }
    for (var f of buildListOfFunctions([-1,0,1,2,3])) {
        f();
    }

}

// 8. ----------------------------------
// Encapsulation
function Shape(a, b) {
    this.a = a;
    this.b = b;
}
Shape.prototype.move = function(newX, newY) {
    this.a = newX;
    this.b = newY;
};
//
// var s1 = new Shape(0, 0);
// console.log(s1);
// var s2 = new Shape(1, 2);
// s2.move(2, 3);
// console.log(s2);

// 9. ----------------------------------
// Inheritance
function Rectangle(x, y, width, height) {
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;
}

// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.area = function() {
//     return this.width * this.height;
// };

var r1 = new Rectangle(1, 2, 1, 1);
console.log(r1);
console.log(r1.area());
r1.move(2, 3);
console.log(r1);

var function1 = function() {
    console.log('hi');
}

function1();