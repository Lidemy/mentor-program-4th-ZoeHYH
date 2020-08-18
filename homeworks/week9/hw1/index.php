<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    $isLogin = !empty($_SESSION['username']);
    if ($isLogin) {
        if ($row = getUserByUsername($_SESSION)) {
            $nickname = $row['nickname'];
        } else {
            header("Location: ./index.php?errcode=2");
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>留言板</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <div class="container">
            <h1>留言板</h1>
            <div class="btns">
                <?php if (!$isLogin) { ?>
                <a href="./signup.php" class="btn">註冊</a>
                <a href="./login.php" class="btn">登入</a>
                <?php } else { ?>
                <a href="./logout.php" class="btn">登出</a>
                <?php } ?>
            </div>
        </div>
    </nav>
    <main>
        <div class="container">
            <section>
                <h2><?php if ($isLogin) { echo $nickname . ' ';} ?>留言</h2>
                <?php
                    if(!empty($_GET['errcode'])) {
                        if ($_GET['errcode'] === '1') {
                ?>
                <p class="err">請填寫留言</p>
                <?php } else if ($_GET['errcode'] === '2') { ?>
                <p class="err">請再試一次</p>
                <?php }} ?>
                <?php if (!$isLogin) { ?>
                <p class="err">請先登入</p>
                <?php } else { ?>
                <form action="./post.php" method="post">
                    <textarea name="comment" id="comment" rows="10" placeholder="請輸入留言"></textarea>
                    <input type="submit" value="提交" class="btn">
                </form>
                <?php } ?>
            </section>
            <section>
                <?php
                    $result = $conn->query('SELECT * FROM `ZoeHYH_comments` ORDER BY created_at DESC');
                    if (!$result) {
                        header("Location: ./index.php?errcode=2");
                        exit();
                    }
                    while ($row = $result->fetch_assoc()) {
                ?>
                    <div class="comment">
                    <div class="avatar"></div>
                    <div class="content">
                        <p class="info"><span><?php echo $row['nickname']; ?></span><?php echo $row['created_at']; ?></p>
                        <p><?php echo $row['comment']; ?></p>
                    </div>
                </div>
                <?php } ?>
            </section>
        </div>
    </main>
</body>
</html>