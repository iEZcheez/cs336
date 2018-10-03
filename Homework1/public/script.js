//index.html

//object Worker
function Worker(first, last, id, joindate){
    this.first = first;
    this.last = last;
    this.id = id;
    this.joindate = joindate;

    //calculate number of years at organization
    let today = new Date();
    let date = new Date(this.joindate);
    let years = today.getFullYear() - date.getFullYear();
    let m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        years--;
    }
    this.jobage = years;
}
//create Worker
var p1 = new Worker('Kevin', 'Tran', '12345', '01/01/1990');
var p2 = new Worker('Tony', 'Nguyen', '12346', '02/02/1980');
var p3 = new Worker('Michael', 'Nguyen', '12347', '03/03/1970');
var workers = [p1, p2, p3];

var obj = '{"firstname":"Tony", "lastname":"Nguyen", "id":"New York", "datejoined": "02/02/1980"}';
var obj2 = JSON.parse(obj);

console.log(obj2);
console.log(workers);

//JSON test


//test function
function test()
{
    // alert('Data submitted');
}
// Store
// localStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

//test.html
function displayname() {
    alert('Data submitted');
    document.getElementById("demo").innerHTML =
        document.getElementById("namehere").value;
}