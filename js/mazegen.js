// Array.prototype.remove = function() {
//     var what, a = arguments, L = a.length, ax;
//     while (L && this.length) {
//         what = a[--L];
//         while ((ax = this.indexOf(what)) !== -1) {
//             this.splice(ax, 1);
//         }
//     }
//     return this;
// };

// var blocks = [];
// var numHorizontal = 25;
// var numVertical = 13;

// var horizontalWalls = new Array(numHorizontal);
// var verticalWalls = new Array(numHorizontal+1);

// for (var i = 0; i<horizontalWalls.length; i++){
//     horizontalWalls[i] = new Array(numVertical+1);
//     for (var j = 0; j<numVertical+1; j++){
//         if (j === 0 && j === numVertical){
//             horizontalWalls[i][j] = true;
//         }
//         else {
//             horizontalWalls[i][j] = false;
//         }
//     }
// }

// for (var i = 0; i<verticalWalls.length; i++){
//     verticalWalls[i] = new Array(numVertical);
//     for (var j = 0; j<numVertical; j++){
//         if (i === 0 && i === numHorizontal){
//             verticalWalls[i][j] = true;
//         }
//         else {
//             verticalWalls[i][j] = false;
//         }
//     }
// }

// var Block = function(x,y){
//     // this.north = north;
//     // this.south = south;
//     // this.east = east;
//     // this.west = west;
//     this.north = horizontalWalls[x][y];
//     this.south = horizontalWalls[x][y+1];
//     this.east = verticalWalls[x][y];
//     this.west = verticalWalls[x+1][y];
//     this.x = x;
//     this.y = y;
// };

// Block.prototype.numWalls = function(){
//     // println(this.north+this.south+this.east+this.west);
//     return this.north+this.south+this.east+this.west;
// };

// Block.prototype.adjLegal = function(num){
//     if (num === 1){
//         try{
//             if (blocks[this.x][this.y-1].numWalls() > 1){
//                 return false;
//             }
//             return true;
//         } catch (err){
//             return true;
//         }
//     }
//     if (num === 2){
//         try{
//             if (blocks[this.x][this.y+1].numWalls() > 1){
//                 return false;
//             }
//             return true;
//         } catch (err){
//             return true;
//         }
//     }
//     if (num === 3){
//         try{
//             if (blocks[this.x+1][this.y].numWalls() > 1){
//                 return false;
//             }
//             return true;
//         } catch (err){
//             return true;
//         }
//     }
//     if (num === 4){
//         try{
//             if (blocks[this.x-1][this.y].numWalls() > 1){
//                 return false;
//             }
//             return true;
//         } catch (err){
//             return true;
//         }
//     }
// };




// for (var i = 0; i<numHorizontal; i++){
//     blocks[i] = new Array(numVertical);
//     for (var j = 0; j<numVertical; j++){
//         blocks[i][j] = new Block(i,j);
//     }
// }
// // stroke(255, 0, 0);

// // var display = function() {
// //     background(255, 255, 255);
// //     for (var i = 0; i<horizontalWalls.length; i++){
// //         for (var j = 0; j<horizontalWalls[i].length; j++){
// //             // rect(width*i/numHorizontal, height*j/numVertical, width/numHorizontal, height/numVertical);
// //             if (horizontalWalls[i][j] === true){
// //                 line(width*i/numHorizontal, height*j/numVertical, width*(i+1)/numHorizontal, height*j/numVertical);
// //             }

// //         }
// //     }
// //     for (var i = 0; i<verticalWalls.length; i++){
// //         for (var j = 0; j<verticalWalls[i].length; j++){
// //             // rect(width*i/numHorizontal, height*j/numVertical, width/numHorizontal, height/numVertical);
// //             if (verticalWalls[i][j] === true){
// //                 line(width*i/numHorizontal, height*j/numVertical, width*(i)/numHorizontal, height*(j+1)/numVertical);
// //             }

