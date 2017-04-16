$(document).ready(function() {
    changeGamestate("waiting");
});

function gridBlock(x,y,wall,isMine){
    this.xCoord = x;
    this.yCoord = y;
    this.wall = wall;
    this.isMine = isMine;
}
function pacMan(x,y,id,speed,direction,blockade){
    this.xCoord = x;
    this.yCoord = y;
    this.prevX = 0;
    this.prevY = 0;
    this.id = id;
    this.speed = speed;
    this.direction = direction;
    this.blockade = blockade;
    this.points = 0;
    this.xSkip = 0;
    this.ySkip = 0;
    this.interval;
}

function powerUp(){
    this.xCoord;
    this.yCoord;
    this.type;
    this.eaten = true;
}


var gridWidth = 25;
var gridHeight = 17;

var passable = [[],[]];
var pacArray = [];
var powerUpInstantiation = new powerUp();
powerUp();
var gridArray = [];
/*var map = [["orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","orb","wall","wall"],
        ["orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","orb","wall","wall"],
        ["orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","orb","wall","wall"],
        ["orb","orb","orb","wall","wall","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","orb","orb","orb","orb","orb","orb","orb"],
        ["wall","wall","orb","wall","wall","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall"],
        ["wall","wall","orb","wall","wall","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall"],
        ["wall","wall","orb","wall","wall","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall"],
        ["wall","orb","orb","orb","orb","orb","orb","orb","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall"],
        ["wall","#f31327","#f31327","wall","wall","wall","orb","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall"],
        ["wall","#f31327","wall","wall","wall","wall","orb","wall","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall"],
        ["wall","wall","wall","wall","wall","wall","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall"],
        ["wall","orb","orb","orb","wall","wall","wall","wall","wall","wall","wall","wall","orb","orb","orb","orb","orb","wall","wall","wall"],
        ["wall","orb","orb","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","orb","orb","orb","wall","wall","wall"],
        ["wall","orb","orb","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","orb","wall","orb","wall","wall"],
        ["wall","orb","orb","orb","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","orb","wall","wall"],
        ["wall","wall","wall","wall","wall","wall","wall ","wall","wall","wall","wall","wall","wall","wall","wall","wall","wall","orb","wall","wall"]];
*/
var map = finalBlocks;


var c=document.getElementById("gamecanvas");

var ctx=c.getContext("2d");

var screenHeight = c.height;
var screenWidth = c.width;

var boxHeight = screenHeight/gridHeight;
var boxWidth = screenWidth/gridWidth;




for (var i = 0; i < gridWidth; i++){
    gridArray[i] = new Array();
    for (var j = 0; j < gridHeight; j++){
        gridArray[i][j] = new gridBlock(i,j,map[j][i],"false","false");
    }
}
// ctx.fillRect(0,0,50,50);
drawGrid();
//draw grid
function drawGrid(){
    for(var i = 0; i <gridWidth; i++){
        for(var j = 0; j <gridHeight; j++){
                ctx.beginPath();
                ctx.strokeStyle="#000000";
                
                ctx.rect(
                    (gridArray[i][j].xCoord * boxWidth),
                    (gridArray[i][j].yCoord * boxHeight),
                    boxWidth,
                    boxHeight
                    );
                ctx.stroke();
                if(gridArray[i][j].wall == "wall"){
                    ctx.fillStyle = "black";
                }
                else if(gridArray[i][j].wall == "empty" ||gridArray[i][j].wall == "orb" ){
                    ctx.fillStyle = "white";
                }
                else{
                    ctx.fillStyle = gridArray[i][j].wall;
                }
                ctx.fill();
                if(powerUpInstantiation.eaten == false){
                    var x = powerUpInstantiation.xCoord * boxWidth + boxWidth/2 - 10;
                    var y = powerUpInstantiation.yCoord * boxHeight + boxHeight/2 - 10;
                    
                    ctx.beginPath();
                    ctx.rect(x, y, 20, 20);
                    ctx.stroke();
                    ctx.fillStyle = "darkgoldenrod";
                    ctx.fill();
                    ctx.fillStyle = "black";
                    
                    
                }
                
        }
    }
}

