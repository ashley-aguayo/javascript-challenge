// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!
//creat reference for table body
var tbody = d3.select("tbody");
//console.log(tbody);

//loop through data
data.forEach(function(alienData) {
    console.log(alienData);   
});

//use D3 to append the data in the table
data.forEach(function(alienData) {
    console.log(alienData);
    var row = tbody.append("tr");

    Object.entries(alienData).forEach(function([key, value]) {
    console.log(key, value);
        //Append a cell to the row
        var cell = tbody.append("td");
        cell.text(value);
    });
});

//select buttons and form
var button = d3.select("#filter-btn");
var form = d3.select("form");

//create event handlers
button.on("click", runEnter);
//form.on("submit",runEnter);

//complete the event handler function form
function runEnter() {
    d3.event.preventDefault();
    tbody.html("");

//create var for the input elements and values

var inputElement = d3.select(".form-control");
var inputValue = inputElement.property("value");
//CREATE A FILTER TO FIND RESULTS BY INPUT DATE

var results = tableData.filter(tableData => tableData.datetime === inputValue);

//provide the results of and append the Table based on input date
results.forEach(function(dateResults) { 
    var row = tbody.append("tr");
    console.log(results);
    Object.entries(dateResults).forEach(function([key, value]){
    console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});
}
