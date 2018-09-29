//Question 3
for (let n of['one', 'two']){
    console.log(n);
}
// console.log(n);

//Question 4
//I wrote: 1 and 0
function makeFunc(x) {
    f = (y) => {
        console.log(x - y);
        };
        x = 5;
        return f;
    }
var myFunc = makeFunc(2);
myFunc(1);
myFunc(2);

//Question 5
//I wrote begin, testing, finis
var fs = require("fs");
console.log("begin");
var data = fs.readFile("data.txt", (err, data) => {
    if (err) return console.log(err);
    console.log(data.toString().trim());
});
console.log("finis");

//Question 6
//JavaScript is a kluge language because it:
//http://crockford.com/javascript/javascript.html
//The name
//Typecasting
//Moving target
//Design errors