// //         }
// //     }
// //     for (var i = 0; i<numHorizontal; i++){
// //         for (var j = 0; j<numVertical; j++){
// //             fill(0, 0, 0);
// //             text(blocks[i][j].numWalls(), 10+width*i/numHorizontal, 20+height*j/numVertical);
// //             // text(blocks[i][j].numWalls(), 100, 100);
// //         }
// //     }
// // };
// // for (var i = 0; i<100; i++){
// //     rect(10,10,10,10);
// // }
// // var illegal = function(blocks){
// //     for (var i = 0; i<blocks.length; i++){
// //         for (var j = 0; i<blocks[i].length; j++){
// //             if (blocks[i][j].numWalls>2){
// //                 return true;
// //             }
// //         }
// //     }
// //     return false;
// //     // var tempblocks = [];
// //     // for (var i = 0; i<numHorizontal; i++){
// //     //     tempblocks[i] = new Array(numVertical);
// //     //     for (var j = 0; j<numVertical; j++){
// //     //         tempblocks[i][j] = new Block(i,j);
// //     //     }
// //     // }
// // };
// // var generateLegal = function(){
// //     var legal = [];
// //     for (var i = 0; i<horizontalWalls.length; i++){
// //         for (var j = 0; j<horizontalWalls[i].length; j++){
// //             if (horizontalWalls[i][j] === true){
// //                 continue;
// //             }
// //             // var copyHorizontal = JSON.parse(JSON.stringify(horizontalWalls));
// //             var copyblocks = JSON.parse(JSON.stringify(blocks));
// //             copyblocks[i][j].south = true;
// //             try {
// //                 copyblocks[i][j+1].north = true;
// //             } catch (err) {
// //             }
// //             if (!illegal(copyblocks)){
// //                 legal.push(horizontalWalls[i][j]);
// //             }
// //         }
// //     }
// // };
// var addWall = function(){
//     // var possibilities = [[],[]];
    
//     while (true){
//         var tempblock = blocks[Math.floor((Math.random() * numHorizontal) )][Math.floor((Math.random() * numVertical) )];
//         if (tempblock.numWalls() > 1){
//             continue;
//         }
//         else {
//             var temp = [1,2,3,4];
//             if (tempblock.north === true || !tempblock.adjLegal(1)){
//                 temp.remove(1);
//             }
//             if (tempblock.south === true || !tempblock.adjLegal(2)){
//                 temp.remove(2);
//             }
//             if (tempblock.east === true || !tempblock.adjLegal(3)){
//                 temp.remove(3);
//             }
//             if (tempblock.west === true || !tempblock.adjLegal(4)){
//                 temp.remove(4);
//             }
//             var direction = temp[Math.floor((Math.random() * temp.length) )];
//             if (direction === 1){
//                 horizontalWalls[tempblock.x][tempblock.y] = true;
//                 blocks[tempblock.x][tempblock.y].north = true;
//                 try{
//                     blocks[tempblock.x][tempblock.y-1].south = true;
//                 } catch (err){
//                 }
//             }
//             if (direction === 2){
//                 horizontalWalls[tempblock.x][tempblock.y+1] = true;
//                 blocks[tempblock.x][tempblock.y].south = true;
//                 try{
//                     blocks[tempblock.x][tempblock.y+1].north = true;
//                 } catch (err){
//                 }
//             }
//             if (direction === 3){
//                 verticalWalls[tempblock.x+1][tempblock.y] = true;
//                 blocks[tempblock.x][tempblock.y].east = true;
//                 try{
//                     blocks[tempblock.x+1][tempblock.y].west = true;
//                 } catch (err){
//                 }
//             }
//             if (direction === 4){
//                 verticalWalls[tempblock.x][tempblock.y] = true;
//                 blocks[tempblock.x][tempblock.y].west = true;
//                 try{
//                     blocks[tempblock.x-1][tempblock.y].east = true;
//                 } catch (err){
//                 }
//             }
//             return;
//         }
        
