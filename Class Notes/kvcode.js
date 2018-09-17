////using APPLY
function Shape(x, y) {
    this.x = x;
    this.y = y;
}
Shape.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
};
var s1 = new Shape(0, 0);
let m1 = s1.move;
m1(2,3);
m1.apply(s1, [3, 4]);
console.log(s1);


//console.log(s1);
var s2 = new Shape(1, 2);
s2.move(2, 3);
//console.log(s2);

////using LET
let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x);
    // expected output: 2
}

console.log(x);
// expected output: 1

////Promises
let fs = require("fs");
let filename = "test.json";

function readFilePromise(filename){
    return new Promise(function (fulfill, reject){
        fs.readFile(filename, "utf8", function (err, res){
            if (err) reject(err);
            else fulfill(res);
        });
    });
}

//read a file using Promise's mechanism
//.then makes a request and hooks (res) and (err)
//a promise allows you to not block the UI thread
readFilePromise(filename).then(
    (res) => console.log("Message: " + JSON.parse(res).message),
    (err) => console.log(err.toString())
);
