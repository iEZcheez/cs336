//Sept 14


// Looseness: optional
// Strict mode/Promises

"use strict";
var test;
test = 42;
test = "forty-two";
test = true;
console.log(test);

// Closures: how is it a closure? Iti s be cause it is bundles everything up along with it's function and within it
// it should be "bundling" only every global variable it needs
// for the var salutation, it is bundled in the function itself

//names is a list of names in another function that was written in VanderLinden's code
function makeGreeter (salutation) {
    return function(names) {
        for (var name of names) {
            console.log(salutation + name + "!");
        }
    }
}

//Exam question
// Strange closure example ("answer: you would never write an answer like this")


//How is let compared to var?
//let creates a local variable in a closure along the iterations, while var creates a new global var each iteration
//let m1 = s1.move;
//let is used only within brackets

//9-17

//TEST 1
//SPA vs Normal A
//Single Page Application
//HTML, CSS, JavaScript
//Single Page
//JavaScript modifies the HTML and CSS to make the application interactive (the DOM "Document Object Model")
//"JavaScript can manipulate the URL"

//Normal Application
//Installed into the device
//Permanent storage

//What would a JavaScript Promise be used for?
//Non-blocking UI
//Set up the operation in the server and the Promise

//NPM vs. Node
//NPM (package manager)
//Node (where the packages are managed)

//What are some web development stacks?
// - lamp/LAMP (Linux, Apache, MySQL, PHP)
// - mern/MERN (MongoDB, Express, React, Node)
// - mean/MEAN (MongoDB, Express, Angular, Node)
// - Flask
//Prof prefers Mongo

//What is the value of choosing Node.js?
//"Philosophy of Node"
//

//Server delivers to the browser (client)
//