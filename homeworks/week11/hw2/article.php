<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    $login = !empty($_SESSION['username']);

    if (empty($_GET['id'])){
        err('index', '1');
    }
    $id = $_GET['id'];
    $stmt = $conn->prepare('SELECT * FROM ZoeHYH_articles WHERE id=?');
    $stmt->bind_param('i', $id);
    $result = $stmt->execute();
    if (!$result){
        err('index', '1');
    }
    $result = $stmt->get_result();
    if ($result->num_rows === 0) {
        err('index', '1');
    }
    $articles = $result->fetch_assoc();
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
    <nav>
        <div class="container">
            <div>
                <a class="logo" href="./index.php">Zoe's Blog</a>
                <a href="./list.php">文章列表</a>
                <a href="#">分類專區</a>
                <a href="#">關於我</a>
            </div>
            <div>
                <?php
                    if ($login) {
                        echo '<a href="./post.php">新增文章</a>';
                        echo '<a href="./admin.php">管理後臺</a>';
                        echo '<a href="./do_logout.php">登出</a>';
                    } else {
                        echo '<a href="./login.php">登入</a>';
                    }
                ?>
            </div>
        </div>
    </nav>
    <section class="banner bg_toblack">
        <h1>存放技術之地</h1>
        <p>Welcome to my blog</p>
    </section>
    <main>
        <article>
            <div class="title">
                <h2><?php echo escape($articles['title']); ?></h2>
                <div>
                    <?php if ($login) { ?>
                    <form action="./edit.php" method="post">
                        <input type="hidden" name="id" id="id" value="<?php echo $articles['id']; ?>">
                        <input type="submit" value="編輯">
                    </form>
                    <form action="./do_delete.php" method="post">
                        <input type="hidden" name="id" id="id" value="<?php echo $articles['id']; ?>">
                        <input type="submit" value="刪除">
                    </form>
                    <?php } ?>
                </div>
            </div>
            <div class="info">
                <span class="info_item"><i class="far fa-clock"></i><?php echo escape($articles['created_at']); ?></span>
                <a class="info_item" href="#"><i class="far fa-folder"></i><?php echo escape(idTypeName($articles['type_id'])); ?></a>
            </div>
            <p><?php echo escape($articles['content']); ?></p>
        </article>
    </main>
    <footer>
        <p>Copyright © 2020 Zoe's Blog All Rights Reserved.</p>
    </footer>
</body>
</html>