<?php
require_once("base.php");
$read = mysqli_query($connection, "SELECT * FROM `game`;");

while ($row = mysqli_fetch_array($read)) {
    if ($row['direction'] == "null" || $row['direction'] == null) {
        mysqli_query($connection, "UPDATE `game` SET `direction` = 1337 WHERE `id` = '" . $row['id'] . "';");
        header("Location: controller.php?id=" . $row['id']);
        die();
    } else if ($row['id'] == 3 || $row['id'] == "3") {
        alert("The game is full, please wait until the next game!", ".");
    }
}

function alert($message, $link) {
    echo '<script language="javascript">';
    echo 'var answer = confirm ("' . $message . '"); if (answer) { window.location.replace("' . $link . '"); } else { window.location.replace("' . $link . '"); }';
    echo '</script>';
}