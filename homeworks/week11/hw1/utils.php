<?php
    require_once('./conn.php');

    function getUserByUsername($session) {
        global $conn;
        $username = $session['username'];
        $sql = 'SELECT * FROM `ZoeHYH_users` WHERE `username` = ?';
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('s', $username);
        $result = $stmt->execute();
        if (!$result) {
            exit();
        } else {
            $result = $stmt->get_result();
            if ($result->num_rows === 0) {
                echo 'No Data';
                exit();
            }
            $row = $result->fetch_assoc();
        }
        return $row;
    }

    function escape($str) {
        return htmlspecialchars($str, ENT_QUOTES);
    }

    function getCommentByID($id) {
        global $conn;
        $sql = 'SELECT * FROM `ZoeHYH_comments` WHERE `id` = ?';
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('i', $id);
        $result = $stmt->execute();
        if (!$result) {
            exit();
        } else {
            $result = $stmt->get_result();
            if ($result->num_rows === 0) {
                echo 'No Data';
                exit();
            }
            $row = $result->fetch_assoc();
        }
        return $row;
    }
?>