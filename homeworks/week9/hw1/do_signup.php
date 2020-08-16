<?php
    session_start();
    require_once('./conn.php');

    if (empty($_POST['nickname']) || empty($_POST['username']) || empty($_POST['password'])) {
        header("Location: ./signup.php?errcode=1");
        exit();
    }

    $nickname = $_POST['nickname'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = sprintf('INSERT INTO `users`(`nickname`, `username`, `password`) VALUES ("%s", "%s", "%s")',
        $nickname, $username, $password);
    $result = $conn->query($sql);
    if (!$result) {
        if (strpos($conn->error, "Duplicate entry") !== false) {
            header("Location: ./signup.php?errcode=2");
            exit();
        }
        header("Location: ./signup.php?errcode=3");
        exit();
    }
    $_SESSION['username'] = $username;
    header('Location: ./index.php');
?>