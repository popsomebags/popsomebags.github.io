// Function that uses constant variables to display the date and time.
function displayDate(){
    let today = new Date();
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("date").innerHTML = "Today is " + today.getHours() + ":" + today.getMinutes() + " on " + weekdays[today.getDay()] +
        ", " + today.getDate() + " " + month[today.getMonth()] + ", " + today.getFullYear();
}

// Function that greets and welcomes the user.
function welcomeUser(){
    document.getElementById("response").innerHTML = "Wonderful Zebra Ltd. welcomes you, " + document.getElementById("name").value + 
        "! We're glad you are doing " + document.getElementById("feeling").value + "!";
}