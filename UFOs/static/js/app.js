// from data.js
var tableData = data;

// Selector variables
var tbody = d3.select("tbody");
console.log(tbody);
var button = d3.select("#filter-btn");
console.log(button);
var form = d3.select("form");
console.log(form);
var inputField = d3.selectAll("input");
console.log(inputField);

//Variables
var dataLength = 0;
var filters = {};
console.log(filters);
var results = {};
console.log(results);

// Default table
tableData.forEach(table => {
    var row = tbody.append("tr");
    Object.entries(table).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
        dataLength += 1
    });
});

// Event listeners
button.on("click", Search);
form.on("submit", Search);
inputField.on("change", Search);

// Function on event
function Search(){
    d3.event.preventDefault();
    var userInputValue = d3.select(this).property("value");
    console.log(this);
    var id = d3.select(this).attr("id");
    console.log(id);
    filters[id] = userInputValue;
    console.log(filters);
    Object.entries(filters).forEach(([key, value]) => {
        results = tableData.filter(inPut => inPut[key] === value);
        console.log(results);
        Next();
        });
    d3.select("tbody").selectAll("td").data(dataLength).exit().remove();
    results.forEach(table => {
        var row = tbody.append("tr");
        Object.entries(table).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function Next(){
    Object.entries(filters).forEach(([key, value]) => {
        results = results.filter(inPut => inPut[key] === value);
        console.log(results);
})};