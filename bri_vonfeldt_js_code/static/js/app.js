
var tableData = data;
var tbody = d3.select("tbody");
 
// Inline Function for creating the original table
data.forEach(function ufoTable(ufoEntries) {
  // console.log(ufoTable);
  var row = tbody.append("tr");
  Object.entries(ufoEntries).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});

// Function to handle input change
var submit = d3.select("#filter-btn");
var input = d3.select('input');

submit.on('click', () => {

  tbody.text('');

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // grab the value of the input field
  var inputValue = input.property("value");

  d3.select('input').property('value', '');

  // Create a custom filtering function
  function filterByDate(date) {
    return date.datetime === (inputValue)

  };

  var filterTable = data.filter(filterByDate);
  // console.log(filterTable);
 

  // Inline Function for creating the filtered table
  filterTable.forEach(function newTable(newEntries) {
    // console.log(newTable);
    var row = tbody.append("tr");
    Object.entries(newEntries).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      var newcell = row.append("td");
      newcell.text(value);
    });
  });
});



