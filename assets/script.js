
var saveSchedule = ["","","","","","","","",""];

//renders the saved data to the textarea
function renderSchedule(){
    //get same data from the localstorage
    saveSchedule = JSON.parse(localStorage.getItem('schedule'));
    //check if the theres a local storage of schedule
    if(saveSchedule == null){
        saveSchedule=["","","","","","","","",""];
    }
    //render all 
    for(var i = 0; i<saveSchedule.length; i++){
        $(".container").children().eq(i).children().eq(1).val(saveSchedule[i])
    }

}

//save all changed textarea
function savingSchedule(){
    for(var i=0; i<saveSchedule.length; i++){
        saveSchedule[i] = $(".container").children().eq(i).children().eq(1).val();
    }
    localStorage.setItem("schedule", JSON.stringify(saveSchedule));
}



//To display time on the jumbotron 
function timeElements(){
    var today = moment().format('dddd MMMM Do YYYY');
    $("#currentDay").text(today);
    changeColorBlock();
}

//change colors of the text-area depending on the time.
function changeColorBlock(){
    var milHours = moment().format('HH');
    var hour = parseInt(milHours)- 9;
    
    //for pass color
    //0<=hour<15     0 is 9am  and  15 is 12am
    if(hour >= 0 && hour < 15)
    for(var i = 0; i<hour; i++){
        if(i<9){
            $(".container").children().eq(i).children().eq(1).addClass('past');
        }
    }

    //for current color
    //0<=hour<9      9 is 5pm
    if(hour >= 0 && hour < 9){
        $(".container").children().eq(hour).children().eq(1).addClass('present');
    }

    //for future color
    //hour<9
    if(hour < 0){
        for(var i =0; i< 9; i++){
            $(".container").children().eq(i).children().eq(1).addClass('future');
        }
    }else if(hour < 9){
        for(var i = hour + 1; i < 13 ; i++){
            $(".container").children().eq(i).children().eq(1).addClass('future');
        }
    }
}

renderSchedule();
setInterval(timeElements, 1000);
$(".saveBtn").on("click", savingSchedule);