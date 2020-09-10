<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    permit($_SESSION['username']);

    if (empty($_POST['id'])) {
        err('admin', '1');
    }
    $id = $_POST['id'];

    $stmt = $conn->prepare('SELECT * FROM ZoeHYH_articles WHERE id=?');
    $stmt->bind_param('i', $id);
    $result = $stmt->execute();
    if (!$result){
        err('admin', '1');
    }
    $result = $stmt->get_result();
    if ($result->num_rows === 0) {
        err('admin', '1');
    }
    $article = $result->fetch_assoc();

    $stmt = $conn->prepare('SELECT * FROM ZoeHYH_types ORDER BY created_at DESC');
    $result = $stmt->execute();
    if (!$result){
        err('post', '1');
    }
    $result = $stmt->get_result();
    if ($result->num_rows === 0) {
        err('post', '1');
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
                <a href="./admin.php">管理後臺</a>
                <a href="./do_logout.php">登出</a>
            </div>
        </div>
    </nav>
    <section class="banner bg_toblack">
        <h1>存放技術之地-編輯文章</h1>
        <p>Welcome to my blog</p>
    </section>
    <main class="post">
        <article>
            <form action="./do_update.php" method="post">
                <label for="title">發表文章：</label>
                <input type="text" name="title" id="title" value="<?php echo escape($article['title']); ?>">
                <select name="type_id" id="type_id">
                    <?php while ($types = $result->fetch_assoc()) { ?>
                    <option value="<?php echo $types['id']; ?>" <?php if ($types['id'] === $article['type_id']) echo 'selected'; ?>><?php echo escape($types['name']); ?></option>
                    <?php } ?>
                </select>
                <textarea name="content" id="content" rows="20"><?php echo escape($article['content']); ?></textarea>
                <input type="hidden" name="id" id="id" value="<?php echo $id; ?>">
                <input type="submit" value="送出文章">
            </form>
        </article>
    </main>
    <footer>
        <p>Copyright © 2020 Zoe's Blog All Rights Reserved.</p>
    </footer>
</body>
</html>