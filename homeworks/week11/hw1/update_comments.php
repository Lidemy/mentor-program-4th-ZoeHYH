<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    if (empty($_POST['comment'])) {
        header("Location: ./edit_comment.php?errcode=1&id=" . $_POST['id']);
        exit();
    }

    $username = $_SESSION['username'];
    $id = $_POST['id'];
    $comment = $_POST['comment'];

    if (getCommentByID($id)['username'] === $username || getUserByUsername($_SESSION)['identity'] == 2) {
        $sql = 'UPDATE `ZoeHYH_comments` SET `comment`=? WHERE `id`=?';
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('si', $comment, $id);
        $result = $stmt->execute();
        if (!$result) {
            header("Location: ./edit_comment.php?errcode=2&id=" . $_POST['id']);
            exit();
        }
    }
    header('Location: ./index.php');
?>
