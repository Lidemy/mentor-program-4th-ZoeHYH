<?php
    require_once('./conn.php');

    function err($page, $code) {
        if (strpos($page, '?')) {
            header('Location: .' . $page .'&errcode=' . $code);
            exit();
        }
        header('Location: .' . $page .'?errcode=' . $code);
        exit();
    }

    function escape($str) {
        return htmlspecialchars($str, ENT_QUOTES);
    }

    function idTypeName($id) {
        global $conn;
        $stmt= $conn->prepare('SELECT `name` FROM ZoeHYH_types WHERE id=?');
        $stmt->bind_param('i', $id);
        $result = $stmt->execute();
        if (!$result) {
            die('No Data');
        } else {
            $result = $stmt->get_result();
            if ($result->num_rows === 0) {
                die('No Data');
            }
            $row = $result->fetch_assoc();
        }
        return $row['name'];
    }
?>