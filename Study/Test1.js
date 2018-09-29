var Shape = function (x, y) {
    this.x = x;
    this.y = y;
}

Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}

// Inheritance
function Rectangle(x, y, width, height) {
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.area = function() {
    return this.width * this.height;
};
var r1 = new Rectangle(1, 2, 1, 1);
console.log(r1);
console.log(r1.area());
r1.move(2, 3);
console.log(r1);

function greetMe(names) {
    for (let name of names) {
        console.log("Hello, " + name + "!");
    }
}
let greetMe2 = function(names) {
    for (let name of names) {
        console.log("Hello, " + name + "!");
    }
}
greetMe2.apply(null, [["world", "galaxy", "universe"]]);
greetMe2.call(null, ["world", "galaxy", "universe"]);