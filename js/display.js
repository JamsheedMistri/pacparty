var death = new Audio('sound/death.mp3');
var move = new Audio('sound/move.mp3');
move.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
var powerup = new Audio('sound/powerup.mp3');

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
    this.face;
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
    this.eaten = false;
}


var gridWidth = (numHorizontal * 2) + 1;
var gridHeight = (numVertical * 2) + 1;

var passable = [[],[]];
var pacArray = [];
var powerUpInstantiation = new powerUp();

var gridArray = [];

var map = finalBlocks;

var c=document.getElementById("gamecanvas");

var ctx=c.getContext("2d");

var screenHeight = c.height;
var screenWidth = c.width;

var boxHeight = screenHeight/(gridHeight );
var boxWidth = screenWidth/(gridWidth );


for(var i = 0; i < 4; i++){
    pacArray[i] = new pacMan(0,0,i,1,0,"false");
}


for (var i = 0; i < gridWidth; i++){
    gridArray[i] = new Array();
    for (var j = 0; j < gridHeight; j++){
        gridArray[i][j] = new gridBlock(i,j,map[i][j],"false","false");

    }
}

//newPowerup();
// ctx.fillRect(0,0,50,50);
drawGrid();

//draw grid
function drawGrid(){
    for(var i = 0; i <gridWidth; i++){
        for(var j = 0; j <gridHeight; j++){
                ctx.beginPath();
                
                ctx.rect(
                    (gridArray[i][j].xCoord * boxWidth),
                    (gridArray[i][j].yCoord * boxHeight),
                    boxWidth,
                    boxHeight
                    );
                
                if(gridArray[i][j].wall == "wall"){
                    ctx.fillStyle = "#2642c6";
                    ctx.strokeStyle = "#2642c6";
                    
                }
                else if(gridArray[i][j].wall == "empty" ||gridArray[i][j].wall == "orb" ){
                    ctx.fillStyle = "black";
                    ctx.strokeStyle = "black";
                }
                else{
                    ctx.fillStyle = gridArray[i][j].wall;
                }
                ctx.stroke();
                ctx.fill();
                
                if(gridArray[i][j].wall == "orb"){
                    var x = i *boxWidth + boxWidth/2;
                    var y = j *boxHeight + boxHeight/2;
                    ctx.beginPath();
                    ctx.strokeStyle = "white";
                    ctx.arc(x,y,(boxWidth/ 6),0,2*Math.PI);
                    ctx.stroke();
                    ctx.fillStyle = "white";
                    ctx.fill();
                    
                }
                
                if(powerUpInstantiation.eaten == false){
                    var x = powerUpInstantiation.xCoord * boxWidth + boxWidth/2 -5;
                    var y = powerUpInstantiation.yCoord * boxHeight + boxHeight/2 - 5;
                    ctx.beginPath();
                    ctx.strokeStyle = "tomato";
                    ctx.rect(x, y, 10, 10);
                    ctx.stroke();
                    ctx.fillStyle = "tomato";
                    ctx.fill();
                    ctx.fillStyle = "black";
                    
                    
                }
                
        }
    }
}



function drawTile(id){
    
    var x = pacArray[id].xCoord;
    var y = pacArray[id].yCoord;
    ctx.beginPath();
    ctx.strokeStyle="#000000";
    if(x > -1 && x < screenWidth && y > -1 && y < screenHeight){
       ctx.rect(
        (gridArray[x][y].xCoord * boxWidth),
        (gridArray[x][y].yCoord * boxHeight),
        (boxWidth - 0.5),
        (boxHeight - 1)
        );
        ctx.stroke();
        if(gridArray[x][y].wall == "wall" ||gridArray[x][y].wall == "orb" ||gridArray[x][y].wall == "empty"){
                ctx.fillStyle = "black";
            }
            else{
                ctx.fillStyle = gridArray[x][y].wall;
            }
        ctx.fill(); 
        }
    
    var x = pacArray[id].prevX;
    var y = pacArray[id].prevY;
    if(x > -1 && x < screenWidth && y > -1 && y < screenHeight){
        ctx.beginPath();
        ctx.rect(
            (gridArray[x][y].xCoord * boxWidth),
            (gridArray[x][y].yCoord * boxHeight),
            (boxWidth - 0.5),
            (boxHeight - 1)
            );
        ctx.stroke();
        if(gridArray[x][y].wall == "wall" ||gridArray[x][y].wall == "orb"|| gridArray[x][y].wall == "empty"){
                ctx.fillStyle = "black";
            }
            else{
                ctx.fillStyle = gridArray[x][y].wall;
            }
        ctx.fill(); 
        
    }
    if(powerUpInstantiation.eaten == false){
        var x = powerUpInstantiation.xCoord * boxWidth + boxWidth/2 - 10;
        var y = powerUpInstantiation.yCoord * boxHeight + boxHeight/2 - 10;
        
        ctx.beginPath();
        ctx.rect(x, y, 20, 20);
        ctx.stroke();
        ctx.fillStyle = "tomato";
        ctx.fill();
        ctx.fillStyle = "black";
        
        
    }
}

