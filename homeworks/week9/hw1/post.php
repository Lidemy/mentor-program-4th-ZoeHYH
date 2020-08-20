<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    if (empty($_POST['comment'])) {
        header("Location: ./index.php?errcode=1");
        exit();
    }

    $comment = $_POST['comment'];
    
    if ($row = getUserByUsername($_SESSION)) {
        $nickname = $row['nickname'];
    } else {
        header("Location: ./login.php?errcode=2");
        exit();
    }

    $sql = sprintf('INSERT INTO `ZoeHYH_comments`(`nickname`, `comment`) VALUES ("%s", "%s")',
        $nickname, $comment);
    $result = $conn->query($sql);
    if (!$result) {
        header("Location: ./login.php?errcode=2");
        exit();
    }
    header('Location: ./index.php');
?>