//     }
// };
// // var draw = function() {
// //     display();
// //     addWall();
// // };

// for (var i = 0; i<numHorizontal*numVertical; i++){
//     addWall();
//     // display();
// }
// var finalBlocks = new Array(numHorizontal+1);
// for (var i = 0; i<2*numHorizontal+1; i++){
//     finalBlocks[i] = new Array(numVertical+1);
//     for (var j = 0; j<2*numVertical+1; j++){
//         finalBlocks[i][j] = false;
//     }
// }
// // println(finalBlocks.length);
// // for (var i = 0; i<finalBlocks.length;i++){
// //     println(finalBlocks[i].length);
// // }
// for (var i = 0; i<horizontalWalls.length;i++){
//     for (var j = 0; j<horizontalWalls[i].length; j++){
//         if (horizontalWalls[i][j]){
//             finalBlocks[2*i][2*j] = true;
//             finalBlocks[2*i+1][2*j] = true;
//             finalBlocks[2*i+2][2*j] = true;
//         }
//     }
// }
// for (var i = 0; i<verticalWalls.length;i++){
//     for (var j = 0; j<verticalWalls[i].length; j++){
//         if (verticalWalls[i][j]){
//             finalBlocks[2*i][2*j] = true;
//             finalBlocks[2*i][2*j+1] = true;
//             finalBlocks[2*i][2*j+2] = true;
//         }
//     }
// }
// // var display2 = function() {
// //     background(255, 255, 255);
// //     for (var i = 0; i<finalBlocks.length; i++){
// //         for (var j = 0; j<finalBlocks[i].length; j++){
// //             if (finalBlocks[i][j]){
// //                 fill(0, 0, 0);
// //                 rect(width*i/finalBlocks.length, height*j/finalBlocks[i].length, width/finalBlocks.length, height/finalBlocks[i].length);
// //             }
// //         }
// //     }
// // };
// // println(finalBlocks);
// // println(finalBlocks.length);
// // for (var i = 0; i<finalBlocks.length;i++){
// //     println(finalBlocks[i].length);
// // }
// // display2();

// for (var i = 0; i<finalBlocks.length; i++){
//     for (var j = 0; j<finalBlocks[i].length; j++){
//         if (finalBlocks[i][j] === true){
//             finalBlocks[i][j] = "wall";
//         }
//         else {
//             finalBlocks[i][j] = "orb";
//         }
//     }
    
// }

// // var a = [1,2,3];
// // var b = a[0];
// // a[0] = 5;
// // println(b);

// // console.log(finalBlocks);

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

var blocks = [];
var numHorizontal = 25;
var numVertical = 13;

var horizontalWalls = new Array(numHorizontal);
var verticalWalls = new Array(numHorizontal+1);

for (var i = 0; i<horizontalWalls.length; i++){
    horizontalWalls[i] = new Array(numVertical+1);
    for (var j = 0; j<numVertical+1; j++){
        if (j === 0 && j === numVertical){
            horizontalWalls[i][j] = true;
        }
        else {
            horizontalWalls[i][j] = false;
        }
    }
}

for (var i = 0; i<verticalWalls.length; i++){
    verticalWalls[i] = new Array(numVertical);
    for (var j = 0; j<numVertical; j++){
        if (i === 0 && i === numHorizontal){
            verticalWalls[i][j] = true;
        }
        else {
            verticalWalls[i][j] = false;
        }
    }
}

var Block = function(x,y){
    // this.north = north;
    // this.south = south;
    // this.east = east;
    // this.west = west;
    this.north = horizontalWalls[x][y];
    this.south = horizontalWalls[x][y+1];
    this.east = verticalWalls[x][y];
    this.west = verticalWalls[x+1][y];
    this.x = x;
    this.y = y;
};