//pacman controller


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
    else if(pendingDirection == 3){
        x-= 1;
    }
    if(x < 0){
        x = gridWidth - 1;
        pacArray[id].xCoord = gridWidth - 1;
    }
    if(y < 0){
        y = gridHeight - 1;
        pacArray[id].yCoord = gridHeight - 1;
    }
    if(x > gridWidth - 1){
        x = 0;
        pacArray[id].xCoord = 0;
    }
    if(y > gridHeight - 1){
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
                //newPowerup();
            },20000);
            
        }
    return "true";
        
    }
    
    
    
}

function drawPac(id){
    

    var passPrevX = pacArray[id].prevX;
    var passPrevY = pacArray[id].prevY;
    if(id == 0){
    }
    
    
     
    var j = 0;
        pacArray[id].interval = setInterval(function(){
            
            var image = new Image();
                
            pacArray[id].prevX = passPrevX;
            pacArray[id].prevY = passPrevY;
            
            if(pacArray[id].ySkip == 0 && pacArray[id].xSkip == 0){
                if( pacArray[id].prevX - pacArray[id].xCoord > 10){
                    pacArray[id].xSkip = 1;
                    pacArray[id].xCoord = screenWidth;
                }
                if(pacArray[id].prevX - pacArray[id].xCoord < -1  && pacArray[id].xSkip != 1){
                    pacArray[id].xSkip = -1;
                    pacArray[id].xCoord = -1;
                }
                if( pacArray[id].prevY - pacArray[id].yCoord > 10){
                    pacArray[id].ySkip = 1;
                    pacArray[id].yCoord = screenHeight;
                   
                }
                if(pacArray[id].prevY - pacArray[id].yCoord < -1 && pacArray[id].ySkip != 1){
                    pacArray[id].ySkip = -1;
                    pacArray[id].yCoord = -1;
                    
                    
                }
            }
            
                if(pacArray[id].face == "right"){
                    if(j%4 == 0){
                        image.src = "pacmen/" + id + "/r1.png"
                    }
                    if(j%4 == 1){
                        image.src = "pacmen/" + id + "/r2.png"
                    }
                    if(j%4 == 2){
                        image.src = "pacmen/" + id + "/r3.png"
                    }
                    if(j%4 == 3){
                        image.src = "pacmen/" + id + "/r2.png"
                    }
                }
                 if(pacArray[id].face == "left"){
                    if(j%4 == 0){
                        image.src = "pacmen/" + id + "/l1.png"
                    }
                    if(j%4 == 1){
                        image.src = "pacmen/" + id + "/l2.png"
                    }
                    if(j%4 == 2){
                        image.src = "pacmen/" + id + "/l3.png"
                    }
                    if(j%4 == 3){
                        image.src = "pacmen/" + id + "/l2.png"
                    }
                }
                if(pacArray[id].face == "up"){
                    if(j%4 == 0){
                        image.src = "pacmen/" + id + "/u1.png"
                    }
                    if(j%4 == 1){
                        image.src = "pacmen/" + id + "/u2.png"
                    }
                    if(j%4 == 2){
                        image.src = "pacmen/" + id + "/u3.png"
                    }
                    if(j%4 == 3){
                        image.src = "pacmen/" + id + "/u2.png"
                    }
                }
                if(pacArray[id].face == "down"){
                    if(j%4 == 0){
                        image.src = "pacmen/" + id + "/d1.png"
                    }
                    if(j%4 == 1){
                        image.src = "pacmen/" + id + "/d2.png"
                    }
                    if(j%4 == 2){
                        image.src = "pacmen/" + id + "/d3.png"
                    }
                    if(j%4 == 3){
                        image.src = "pacmen/" + id + "/d2.png"
                    }
                }
               
                var color;
                if(id == 0){
                    color = "red";
                }
                else if(id == 1){
                    color = "pink";
                }
                else if(id == 2){
                    color = "cyan";
                }
                else if(id == 3){
                    color = "orange";
                }
               
                
                drawTile(id);
                ctx.beginPath();
                var x = ((pacArray[id].prevX + ((pacArray[id].prevX - pacArray[id].xCoord) * j/-20)) * boxWidth) + (boxWidth/2);
                var y = ((pacArray[id].prevY + ((pacArray[id].prevY - pacArray[id].yCoord) * j/-20)) * boxHeight) + (boxHeight/2);
                if(pacArray[id].xSkip == -1){
                    if(j > 10){
                        pacArray[id].prevX = gridWidth;
                        pacArray[id].xCoord = gridWidth-1;
                        var x = ((pacArray[id].prevX + ((pacArray[id].prevX - pacArray[id].xCoord) * j/-20)) * boxWidth) + (boxWidth/2);
                    }
                    else{
                        var x = ((pacArray[id].prevX + ((pacArray[id].prevX - pacArray[id].xCoord) * j/-20)) * boxWidth) + (boxWidth/2);
                    }
                }
                else if(pacArray[id].xSkip == 1){
                    if(j > 10){
                        pacArray[id].prevX = -1;
                        pacArray[id].xCoord = 0;
                        var x = ((pacArray[id].prevX + ((pacArray[id].prevX - pacArray[id].xCoord) * j/-20)) * boxWidth) + (boxWidth/2);
                    }
                    else{
                        var x = ((pacArray[id].prevX + ((pacArray[id].prevX - pacArray[id].xCoord) * j/-20)) * boxWidth) + (boxWidth/2);
                    }
                }
                
                if(pacArray[id].ySkip == -1){
                    if(j > 10){
                        pacArray[id].prevY = gridHeight;
                        pacArray[id].yCoord = gridHeight - 1;
                        var y = ((pacArray[id].prevY + ((pacArray[id].prevY - pacArray[id].yCoord) * j/-20)) * boxHeight) + (boxHeight/2);
                        
                    }
                    else{
                        
                        var y = ((pacArray[id].prevY + ((pacArray[id].prevY - pacArray[id].yCoord) * j/-20)) * boxHeight) + (boxHeight/2);
                    }
                }
                else if(pacArray[id].ySkip == 1){
                    if(j > 10){
                        pacArray[id].prevY = -1;
                        pacArray[id].yCoord = 0;
                        var y = ((pacArray[id].prevY + ((pacArray[id].prevY - pacArray[id].yCoord) * j/-20)) * boxHeight) + (boxHeight/2);
                    }
                    else{
                        var y = ((pacArray[id].prevY + ((pacArray[id].prevY - pacArray[id].yCoord) * j/-20)) * boxHeight) + (boxHeight/2);
                    }
                }
                
                //Normal State
                if(pacArray[id].xSkip == 0){
                    var x = ((pacArray[id].prevX + ((pacArray[id].prevX - pacArray[id].xCoord) * j/-20)) * boxWidth) + (boxWidth/2);
                }
                if(pacArray[id].ySkip == 0){
                    var y = ((pacArray[id].prevY + ((pacArray[id].prevY - pacArray[id].yCoord) * j/-20)) * boxHeight) + (boxHeight/2);
                }
                
                
    		        var size = (boxWidth * 4/5);
        	    	image.onload = function () {
        			ctx.drawImage(image, x -(boxWidth/2) + (boxWidth/7) , y - (boxHeight * 2/5), size, size);
                    };
                

                
                // ctx.arc(x,y,(boxWidth/ 4),0,2*Math.PI);
                // ctx.stroke();
                // ctx.fillStyle = color;
                // ctx.fill();
            
            j ++;
            if (j > 19) {
                clearInterval(pacArray[id].interval);
                pacArray[id].xSkip = 0;
                pacArray[id].ySkip = 0;
            }
        }, 10 );
    }





