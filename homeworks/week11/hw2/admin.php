<?php
    session_start();
    require_once('./permit.php');
    require_once('./conn.php');
    require_once('./utils.php');

    $stmt = $conn->prepare('SELECT * FROM ZoeHYH_articles WHERE is_deleted!=1 ORDER BY created_at DESC');
    $result = $stmt->execute();
    if (!$result){
        err('/admin.php', '1');
    }
    $result = $stmt->get_result();
    if ($result->num_rows === 0) {
        err('/admin.php', '1');
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
            }
        }
        include_once('./header.php');
    ?>
    <main class="admin">
        <?php while ($articles = $result->fetch_assoc()) { ?>
        <article>
            <div class="title">
                <h2><?php echo escape($articles['title']); ?></h2>
                <span><?php echo escape($articles['created_at']); ?></span>
                <?php 
                    if (!empty($_SESSION['username'])) {
                        include('./edit_btns.php');
                    }
                ?>
            </div>
        </article>
        <?php } ?>
    </main>
    <?php include_once('./footer.php'); ?>
</body>
</html>