//1. waiting or pending 2. success 3. fail

// 11. ----------------------------------
// Promises
let fs = require("fs");
let filename = "test.json";

function readFilePromise(filename){
    //fulfill or reject (happy or unhappy)
    return new Promise( function (fulfill, reject){
        fs.readFile(filename, "utf8", function (err, res){

            //if error, reject
            if (err) reject(err);

            //fulfill (happy)
            else fulfill(res);
        });
    });
}

readFilePromise(filename).then(
    (res) => console.log("Message: " + JSON.parse(res).message),
    (err) => console.log(err.toString())
);