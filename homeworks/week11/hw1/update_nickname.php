<?php
    session_start();
    require_once('./conn.php');

    if (empty($_POST['nickname'])) {
        header("Location: ./index.php?errcode=1");
        exit();
    }

    $username = $_SESSION['username'];
    $nickname = $_POST['nickname'];

    $sql = 'UPDATE `ZoeHYH_users` SET `nickname` = ? WHERE `username` = ?';
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $nickname, $username);
    $result = $stmt->execute();

    if (!$result) {
        header("Location: ./login.php?errcode=2");
        exit();
    }
    header('Location: ./index.php');
?>
