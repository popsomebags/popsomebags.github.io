var a = true;
var numberSides = getPolygon();
while (a == true)
{
    if (validateEntry(numberSides))
    {
        var calculate = getShape(numberSides);
        alert(calculate);
        a = false;
    }
    else 
    {
        numberSides = errorMessage();
    }
}

function getPolygon()
{
    var polygonSides = parseFloat(prompt("Welcome to White Zebra Designs! Please enter a number between 0-10 and we will tell you the name of the polygon with that number of sides!"));
    return polygonSides;
}

function errorMessage()
{
    var polygonSides = parseFloat(prompt("Invalid entry. Enter a number between 0-10."));
    return polygonSides;
}

function getShape(sides)
{
    sides = Math.round(Math.abs(sides));
    if (sides == 0)
    {
        return "A shape with 0 sides does not exist.";
    }
    else if (sides == 1)
    {
        return "A shape with 1 side is a henagon.";
    }
    else if (sides == 2)
    {
        return "A shape with 2 sides is a digon.";
    }
    else if (sides == 3)
    {
        return "A shape with 3 sides is a trigon.";
    }
    else if (sides == 4)
    {
        return "A shape with 4 sides is a tetragon.";
    }
    else if (sides == 5)
    {
        return "A shape with 5 sides is a pentagon.";
    }
    else if (sides == 6)
    {
        return "A shape with 6 sides is a hexagon.";
    }
    else if (sides == 7)
    {
        return "A shape with 7 sides is a heptagon.";
    }
    else if (sides == 8)
    {
        return "A shape with 8 sides is an octagon.";
    }
    else if (sides == 9)
    {
        return "A shape with 9 sides is a enneagon.";
    }
    else if (sides == 10)
    {
        return "A shape with 10 sides is a decagon.";
    }
}

function validateEntry(sides)
{
    if (typeof sides == 'number')
    {
        if (sides >= -10 && sides <= 10)
        {
            return (sides == sides);
        }
    }
}