function movePac(id, intendedDirection,gridArray){
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
            pacArray[id].face = "up";
        }
        else if(intendedDirection == 1){
            pacArray[id].xCoord += 1;
            pacArray[id].face = "right";
        }
        else if(intendedDirection == 2){
            pacArray[id].yCoord += 1;
            pacArray[id].face = "down";
        }
        else if(intendedDirection == 3){
            pacArray[id].xCoord-= 1;
            pacArray[id].face = "left";
        }
        drawPac(id);
        
    }
    
    
    for (var a = 0; a < 3; a ++) {
        for (var b = 0; b < 3; b ++) {
            if(a === b){
                continue;
            }
            if (pacArray[a].xCoord === pacArray[b].xCoord && pacArray[a].yCoord === pacArray[b].yCoord) {
                console.log(pacArray[a]);
                console.log(pacArray[b]);
                
                pacArray[a].points -= 10;
                pacArray[b].points -= 10;
                
                if(pacArray[a].points < 0){
                    pacArray[a].points = 0;
                }
                if(pacArray[b].points < 0){
                    pacArray[b].points = 0;
                }
                
                death.play();
            }
        }
    }
    
    //TODO CHECK IF THERE ARE ANY ORBS LEFT, IF THERE AREN'T, THE END GAME USING changeGamestate("postgame");
}

