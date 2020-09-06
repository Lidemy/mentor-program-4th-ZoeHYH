<?php
    if (!empty($_SESSION['username'])) {
        header('Location: ./index.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zoe's Blog</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
</head>
<body>
    <?php
        if (!empty($_GET['errcode'])) {
            if ($_GET['errcode'] === '1') {
                echo "<script>alert('請再試一次');</script>";
            } else if ($_GET['errcode'] === '2') {
                echo "<script>alert('無此帳號');</script>";
            } else if ($_GET['errcode'] === '2') {
                echo "<script>alert('密碼錯誤');</script>";
            }
        }
    ?>
    <main class="login">
        <h2>Log In</h2>
        <form action="./do_login.php" method="post">
            <label for="username">username</label>
            <input type="text" name="username" id="username">
            <label for="password">password</label>
            <input type="password" name="password" id="password">
            <input class="bg_black" type="submit" value="sign in">
        </form>
    </main>
</body>
</html>