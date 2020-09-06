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
    if (empty($_SESSION['username']) || getUserByUsername($_SESSION)['identity'] != 2) {
        header("Location: ./index.php?errcode=2");
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
            <?php
                if(!empty($_GET['errcode'])) {
                    if ($_GET['errcode'] === '1') {
            ?>
            <p class="err">請選擇身分</p>
            <?php } else if ($_GET['errcode'] === '2') { ?>
            <p class="err">請再試一次</p>
            <?php }} ?>
            <div class="btns">
                <a href="./index.php" class="btn">留言板</a>
                <a href="./logout.php" class="btn">登出</a>
            </div>
        </div>
    </nav>
    <main>
        <div class="container">
            <section>
                <h2>身分權限</h2>
                <?php
                    $stmt = $conn->prepare('SELECT * FROM `ZoeHYH_users` ORDER BY created_at DESC');
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
                        <hr>
                        <form class="oneline_form" action="./update_identity.php" method="post">
                            <label for="identity">身分：</label>
                            <select name="identity" id="identity">
                                <option value="0"<?php if ($row['identity'] == 0) echo ' selected'; ?>>停權</option>
                                <option value="2"<?php if ($row['identity'] == 2) echo ' selected'; ?>>管理員</option>
                                <option value="1"<?php if ($row['identity'] == 1) echo ' selected'; ?>>使用者</option>
                            </select>
                            <input type="hidden" name="username" id="username" value="<?php echo $row['username']; ?>">
                            <input class="btn" type="submit" value="提交">
                        </form>
                    </div>
                </div>
                <?php } ?>
            </section>
            <?php
                $stmt = $conn->prepare('SELECT COUNT(id) AS count from `ZoeHYH_users`');
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