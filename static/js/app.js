// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("#target")

console.log(tableData)

data.forEach(function(ufoReport) {
    console.log(ufoReport)
});

data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
});

data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
    });
});

data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
  });
});

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Assign the data from `data.js` to a descriptive variable
// var people = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");



// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(data => tableData.Date === inputValue);

  console.log(filteredData);

}
