<?php
    session_start();
    require_once('./conn.php');

    if (empty($_POST['comment'])) {
        header("Location: ./index.php?errcode=1");
        exit();
    }

    $comment = $_POST['comment'];
    $username = $_SESSION['username'];

    $sql = 'INSERT INTO `ZoeHYH_comments`(`username`, `comment`) VALUES (?, ?)';
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $username, $comment);
    $result = $stmt->execute();

    if (!$result) {
        header("Location: ./login.php?errcode=2");
        exit();
    }
    header('Location: ./index.php');
?>
