<?php
    session_start();
    require_once('./conn.php');

    if (empty($_POST['username']) || empty($_POST['password'])) {
        header("Location: ./login.php?errcode=1");
        exit();
    }

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = sprintf('SELECT `username`, `password` FROM `users` WHERE `username` = "%s" AND `password` = "%s"',
        $username, $password);
    $result = $conn->query($sql);
    if (!$result) {
        header("Location: ./login.php?errcode=3");
        exit();
    }
    if (!$result->num_rows) {
        header("Location: ./login.php?errcode=2");
        exit();
    }

    $_SESSION['username'] = $username;
    header('Location: ./index.php');
?>
