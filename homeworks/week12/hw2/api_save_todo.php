<?php
    require_once('./conn.php');
    require_once('./utils.php');
    header('Content-type: application/json;charset=utf-8');
    header('Access-Control-Allow-Origin: *');

    if (empty($_POST['id']) || empty($_POST['content'])) {
        returnErr("Please input content");
    }
    $id = $_POST['id'];
    $content = $_POST['content'];

    if ($id === 'new') {
        $stmt = $conn->prepare('INSERT INTO ZoeHYH_todos(content) VALUES (?)');
        $stmt->bind_param('s', $content);
        $result = $stmt->execute();
        if (!$result) {
            returnErr($conn->error);   
        }
        $id = $conn->insert_id;
    } else {
        $stmt = $conn->prepare('UPDATE ZoeHYH_todos SET content=? WHERE id=?');
        $stmt->bind_param('si', $content, $id);
        $result = $stmt->execute();
        if (!$result) {
            returnErr($conn->error);   
        }
    }
    $json = array(
        "ok" => true,
        "id" => $id,
    );
    $response = json_encode($json);
    echo $response;
?>