Block.prototype.numWalls = function(){
    // println(this.north+this.south+this.east+this.west);
    return this.north+this.south+this.east+this.west;
};

Block.prototype.adjLegal = function(num){
    if (num === 1){
        try{
            if (blocks[this.x][this.y-1].numWalls() > 1){
                return false;
            }
            return true;
        } catch (err){
            return true;
        }
    }
    if (num === 2){
        try{
            if (blocks[this.x][this.y+1].numWalls() > 1){
                return false;
            }
            return true;
        } catch (err){
            return true;
        }
    }
    if (num === 3){
        try{
            if (blocks[this.x+1][this.y].numWalls() > 1){
                return false;
            }
            return true;
        } catch (err){
            return true;
        }
    }
    if (num === 4){
        try{
            if (blocks[this.x-1][this.y].numWalls() > 1){
                return false;
            }
            return true;
        } catch (err){
            return true;
        }
    }
};




for (var i = 0; i<numHorizontal; i++){
    blocks[i] = new Array(numVertical);
    for (var j = 0; j<numVertical; j++){
        blocks[i][j] = new Block(i,j);
    }
}
// stroke(255, 0, 0);

// var display = function() {
//     background(255, 255, 255);
//     for (var i = 0; i<horizontalWalls.length; i++){
//         for (var j = 0; j<horizontalWalls[i].length; j++){
//             // rect(width*i/numHorizontal, height*j/numVertical, width/numHorizontal, height/numVertical);
//             if (horizontalWalls[i][j] === true){
//                 line(width*i/numHorizontal, height*j/numVertical, width*(i+1)/numHorizontal, height*j/numVertical);
//             }

//         }
//     }
//     for (var i = 0; i<verticalWalls.length; i++){
//         for (var j = 0; j<verticalWalls[i].length; j++){
//             // rect(width*i/numHorizontal, height*j/numVertical, width/numHorizontal, height/numVertical);
//             if (verticalWalls[i][j] === true){
//                 line(width*i/numHorizontal, height*j/numVertical, width*(i)/numHorizontal, height*(j+1)/numVertical);
//             }