function moveUp(gridArray){
    pacArray[0].xCoord = 5;
    pacArray[0].yCoord = 7;
    pacArray[1].xCoord = 4;
    pacArray[1].yCoord = 7;
    
    var interval = setInterval(function(){
        movePac(pacArray,0,1,gridArray);
    }, 1000);
    var interval = setInterval(function(){
        movePac(pacArray,1,3,gridArray);
    }, 1000);
}

function drawTile(id){
    
    var x = pacArray[id].xCoord;
    var y = pacArray[id].yCoord;
    console.log("asdf id " + id);
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    ctx.rect(
        (gridArray[x][y].xCoord * boxWidth),
        (gridArray[x][y].yCoord * boxHeight),
        (boxWidth - 1),
        (boxHeight - 1)
        );
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    
    var x = pacArray[id].prevX;
    var y = pacArray[id].prevY;
    ctx.beginPath();
    ctx.rect(
        (gridArray[x][y].xCoord * boxWidth),
        (gridArray[x][y].yCoord * boxHeight),
        (boxWidth - 1),
        (boxHeight - 1)
        );
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    // if(powerUpInstantiation.eaten == false){
    //     var x = powerUpInstantiation.xCoord * boxWidth + boxWidth/2 - 10;
    //     var y = powerUpInstantiation.yCoord * boxHeight + boxHeight/2 - 10;
        
    //     ctx.beginPath();
    //     ctx.rect(x, y, 20, 20);
    //     ctx.stroke();
    //     ctx.fillStyle = "darkgoldenrod";
    //     ctx.fill();
    //     ctx.fillStyle = "black";
        
        
    // }
}

//pacman controller
for(var i = 0; i < 4; i++){
    pacArray[i] = new pacMan(0,0,i,1,0,"false");
}

function validateMove(id, pendingDirection,gridArray){
    //0 is up, 1 is right, 2 is down, 3 is left - direction
    var x = pacArray[id].xCoord;
    var y = pacArray[id].yCoord;
    var color;
    
    if(id == 0){
        color = "#f31327";
    }
    else if(id == 1){
        color = "#ffadc7";
    }
    else if(id == 2){
        color = "#24e0c0";
    }
    else if(id == 3){
        color = "#fd9a34";
    }
    if(pendingDirection == 0){
        y -= 1;
    }
    else if(pendingDirection == 1){
        x += 1;
    }
    else if(pendingDirection == 2){
        y += 1;
    }
    else{
        x-= 1;
    }
    
    if(x < 0){
        x = 23;
        pacArray[id].xCoord = 23;
    }
    if(y < 0){
        y = 15;
        pacArray[id].yCoord = 15;
    }
    if(x > 23){
        x = 0;
        pacArray[id].xCoord = 0;
    }
    if(y > 15){
        y = 0;
        pacArray[id].yCoord = 0;
    }
    
 
    
    if(gridArray[x][y].wall == "wall" ||gridArray[x][y].wall != color && (gridArray[x][y].wall != "orb" && gridArray[x][y].wall != "empty")){
        
        return "false";
    }
    else{
        if(gridArray[x][y].wall == "orb" ){
            pacArray[id].points ++;
            gridArray[x][y].wall = "empty";
        }
        if(powerUpInstantiation.xCoord == x && powerUpInstantiation.yCoord == y){
            
            powerUpInstantiation.eaten = true;
            giveBlockade(id);
            setTimeout(function(){
                newPowerup();
            },10000);
            
        }
    return "true";
        
    }
    
    
    
}

