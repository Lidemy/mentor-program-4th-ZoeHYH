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
                <a href="./index.php" class="btn">留言板</a>
                <a href="./signup.php" class="btn">註冊</a>
            </div>
        </div>
    </nav>
    <main>
        <div class="container">
            <section class="input_section">
                <h2>登入</h2>
                <?php
                    if(!empty($_GET['errcode'])) {
                        if ($_GET['errcode'] === '1') {
                ?>
                <p class="err">請完整填寫</p>
                <?php } else if ($_GET['errcode'] === '2') { ?>
                <p class="err">帳密錯誤</p>
                <?php } else if ($_GET['errcode'] === '3') { ?>
                <p class="err">請再試一次</p>
                <?php }} ?>
                <form class="inline_form"action="./do_login.php" method="post">
                    <label for="username">帳號<input type="text" name="username" id="username"></label>
                    <label for="password">密碼<input type="password" name="password" id="password"></label>
                    <input type="submit" value="提交" class="btn">
                </form>
            </section>
        </div>
    </main>
</body>
</html>