<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    if (empty($_POST['id'])) {
        err('/article.php?id=' . $id, '1');
    }
    $id = $_POST['id'];
    
    $stmt = $conn->prepare('UPDATE ZoeHYH_articles SET is_deleted=1 WHERE id=?');
    $stmt->bind_param('i', $id);
    $result = $stmt->execute();
    if (!$result){
        err(strrchr($_SERVER['HTTP_REFERER'], '/'), '1');
    }
    header('Location: .' . strrchr($_SERVER['HTTP_REFERER'], '/'));
?>