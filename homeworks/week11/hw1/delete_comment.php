<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    if (empty($_GET['id'])) {
        header("Location: ./index.php?errcode=2");
        exit();
    }

    $id = $_GET['id'];
    $username = $_SESSION['username'];

    if (getCommentByID($id)['username'] === $username || getUserByUsername($_SESSION)['identity'] == 2) {
        $sql = 'UPDATE `ZoeHYH_comments` SET `is_deleted`=1 WHERE `id`=?';
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('i', $id);
        $result = $stmt->execute();
        if (!$result) {
            header("Location: ./index?errcode=2");
            exit();
        }
    }
    header('Location: ./index.php');
?>
