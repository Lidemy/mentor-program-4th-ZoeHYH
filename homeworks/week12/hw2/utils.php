<?php
    function returnErr($msg) {
        $json = array(
            "ok" => false,
            "message" => $msg
        );
        $response = json_encode($json);
        echo $response;
        die();
    }
?>