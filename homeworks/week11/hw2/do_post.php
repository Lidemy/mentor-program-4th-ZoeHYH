<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    if (empty($_POST['title']) || empty($_POST['type_id']) || empty($_POST['content'])) {
        err('/article.php?id=' . $id, '1');
    }
    $title = $_POST['title'];
    $type_id = $_POST['type_id'];
    $content = $_POST['content'];
    
    $stmt = $conn->prepare('INSERT INTO ZoeHYH_articles(title, type_id, content) VALUES (?, ?, ?)');
    $stmt->bind_param('sis', $title, $type_id, $content);
    $result = $stmt->execute();
    if (!$result){
        err('/article.php?id=' . $id, '1');
    }
    header('Location: ./article.php?id=' . $id);
?>