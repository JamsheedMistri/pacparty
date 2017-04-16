<?php
    if (isset($_POST['gamestate'])) {
        $gamestate = $_POST['gamestate'];
        
        require_once("base.php");
        mysqli_query($connection, "UPDATE `gamestate` SET `gamestate` = '$gamestate';");
    } else if (isset($_POST['locations'])) {
        require_once("base.php");
        $read = mysqli_query($connection, "SELECT * FROM `game`;");
        $final = array();
        while ($row = mysqli_fetch_array($read)) {
            array_push($final, array($row['id'], $row['direction']));
        }
        echo json_encode($final, true);
    } else if (isset($_POST['move'])) {
        require_once("base.php");
        mysqli_query($connection, "UPDATE `game` SET `direction` = '" . $_POST['move'] . "' WHERE `id` = '" . $_POST['id'] . "';");
    } else if (isset($_POST['clearDirection'])) {
        require_once("base.php");
        mysqli_query($connection, "UPDATE `game` SET `direction` = NULL;");
    } else if (isset($_POST['points'])) {
        require_once("base.php");
        mysqli_query($connection, "UPDATE `game` SET `blockade` = '" . $_POST['blockade'] . "', `score` = '" . $_POST['points'] . "' WHERE `id` = '" . $_POST['id'] . "';");
    } else if (isset($_POST['query'])) {
        require_once("base.php");
        $read = mysqli_query($connection, "SELECT * FROM `game` WHERE `id` = '" . $_POST['query'] . "';");
        $gs = mysqli_query($connection, "SELECT * FROM `gamestate`;");
        $final = array();
        while ($row = mysqli_fetch_array($read)) {
            array_push($final, $row['score']);
            array_push($final, $row['blockade']);
        }
        while ($row = mysqli_fetch_array($gs)) {
            array_push($final, $row['gamestate']);
        }
        echo json_encode($final, true);
    } else if (isset($_POST['usePowerup'])) {
        require_once("base.php");
        mysqli_query($connection, "UPDATE `game` SET `blockade` = 'false' WHERE `id` = '" . $_POST['userPowerup'] . "';");
    } else header("Location: .");
?>