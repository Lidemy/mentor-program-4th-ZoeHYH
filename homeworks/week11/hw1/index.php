<?php
    session_start();
    require_once('./conn.php');
    require_once('./utils.php');

    $page = 1;
    if (!empty($_GET['page'])) {
        $page = intval($_GET['page']);
    }             
    $limit = 10;
    $offset = ($page - 1) * $limit;

    $isLogin = !empty($_SESSION['username']);
    $user = NULL;
    $username = NULL;
    $identity = NULL;
    if ($isLogin) {
        if ($user = getUserByUsername($_SESSION)) {
            $nickname = $user['nickname'];
            $username = $user['username'];
            $identity = $user['identity'];
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
                <?php } else { if ($identity == 2) { ?>
                <a href="./identity.php" class="btn">使用者身分</a>
                <?php } ?>
                <button class="btn nickname" type="button">編輯暱稱</button>
                <a href="./logout.php" class="btn">登出</a>
                <?php } ?>
            </div>
        </div>
    </nav>
    <main>
        <div class="container">
            <section class="input_section">
                <h2><?php if ($isLogin) { echo escape($nickname) . ' 留言';} ?></h2>
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
                <?php } else if ($identity == 0) { ?>
                <p class="err">您已遭停權</p>
                <?php } else { ?>
                <form class="oneline_form hide nickname" action="./update_nickname.php" method="post">
                    <label for="nickname">新的暱稱<input type="text" name="nickname" id="nickname"></label>
                    <input class="btn" type="submit" value="提交">
                </form>
                <form action="./post.php" method="post">
                    <textarea name="comment" id="comment" rows="10" placeholder="請輸入留言"></textarea>
                    <input type="submit" value="提交" class="btn">
                </form>
                <?php } ?>
            </section>
            <section>
                <?php
                    $stmt = $conn->prepare('SELECT C.id AS id, C.comment AS comment, C.created_at AS created_at, U.nickname AS nickname, U.username AS username FROM `ZoeHYH_comments` AS C LEFT JOIN `ZoeHYH_users` AS U ON C.username = U.username  WHERE C.is_deleted!=1 ORDER BY C.id DESC LIMIT ? OFFSET ?');
                    $stmt->bind_param('ii', $limit, $offset);
                    $result = $stmt->execute();
                    if (!$result) {
                        header("Location: ./index.php?errcode=2");
                        exit();
                    }
                    $result = $stmt->get_result();
                    while ($row = $result->fetch_assoc()) {
                ?>
                <div class="item">
                    <div class="avatar"></div>
                    <div class="content">
                        <p class="info"><span><?php echo escape($row['nickname']); ?>(@<?php echo escape($row['username']); ?>)</span><?php echo escape($row['created_at']); ?></p>
                        <?php if ($row['username'] === $username || $identity == 2) { ?>
                        <a class="inline_btn" href="./edit_comment.php?id=<?php echo $row['id']; ?>">編輯</a>
                        <a class="inline_btn" href="./delete_comment.php?id=<?php echo $row['id']; ?>">刪除</a>
                        <?php } ?>
                        <hr>
                        <p><?php echo escape($row['comment']); ?></p>
                    </div>
                </div>
                <?php } ?>
            </section>
            <?php
                $stmt = $conn->prepare('SELECT COUNT(id) AS count from `ZoeHYH_comments` WHERE is_deleted!=1');
                $result = $stmt->execute();
                $result = $stmt->get_result();
                $row = $result->fetch_assoc();
                $count = $row['count'];
                $total_pages = ceil($count/$limit);
            ?>
            <p class="page_info">總共有<?php echo $total_pages; ?>頁</p>
            <div class="page_info">
                <?php if ($page != 1) { ?>
                <a class="inline_btn" href="./index.php?page=1">首頁</a>
                <a class="inline_btn" href="./index.php?page=<?php echo $page - 1; ?>">上一頁</a>
                <?php } ?>
                <?php if ($page != $total_pages) { ?>
                <a class="inline_btn" href="./index.php?page=<?php echo $page + 1; ?>">下一頁</a>
                <a class="inline_btn" href="./index.php?page=1">末頁</a>
                <?php } ?>
            </div>
        </div>
    </main>
    <script>
        let btn = document.querySelector('button.nickname');
        btn.addEventListener('click', () => {
            let form = document.querySelector('form.nickname');
            form.classList.toggle("hide");
        })
    </script>
</body>
</html>