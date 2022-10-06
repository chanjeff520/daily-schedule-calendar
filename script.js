



//To display time on the jumbotron 
function timeElements(){
    var today = moment().format('dddd MMMM Do YYYY');
    $("#currentDay").text(today);
    changeColorBlock();
}

function changeColorBlock(){
    var milHours = moment().format('HH');
    var hour = parseInt(milHours)- 9;
    console.log(milHours, hour);
    //for pass color
    //0<=hour<15     0 is 9am  and  15 is 12am
    if(hour >= 0 && hour < 15)
    for(var i = 0; i<hour; i++){
        console.log("pass");
        if(i<9){
            $(".container").children().eq(i).children().eq(1).addClass('past');
        }
    }

    //for current color
    //0<=hour<9      9 is 5pm
    if(hour >= 0 && hour < 9){
        console.log("present");
        $(".container").children().eq(hour).children().eq(1).addClass('present');
    }

    //for future color
    //hour<9
    if(hour < 0){
        console.log("future1");
        for(var i =0; i< 9; i++){
            $(".container").children().eq(i).children().eq(1).addClass('future');
        }
    }else if(hour < 9){
        console.log("future1");
        for(var i = hour + 1; i < 9 ; i++){
            $(".container").children().eq(i).children().eq(1).addClass('future');
        }
    }
}

setInterval(timeElements, 1000);