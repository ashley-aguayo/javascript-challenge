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
});
//Use Object entries 
Object.entries(alienData).forEach(function([key, value]) {
    console.log(key, value);
});
