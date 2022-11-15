var employee = [];
var salary = [];

function addSalary()
{
    var employeeName = document.getElementById('employee').value;
    var employeeSalary = parseInt(document.getElementById('salary').value);

    if ((employeeSalary == "") || (isNaN(employeeSalary))) {
        alert("Please enter a valid salary!");
        inputSalary = "";
        document.getElementById("employee").focus();
    }else{
        if(employee.includes(employeeName)){
            var index = employee.indexOf(employeeName);
            salary[index] = employeeSalary;
        }else{
            employeeSalary = parseFloat(employeeSalary);
            employee.push(employeeName);
            salary.push(employeeSalary);
            document.getElementById("salary").value = "";
            document.getElementById("employee").focus();   
        }
    }
}

function displayResults() {
    var high = 0;
    const average = salary.reduce((a, b) => a + b) / salary.length;
    for(j = 0; j < salary.length; j++){
        if(salary[j] > high){
            high = salary[j];
        }
    }
    document.getElementById("results").innerHTML = "<h2>Results</h2>" + "<p>The average salary is $" + average + ", and the highest salary is $" + high + "." + "</p>";
}

function displaySalary() {
    var table;
    table = "<table><tr><th>Employee</th><th>Salary</th></tr>"
    for (i = 0; i < salary.length; i++){
        table += "<tr><td>" + employee[i] + "</td><td>" + salary[i] + "</td></tr>";
    }
    table += "</table>";
    document.getElementById("results_table").innerHTML = table;
}