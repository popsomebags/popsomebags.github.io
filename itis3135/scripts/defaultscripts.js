var name;
var feeling;

function questions() {
    setName(prompt("Please enter your name", "William"))
    setFeeling(prompt("How are you feeling?", "ok"))

    document.getElementById('date').innerHTML = 'Today is ' + getTime() + ' on ' + getDate();
    document.getElementById('welcome').innerHTML = 'White Zebra Designs welcomes you, ' + getName() + '!\n' + 
        "We're glad you are doing " + getFeeling() + '!'; 
}

function setName(name){ 
    this.name = name;
}

function setFeeling(feeling) {
    this.feeling = feeling;
}

function getName() {
    return name;
}

function getFeeling() {
    return feeling;
}

function multiply() {
    var firstnumber = Number(prompt("Enter first number"));
    var secondnumber = Number(prompt("Enter first number"));
    document.getElementById("multiply").innerHTML = ("Your result is: " + (firstnumber * secondnumber));
}

function add() {
    var firstnumber = Number(prompt("Enter first number"));
    var secondnumber = Number(prompt("Enter first number"));
    document.getElementById("add").innerHTML = ("Your result is: " + (firstnumber + secondnumber));
}

function divide() {
    var firstnumber = Number(prompt("Enter first number"));
    var secondnumber = Number(prompt("Enter first number"));
    document.getElementById("divide").innerHTML = ("Your result is: " + (firstnumber / secondnumber));
}

function subtract() {
    var firstnumber = Number(prompt("Enter first number"));
    var secondnumber = Number(prompt("Enter first number"));
    document.getElementById("subtract").innerHTML = ("Your result is: " + (firstnumber - secondnumber));
}

function feetToInches() {
    var feet = Number(prompt("Enter length in feet"));
    document.getElementById("inches").innerHTML = ("Your result is: " + (feet * 12) + " inches");
}

function getDate() {
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ', 2022';
}

function getTime() {
    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + mins + ' ' + ampm;
}