<?php
    session_start();
    require_once('./conn.php');

    if (empty($_POST['identity']) || empty($_POST['nickname']) || empty($_POST['username']) || empty($_POST['password'])) {
        header("Location: ./signup.php?errcode=1");
        exit();
    }

    $identity = $_POST['identity'];
    $nickname = $_POST['nickname'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    
    $sql = 'INSERT INTO `ZoeHYH_users`(`identity`, `nickname`, `username`, `password`) VALUES (?, ?, ?, ?)';
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('isss', $identity, $nickname, $username, $password);
    $result = $stmt->execute();
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