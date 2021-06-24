// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!
//creat reference for table body
var tbody = d3.select("tbody");
console.log(tbody);
//var inputDate = d3.select(#datetime);
//var inputCity = d3.select(#city);

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
var button1 = d3.select("#filter-btn");
var inputField = d3.select('#input-field');
var form = d3.select("form");

//create event handlers
button1.on("click", runEnter);
form.on("click",runEnter);

//complete the event handler function form
function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");
    var results = tableData.filter(data => data.datetime);
};