//         }
//     }
//     for (var i = 0; i<numHorizontal; i++){
//         for (var j = 0; j<numVertical; j++){
//             fill(0, 0, 0);
//             text(blocks[i][j].numWalls(), 10+width*i/numHorizontal, 20+height*j/numVertical);
//             // text(blocks[i][j].numWalls(), 100, 100);
//         }
//     }
// };
// for (var i = 0; i<100; i++){
//     rect(10,10,10,10);
// }
// var illegal = function(blocks){
//     for (var i = 0; i<blocks.length; i++){
//         for (var j = 0; i<blocks[i].length; j++){
//             if (blocks[i][j].numWalls>2){
//                 return true;
//             }
//         }
//     }
//     return false;
//     // var tempblocks = [];
//     // for (var i = 0; i<numHorizontal; i++){
//     //     tempblocks[i] = new Array(numVertical);
//     //     for (var j = 0; j<numVertical; j++){
//     //         tempblocks[i][j] = new Block(i,j);
//     //     }
//     // }
// };
// var generateLegal = function(){
//     var legal = [];
//     for (var i = 0; i<horizontalWalls.length; i++){
//         for (var j = 0; j<horizontalWalls[i].length; j++){
//             if (horizontalWalls[i][j] === true){
//                 continue;
//             }
//             // var copyHorizontal = JSON.parse(JSON.stringify(horizontalWalls));
//             var copyblocks = JSON.parse(JSON.stringify(blocks));
//             copyblocks[i][j].south = true;
//             try {
//                 copyblocks[i][j+1].north = true;
//             } catch (err) {
//             }
//             if (!illegal(copyblocks)){
//                 legal.push(horizontalWalls[i][j]);
//             }
//         }
//     }
// };
var addWall = function(){
    // var possibilities = [[],[]];
    
    while (true){
        var tempblock = blocks[Math.floor((Math.random() * numHorizontal) )][Math.floor((Math.random() * numVertical) )];
        if (tempblock.numWalls() > 1){
            continue;
        }
        else {
            var temp = [1,2,3,4];
            if (tempblock.north === true || !tempblock.adjLegal(1)){
                temp.remove(1);
            }
            if (tempblock.south === true || !tempblock.adjLegal(2)){
                temp.remove(2);
            }
            if (tempblock.east === true || !tempblock.adjLegal(3)){
                temp.remove(3);
            }
            if (tempblock.west === true || !tempblock.adjLegal(4)){
                temp.remove(4);
            }
            var direction = temp[Math.floor((Math.random() * temp.length) )];
            if (direction === 1){
                horizontalWalls[tempblock.x][tempblock.y] = true;
                blocks[tempblock.x][tempblock.y].north = true;
                try{
                    blocks[tempblock.x][tempblock.y-1].south = true;
                } catch (err){
                }
            }
            if (direction === 2){
                horizontalWalls[tempblock.x][tempblock.y+1] = true;
                blocks[tempblock.x][tempblock.y].south = true;
                try{
                    blocks[tempblock.x][tempblock.y+1].north = true;
                } catch (err){
                }
            }
            if (direction === 3){
                verticalWalls[tempblock.x+1][tempblock.y] = true;
                blocks[tempblock.x][tempblock.y].east = true;
                try{
                    blocks[tempblock.x+1][tempblock.y].west = true;
                } catch (err){
                }
            }
            if (direction === 4){
                verticalWalls[tempblock.x][tempblock.y] = true;
                blocks[tempblock.x][tempblock.y].west = true;
                try{
                    blocks[tempblock.x-1][tempblock.y].east = true;
                } catch (err){
                }
            }
            return;
        }
        
    }
};
// var draw = function() {
//     display();
//     addWall();
// };

