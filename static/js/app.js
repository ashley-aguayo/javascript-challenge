// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!
//creat reference for table body
var tbody = d3.select("tbody");
console.log(tbody);

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
        var cell = row.append("td");
    });
});

//select buttons and form
var button1 = d3.select("#filter-btn");
var form = d3.select("form");

//create event handlers
button1.on("click", runEnter);
form.on("click",runEnter);

