var today = moment();
var weekday =  today.format("dddd");
console.log(today.format("MMM Do, YYYY"));
console.log(weekday)

$("#currentDay").append(today.format("MMM Do, YYYY"));
$("#currentDay").append("<br>");
$("#currentDay").append(weekday);