let today = new Date();
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function displayDate(){
    document.getElementById("display_date").innerHTML = "Today is " + today.getHours() + ":" + today.getMinutes() + " on " + weekdays[today.getDay()] +
        ", " + today.getDate() + " " + month[today.getMonth()] + ", " + today.getFullYear();
}

function myFunction() {
    alert("Page is loaded");
}