for (var i = 0; i<numHorizontal*numVertical; i++){
    addWall();
    // display();
}
var finalBlocks = new Array(numHorizontal+1);
for (var i = 0; i<2*numHorizontal+1; i++){
    finalBlocks[i] = new Array(numVertical+1);
    for (var j = 0; j<2*numVertical+1; j++){
        finalBlocks[i][j] = false;
    }
}
// println(finalBlocks.length);
// for (var i = 0; i<finalBlocks.length;i++){
//     println(finalBlocks[i].length);
// }
for (var i = 0; i<horizontalWalls.length;i++){
    for (var j = 0; j<horizontalWalls[i].length; j++){
        if (horizontalWalls[i][j]){
            finalBlocks[2*i][2*j] = true;
            finalBlocks[2*i+1][2*j] = true;
            finalBlocks[2*i+2][2*j] = true;
        }
    }
}
for (var i = 0; i<verticalWalls.length;i++){
    for (var j = 0; j<verticalWalls[i].length; j++){
        if (verticalWalls[i][j]){
            finalBlocks[2*i][2*j] = true;
            finalBlocks[2*i][2*j+1] = true;
            finalBlocks[2*i][2*j+2] = true;
        }
    }
}
// var display2 = function() {
//     background(255, 255, 255);
//     for (var i = 0; i<finalBlocks.length; i++){
//         for (var j = 0; j<finalBlocks[i].length; j++){
//             if (finalBlocks[i][j]){
//                 fill(0, 0, 0);
//                 rect(width*i/finalBlocks.length, height*j/finalBlocks[i].length, width/finalBlocks.length, height/finalBlocks[i].length);
//             }
//         }
//     }
// };
// println(finalBlocks);
// println(finalBlocks.length);
// for (var i = 0; i<finalBlocks.length;i++){
//     println(finalBlocks[i].length);
// }
// display2();
var filledBlocks = new Array(finalBlocks.length);
for (var i = 0; i<finalBlocks.length;i++){
    filledBlocks[i] = new Array(finalBlocks[i].length)
    for (var j = 0; j<finalBlocks[i].length; j++){
        filledBlocks[i][j] = false;
    }
}
var fill = function(x,y){
    filledBlocks[x][y] = true;
    if ((x>=finalBlocks.length-1 || (finalBlocks[x+1][y] !== false || filledBlocks[x+1][y] !== false)) && (x<=0 || (finalBlocks[x-1][y] !== false || filledBlocks[x-1][y] !== false)) && (y>=finalBlocks[x].length-1 || (finalBlocks[x][y+1] !== false || filledBlocks[x][y+1] !== false)) && (y<=0 || (finalBlocks[x][y-1] !== false || filledBlocks[x][y-1] !== false))) {
        return true;
    }
    if (x<finalBlocks.length-1){
        if (!finalBlocks[x+1][y] && !filledBlocks[x+1][y]) {
            fill(x+1,y);
        }
    }
    if (x>0){
        if (!finalBlocks[x-1][y] && !filledBlocks[x-1][y]) {
            fill(x-1,y);
        }
    }
    if (y<finalBlocks[x].length-1){
        if (!finalBlocks[x][y+1] && !filledBlocks[x][y+1]) {
            fill(x,y+1);
        }
    }
    if (y>0){
        if (!finalBlocks[x][y-1] && !filledBlocks[x][y-1]) {
            fill(x,y-1);
        }
    }
    
};
meme:
for (var i = 0; i<finalBlocks.length; i++){
    for (var j = 0; j<finalBlocks[i].length; j++){
        if (!finalBlocks[i][j]) {
            fill(i,j);
            break meme;
        }
    }
}
var checkFilled = function(){
    for (var i = 0; i<finalBlocks.length; i++){
        for (var j = 0; j<finalBlocks[i].length; j++){
            if (!finalBlocks[i][j] && !filledBlocks[i][j]){
                if ((i>=finalBlocks.length-2 || (filledBlocks[i+2][j] !== true)) && (i<= 1 || filledBlocks[i-2][j] !== true) && (j>=filledBlocks[i].length-2 || filledBlocks[i][j+2] !== true) && (j<=1 || filledBlocks[i][j-2] !== true)) {
                    continue;
                }
                else {
                    try {
                        if (finalBlocks[i-1][j] && filledBlocks[i-2][j]){
                            finalBlocks[i-1][j] = false;
                            fill(i-2,j);
                            return checkFilled();
                        }
                    } catch (err) {
                    }
                    try{
                        if (finalBlocks[i+1][j] && filledBlocks[i+2][j]){
                            finalBlocks[i+1][j] = false;
                            fill(i+2,j);
                            return checkFilled();
                        }
                    }
                    catch (err){
                    }
                    try{
                        if (finalBlocks[i][j+1] && filledBlocks[i][j+2]){
                            finalBlocks[i][j+1] = false;
                            fill(i,j+2);
                            return checkFilled();
                        }
                    } catch (err){
                        
                    }
                    try {
                        if (finalBlocks[i][j-1] && filledBlocks[i][j-2]){
                            finalBlocks[i][j-1] = false;
                            fill(i,j-2);
                            return checkFilled();
                        }
                    } catch (err){
                        
                    }
                }
            }
        }
    }
    return true;
}
checkFilled();
for (var i = 0; i<finalBlocks.length; i++){
    for (var j = 0; j<finalBlocks[i].length; j++){
        if (finalBlocks[i][j] === true){
            finalBlocks[i][j] = "wall";
        }
        else {
            finalBlocks[i][j] = "orb";
        }
        // if (filledBlocks[i][j]){
        //     finalBlocks[i][j] = "red"
        // }
    }
    
}

// var a = [1,2,3];
// var b = a[0];
// a[0] = 5;
// println(b);

// console.log(finalBlocks);