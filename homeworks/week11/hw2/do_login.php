<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    if (empty($_POST['username']) || empty($_POST['password'])) {
        err('login', '1');
    }
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare('SELECT * FROM ZoeHYH_users WHERE username=?');
    $stmt->bind_param('s', $username);
    $result = $stmt->execute();
    if (!$result){
        err('login', '1');
    }
    $result = $stmt->get_result();
    if ($result->num_rows === 0) {
        err('index', '2');
    }
    $user = $result->fetch_assoc();
    if (!password_verify($password, $user['password'])) {
        err('index', '3');
    }
    $_SESSION['username'] = $username;
    header('Location: ./index.php');
?>