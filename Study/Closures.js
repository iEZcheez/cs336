// Closures
function makeGreeter(salutation) {
    return function(names) {
        for (var name of names) {
            console.log(salutation + name + "!");
        }
    }

    return function() {
        console.log('hi2');
    }
}
var friendlyGreeter = makeGreeter("Hello, ");
var unfriendlyGreeter = makeGreeter("Get lost, ");
friendlyGreeter(["world", "galaxy", "universe"]);
unfriendlyGreeter(["world", "galaxy", "universe"]);

// Encapsulation
function Shape(x, y) {
    this.x = x;
    this.y = y;
}
Shape.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
};

Shape.prototype.area = function() {
    return "hi";
};

var s1 = new Shape(0, 0);
console.log(s1);
var s2 = new Shape(1, 2);
s2.move(2, 3);
console.log(s2);

//Polymorphism
function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
//Create and override existing area function
// Circle.prototype.area = function() {
//     return Math.PI * this.radius * this.radius;
// };

var c1 = new Circle(1, 2, 1);
console.log(c1.area());