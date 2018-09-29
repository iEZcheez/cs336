//1. waiting or pending 2. success 3. fail

// 11. ----------------------------------
// Promises
let fs = require("fs");
let filename = "test.json";

function readFilePromise(){
    //fulfill or reject (happy or unhappy)

    //Promise variable contains a function
    return new Promise( function (fulfill, reject){
        //fs.readFile(filename, "utf8", function (err, res){
        var err;
        var res;
        if (1 == 1){
            var error = "error";
        }
            //if error, reject
            if (error == "error") reject('BYE');

            //fulfill (happy)
            else fulfill('HI');
        });
}

readFilePromise()
    .then(
        (res) => {console.log("Message: " + res);}
        )
    .catch(
        (res) => {console.log("Darn " + res);}
        );