function giveBlockade(id){ pacArray[id].blockade = "true";}

function startingPlace(gridArray){
    for(var i = 0; i < 4; i++){
        if(i == 0){
            var colOffset = 0;
            var rowOffset = 0;
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
            
            if((gridArray[col][row].wall == "empty" || gridArray[col][row].wall == "orb")){
                
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
        var x = pacArray[id].xCoord;
        var y = pacArray[id].yCoord;
        gridArray[x][y].wall = color;
    }
}


// function newPowerup(){
    
//         var col = Math.round(Math.random() * (gridWidth - 1));
//         var row = Math.round(Math.random() * (gridHeight - 1));
        
//         if((gridArray[col][row].wall == "empty" || gridArray[col][row].wall == "orb")){
//             powerUpInstantiation.eaten = false;
//             powerUpInstantiation.xCoord = col;
//             powerUpInstantiation.yCoord = row;
            
//             return;
//         }
//         else{
//             newPowerup();
//         }
// }

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
        
        setTimeout(function() {
            changeGamestate("postgame");
        }, 20000);
        
        var droppingInterval = setInterval(function() {
            for (var pac = 0; pac < pacArray.length; pac ++) {
                $.post("bridge.php", { "query": pac }, function(response) {
                    var js = JSON.parse(response);
                    if (js[1] == "false") {
                        dropBlockade(pac, gridArray);
                    }
                });
            }
        }, 1000);
        
        var bridgeController = setInterval(function() {
            $.post("bridge.php", { "locations": "i want memez" }, function(response) {
                var locations = JSON.parse(response);
                
                for (var pac = 0; pac < pacArray.length; pac ++) {
                    
                    if (locations[pac][1] === null || locations[pac][1] === "null" || locations[pac][1] === 1337 ){
                      continue;  
                    } 
                    if(pacArray[pac].points < 0){
                       pacArray[pac].points = 0; 
                    }
                    movePac( pac, parseInt(locations[pac][1]), gridArray);
                }
            });
        }, 400);
        
        var bridgeToController = setInterval(function() {
            for (var i = 0; i < pacArray.length; i ++) {
                $.post("bridge.php", { "id": i, "points": pacArray[i].points, "blockade": pacArray[i].blockade });
            }
        }, 500);
        
        move.play();
    } else if (gamestate === "postgame") {
        move.pause();
        clearDirection();
        $("#waiting").css("display", "none");
        $("#countdown").css("display", "none");
        $("#game").css("display", "none");
        $("#postgame").css("display", "block");
        
        var order = {
            0: [
                "RED PACMAN",
                "#f31327"
            ],
            1: [
                "PINK PACMAN",
                "#ffadc7"
            ],
            2: [
                "CYAN PACMAN",
                "#24e0c0"
            ],
            3: [
                "ORANGE PACMAN",
                "#fd9a34"
            ]
        };
        
        var highest = 0;
        var winner = "NOBODY";
        var winnerId = 0;
        for (var player = 0; player <= 3; player ++) {
            if (pacArray[player].points > highest) {
                if (highest == pacArray[player].points) {
                    winner += " and " + order[player][0];
                    winnerId = player;
                } else {
                    winner = order[player][0];
                    winnerId = player;
                }
                highest = pacArray[player].points;
            }
            if (player == 3) {
                $("#winner").html(winner);
                $("#winner").css("color", order[winnerId][1]);
            }
        }
        step();;
    }
}

$("#confetti").click(function() {
    location.reload();
});

function clearDirection() {
    $.post("bridge.php", { "clearDirection": "memez" });
}

$("#start").click(function() {
    changeGamestate("countdown");
});