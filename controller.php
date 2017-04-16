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
        
        <title>PacParty | Controller</title>
        <link rel="stylesheet" href="css/controller.css" />
    </head>
    <body>
        <div id="up" class="button">&#9650;</div>
        <div id="right" class="button">&#9654;</div>
        <div id="down" class="button">&#9660;</div>
        <div id="left" class="button">&#9664;</div>
        <div id="powerup" class="button">&#215;</div>
        
        <div id="score">
            <p>SCORE</p>
            <h4 id="score-count"></h4>
        </div>
        
        <script>var pacID = <?php echo $_GET['id']; ?>;</script>
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/controller.js"></script>
    </body>
</html>