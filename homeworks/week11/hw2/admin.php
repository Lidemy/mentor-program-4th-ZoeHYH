<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    permit($_SESSION['username']);

    $stmt = $conn->prepare('SELECT * FROM ZoeHYH_articles WHERE is_deleted!=1 ORDER BY created_at DESC');
    $result = $stmt->execute();
    if (!$result){
        err('admin', '1');
    }
    $result = $stmt->get_result();
    if ($result->num_rows === 0) {
        err('admin', '1');
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
    ?>
    <nav>
        <div class="container">
            <div>
                <a class="logo" href="./index.php">Zoe's Blog</a>
                <a href="./list.php">文章列表</a>
                <a href="#">分類專區</a>
                <a href="#">關於我</a>
            </div>
            <div>
                <a href="./post.php">新增文章</a>
                <a href="./do_logout.php">登出</a>
            </div>
        </div>
    </nav>
    <section class="banner bg_toblack">
        <h1>存放技術之地-後臺</h1>
        <p>Welcome to my blog</p>
    </section>
    <main class="admin">
        <?php while ($articles = $result->fetch_assoc()) { ?>
        <article>
            <div class="title">
                <h2><?php echo escape($articles['title']); ?></h2>
                <div>
                    <span class="info_item"><?php echo escape($articles['created_at']); ?></span>
                    <form action="./edit.php" method="post">
                        <input type="hidden" name="id" id="id" value="<?php echo $articles['id']; ?>">
                        <input type="submit" value="編輯">
                    </form>
                    <form action="./do_delete.php" method="post">
                        <input type="hidden" name="id" id="id" value="<?php echo $articles['id']; ?>">
                        <input type="submit" value="刪除">
                    </form>
                </div>
            </div>
        </article>
        <?php } ?>
    </main>
    <footer>
        <p>Copyright © 2020 Zoe's Blog All Rights Reserved.</p>
    </footer>
</body>
</html>