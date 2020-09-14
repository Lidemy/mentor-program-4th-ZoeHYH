<?php
    require_once('./conn.php');
    header('Content-type:application/json;charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    if (empty($_GET['site_key'])) {
        $json = array(
            "ok" => false,
            "message" => "Please input site_key"
        );
        $response = json_encode($json);
        echo $response;
        die();
    }

    $site_key = $_GET['site_key'];
    $limit = $_GET['limit'];
    $offset = $_GET['offset'];

    $sql = 'SELECT * FROM ZoeHYH_discussions WHERE site_key=? ORDER BY id DESC LIMIT ? OFFSET ?';
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sii', $site_key, $limit, $offset);
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
    $discussions = array();
    while ($row = $result->fetch_assoc()) {
        array_push($discussions, array(
            "nickname" => $row["nickname"],
            "content" => $row["content"],
            "created_at" => $row["created_at"],
        ));
    }

    $json = array(
        "ok" => true,
        "discussions" => $discussions
    );
    $response = json_encode($json);
    echo $response;
?>