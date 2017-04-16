<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="viewport" content="user-scalable=1.0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
        <meta name="format-detection" content="telephone=no">
    
        <link rel="apple-touch-icon-precomposed" href="favicon.png" />
        <link rel="apple-touch-icon" href="favicon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        <title>PacParty | Display</title>
        <link rel="stylesheet" href="css/display.css" />
    </head>
    <body>
        <div id="waiting">
            <h1>PAC<span style="color: #f31327">PARTY</span></h1>
            <h2>waiting for players...</h2>
            <div id="start">
                start game
            </div>
        </div>
        <div id="countdown">
            <h1>STARTING IN</h1>
            <h2 id="countdown-timer">3</h2>
        </div>
        <div id="game">
            <canvas id="gamecanvas" height = "2400" width = "3200"></canvas>
        </div>
        <div id="postgame">
            <h2>and the winner is...</h2>
            <h1 id="winner"></h1>
            <h5>CLICK ANYWHERE TO PLAY AGAIN</h5>
            <canvas id="confetti" class="active"></canvas>
        </div>
        <script type="text/javascript" src="js/confetti.js"></script>
        <script type="text/javascript" src="js/mazegen.js"></script>
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/display.js"></script>
    </body>
</html>