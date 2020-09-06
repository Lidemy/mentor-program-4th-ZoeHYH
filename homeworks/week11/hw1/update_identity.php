<?php
    session_start();
    require_once('./conn.php');

    if (empty($_POST['username']) || empty($_POST['identity'])) {
        header("Location: ./identity.php?errcode=1");
        exit();
    }

    $username = $_POST['username'];
    $identity = $_POST['identity'];

    $sql = 'UPDATE `ZoeHYH_users` SET `identity` = ? WHERE `username` = ?';
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('is', $identity, $username);
    $result = $stmt->execute();

    if (!$result) {
        header("Location: ./identity.php?errcode=2");
        exit();
    }
    header('Location: ./identity.php');
?>