function drawPac(pacArray,id){
    

    var passPrevX = pacArray[id].prevX;
    var passPrevY = pacArray[id].prevY;
    if(id == 0){
        console.log("------ " + pacArray[id].prevY);
    }
    var j = 0;
        pacArray[id].interval = setInterval(function(){
            
            
                
            pacArray[id].prevX = passPrevX;
            pacArray[id].prevY = passPrevY;
            
             if(id == 0){
                console.log("+++++" + pacArray[id].prevY);
            }
            
                if( pacArray[id].prevX - pacArray[id].xCoord > 10){
                    pacArray[id].xSkip = 1;
                    pacArray[id].xCoord = 24;
                }
                if(pacArray[id].prevX - pacArray[id].xCoord < -10){
                    pacArray[id].xSkip = -1;
                    pacArray[id].xCoord = -1;
                }
                if( pacArray[id].prevY - pacArray[id].yCoord > 10){
                    pacArray[id].ySkip = 1;0
                    pacArray[id].yCoord = 15;
                }
                if(pacArray[id].prevY - pacArray[id].yCoord < -10){
                    pacArray[id].ySkip = -1;
                    pacArray[id].yCoord = -1;
                    console.log("As");
                }
                var color;
                if(id == 0){
                    color = "#f31327"; //
                }
                else if(id == 1){
                    color = "#ffadc7";
                }
                else if(id == 2){
                    color = "#24e0c0";
                }
                else if(id == 3){
                    color = "#fd9a34";
                }
                console.log(id);
               
                
                drawTile(id);
                ctx.beginPath();
                var x = ((pacArray[id].prevX + ((pacArray[id].prevX - pacArray[id].xCoord) * j/-20)) * boxWidth) + (boxWidth/2);
                var y = ((pacArray[id].prevY + ((pacArray[id].prevY - pacArray[id].yCoord) * j/-20)) * boxHeight) + (boxHeight/2);
                if(pacArray[id].xSkip == -1){
                    if(j > 10){
                        pacArray[id].prevX = 24;
                        pacArray[id].xCoord = 23;
                    }
                    else{
                        var x = ((pacArray[id].prevX + ((pacArray[id].prevX - pacArray[id].xCoord) * j/-20)) * boxWidth) + (boxWidth/2);
                    }
                }
                else if(pacArray[id].xSkip == 1){
                    if(j > 10){
                        pacArray[id].prevX = -1;
                        pacArray[id].xCoord = 0;
                    }
                    else{
                        var x = ((pacArray[id].prevX + ((pacArray[id].prevX - pacArray[id].xCoord) * j/-20)) * boxWidth) + (boxWidth/2);
                    }
                }
                else {
                    var x = ((pacArray[id].prevX + ((pacArray[id].prevX - pacArray[id].xCoord) * j/-20)) * boxWidth) + (boxWidth/2);
                }
                if(pacArray[id].ySkip == -1){
                    if(j > 10){
                        pacArray[id].prevY = 16;
                        pacArray[id].yCoord = 15;
                    }
                    else{
                        var y = ((pacArray[id].prevY + ((pacArray[id].prevY - pacArray[id].yCoord) * j/-20)) * boxHeight) + (boxHeight/2);
                    }
                }
                else if(pacArray[id].ySkip == 1){
                    if(j > 10){
                        pacArray[id].prevY = -1;
                        pacArray[id].yCoord = 0;
                    }
                    else{
                        var y = ((pacArray[id].prevY + ((pacArray[id].prevY - pacArray[id].yCoord) * j/-20)) * boxHeight) + (boxHeight/2);
                    }
                }
                else {
                    var y = ((pacArray[id].prevY + ((pacArray[id].prevY - pacArray[id].yCoord) * j/-20)) * boxHeight) + (boxHeight/2);
                }
                
                
                
                ctx.arc(x,y,(boxWidth/ 4),0,2*Math.PI);
                ctx.stroke();
                ctx.fillStyle = color;
                ctx.fill();
            
            j ++;
            if (j > 19) {
                clearInterval(pacArray[id].interval);
                pacArray[id].xSkip = 0;
                pacArray[id].ySkip = 0;
            }
        }, 10 );
    }


function movePac(pacArray, id, intendedDirection,gridArray){
    //0 = #f31327 1 = #ffadc7 2 = #24e0c0 3 = #fd9a34
 var x = pacArray[id].xCoord;
 var y = pacArray[id].yCoord;
  
 for(var i = 0; i < 4; i++){
     pacArray[i].prevX = pacArray[i].xCoord;
     pacArray[i].prevY = pacArray[i].yCoord;
     
 }
 var valid = validateMove(id, intendedDirection, gridArray);
 
    if(valid == "true"){
        
        if(intendedDirection == 0){
            pacArray[id].yCoord -= 1;
        }
        else if(intendedDirection == 1){
            pacArray[id].xCoord += 1;
        }
        else if(intendedDirection == 2){
            pacArray[id].yCoord += 1;
        }
        else if(intendedDirection == 3){
            pacArray[id].xCoord-= 1;
        }
        
        drawPac(pacArray,id);
        
    }
    
    //TODO CHECK IF THERE ARE ANY ORBS LEFT, IF THERE AREN'T, THE END GAME USING changeGamestate("postgame");
}

