<?php
    require_once('./conn.php');

    function getUserByUsername($session) {
        global $conn;
        $username = $session['username'];
        $sql = sprintf('SELECT * FROM `users` WHERE `username` = "%s"', $username);
        $result = $conn->query($sql);
        if (!$result) {
            exit();
        } else {
            $row = $result->fetch_assoc();
        }
        return $row;
    }
?>