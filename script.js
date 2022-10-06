var today = moment().format('dddd MMMM Do YYYY');
    $("#currentDay").text(today);

// 
function displayDate(){
    var today = moment().format('dddd MMMM Do YYYY');
    $("#currentDay").text(today);
}

setInterval(displayDate, 1000);