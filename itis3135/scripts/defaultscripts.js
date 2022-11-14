// Function that uses constant variables to display the date and time.
function getTodaysDate(){
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

// PromptUser function
function promptUser(){
    let name = prompt("Please enter your name");
}

function generateColor(){
    var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
    var color = colors[Math.floor(Math.random()*colors.length)];
    document.getElementById("color").innerHTML = "Your color is: " + color;
}

function generateMood(){
    var moods = ["Happy", "Sad", "Anxious", "Romantic", "Angry", "Bored", "Tired"];
    var mood = moods[Math.floor(Math.random()*moods.length)];
    document.getElementById("mood").innerHTML = "Your mood is: " + mood;
}

function generateShape(){
    var shapes = ["Triangle", "Rectangle", "Square", "Circle", "Pentagon", "Hexagon", "Trapazoid"];
    var shape = shapes[Math.floor(Math.random()*shapes.length)];
    document.getElementById("shape").innerHTML = "Your shape is: " + shape;
}

function generateAction(){
    var actions = ["Jump", "Punch", "Kick", "Toss", "Shout", "Move", "Swing"];
    var action = actions[Math.floor(Math.random()*actions.length)];
    document.getElementById("action").innerHTML = "Your action is: " + action;
}

function generateFood(){
    var foods = ["Steak", "Mac And Cheese", "Spaghetti", "French Fries", "Sushi", "Ramen", "Burrito"];
    var food = foods[Math.floor(Math.random()*foods.length)];
    document.getElementById("food").innerHTML = "Your food is: " + food;
}