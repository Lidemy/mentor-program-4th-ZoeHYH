<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    if (empty($_POST['id'])) {
        err('admin', '1');
    }
    $id = $_POST['id'];
    
    $stmt = $conn->prepare('UPDATE ZoeHYH_articles SET is_deleted=1 WHERE id=?');
    $stmt->bind_param('i', $id);
    $result = $stmt->execute();
    if (!$result){
        err('admin', '1');
    }
    header('Location: ./admin.php');
?>