function giveBlockade(id){ pacArray[id].blockade = "true";}

function startingPlace(gridArray){
    console.log(gridArray);
    for(var i = 0; i < 4; i++){
        if(i == 0){
            var colOffset = 0;
            var rowOffset = 0;0
        }
        if(i == 1){
            var colOffset = gridWidth / 2;
            var rowOffset = 0;
        }
        if(i == 2){
            var colOffset = 0;
            var rowOffset = gridHeight / 2;
        }
        if(i == 3){
            var colOffset = gridWidth / 2;
            var rowOffset = gridHeight / 2;
        }
        while(true){
            var col = Math.round((Math.random() * (gridWidth - 1) / 2) + colOffset);
            var row = Math.round((Math.random() * (gridHeight - 1) / 2) + rowOffset);
            
        console.log("col " + col + " row " + row);
            if((gridArray[col][row].wall == "empty" || gridArray[col][row].wall == "orb")){
                
                console.log(pacArray[i]);
                pacArray[i].xCoord = col;
                pacArray[i].yCoord = row;
                break;
            }
        }
    }   
}



function dropBlockade(id,gridArray){
    console.log(pacArray[id].blockade);
    if(pacArray[id].blockade == "true"){
        var color;
        if(id == 0){
            color = "#f31327";
        }
        else if(id == 1){
            color = "#ffadc7";
        }
        else if(id == 2){
            color = "#24e0c0";
        }
        else if(id == 3){
            color = "#fd9a34";
        }
        console.log(color);
        var x = pacArray[id].xCoord;
        var y = pacArray[id].yCoord;
        gridArray[x][y].wall = color;
        console.log(gridArray[x][y].wall);
    }
}


function newPowerup(){
    
        var col = Math.round(Math.random() * (gridWidth - 1));
        var row = Math.round(Math.random() * (gridHeight - 1));
        
        if((gridArray[col][row].wall == "empty" || gridArray[col][row].wall == "orb")){
            console.log(gridArray[col][row]);
            powerUpInstantiation.eaten = false;
            powerUpInstantiation.xCoord = col;
            powerUpInstantiation.yCoord = row;
            return;
        }
        else{
            newPowerup();
        }
}

function changeGamestate(gamestate) {
    $.post("bridge.php", { "gamestate": gamestate });
    if (gamestate === "waiting") {
        $("#waiting").css("display", "block");
        $("#countdown").css("display", "none");
        $("#game").css("display", "none");
        $("#postgame").css("display", "none");
    } else if (gamestate === "countdown") {
        $("#waiting").css("display", "none");
        $("#countdown").css("display", "block");
        $("#game").css("display", "none");
        $("#postgame").css("display", "none");
        var countdown = 3;
        var countdownInterval = setInterval(function() {
            countdown --;
            $("#countdown-timer").html(countdown);
            if (countdown === 0) {
                changeGamestate("game");
                clearInterval(countdownInterval);
            }
        }, 1000);
    } else if (gamestate === "game") {
        startingPlace(gridArray);
        $("#waiting").css("display", "none");
        $("#countdown").css("display", "none");
        $("#game").css("display", "block");
        $("#postgame").css("display", "none");
        
        // TODO func
        
        // var bridgeController = setInterval(function() {
        //     $.post("bridge.php", { "locations": "i want memez" }, function(response) {
        //         var locations = JSON.parse(response);
                
                
        //         for (var pac = 0; pac < 4; pac ++) {
        //             if (locations[pac][1] === null || locations[pac][1] === "null" || locations[pac][1] === 1337) continue;
        //             movePac(pacArray, pac, parseInt(locations[pac][1]), gridArray);
        //         }
        //     });
        // }, 500);
    } else if (gamestate === "postgame") {
        clearDirection();
    }
}

function clearDirection() {
    $.post("bridge.php", { "clearDirection": "memez" });
}

$("#start").click(function() {
    changeGamestate("countdown");
});