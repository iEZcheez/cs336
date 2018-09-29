function myFunction() {
    return new Promise(
        function (fulfill, reject) {
        var error = true;

        var res = 'hi';
        var err = 'bye';

        if (error) reject(err);
        else fulfill(res);
    });

}
myFunction()
//if fulfill() went through
    .then (
        //res is the passed down message or variable
        (res) => console.log(res),
        (err) => console.log(err)
        );