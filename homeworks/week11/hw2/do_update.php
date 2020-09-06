<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    if (empty($_POST['id']) || empty($_POST['title']) || empty($_POST['type_id']) || empty($_POST['content'])) {
        err('edit', '1');
    }
    $id = $_POST['id'];
    $title = $_POST['title'];
    $type_id = $_POST['type_id'];
    $content = $_POST['content'];
    
    $stmt = $conn->prepare('UPDATE ZoeHYH_articles SET title=?, type_id=?, content=? WHERE id=?');
    $stmt->bind_param('sisi', $title, $type_id, $content, $id);
    $result = $stmt->execute();
    if (!$result){
        err('post', '1');
    }
    header('Location: ./admin.php');
?>