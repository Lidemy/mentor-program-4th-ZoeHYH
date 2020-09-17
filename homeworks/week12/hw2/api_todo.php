<?php
    require_once('./conn.php');
    require_once('./utils.php');
    header('Content-type: application/json;charset=utf-8');
    header('Access-Control-Allow-Origin: *');

    if (empty($_GET['id'])) {
        $json = array(
            "ok" => false,
            "message" => "Please input id"
        );
        $response = json_encode($json);
        echo $response;
        die();
    }

    $id = $_GET['id'];

    $stmt = $conn->prepare('SELECT * FROM ZoeHYH_todos WHERE id=?');
    $stmt->bind_param('i', $id);
    $result = $stmt->execute();
    if (!$result) {
        $json = array(
            "ok" => false,
            "message" => $conn->error
        );
        $response = json_encode($json);
        echo $response;
        die();
    }
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $json = array(
        "ok" => true,
        "id" => $row['id'],
        "todos" => $row['content']
    );
    $response = json_encode($json);
    echo $response;
?>