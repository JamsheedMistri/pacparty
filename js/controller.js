var powerup = false;
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

$(document).ready(function() {
    $("body,html").css("background-color", order[pacID][1]);
});

var interval = setInterval(function() {
    $.post("bridge.php", { "query": pacID }, function(response) {
        var js = JSON.parse(response);
        
        $("#score-count").html(js[0]);
        if (js[1] + " " == "false ") {
            $("#powerup").css("background-color", "#d4d4d4");
            powerup = true;
        } else {
            $("#powerup").css("background-color", order[pacID][1]);
            powerup = false;
        }
    });
}, 500);

function move(direction, id) {
    $.post("bridge.php", { "move": direction, "id": id });
}

$("#powerup").click(function() {
   if (!powerup) return;
   $.post("bridge.php", { "usePowerup": pacID });
});

$("#up").click(function() { move(0, pacID); });
$("#right").click(function() { move(1, pacID); });
$("#down").click(function() { move(2, pacID); });
$("#left").click(function() { move(3, pacID); });