<?php
    session_start();
    require_once('./conn.php');
    require_once("utils.php");

    $username = $_SESSION['username'];
    $id = $_GET['id'];

    if($username !== getCommentByID($id)['username'] && getUserByUsername($_SESSION)['identity'] != 2) {
        header("Location: ./index.php");
    }

    $stmt = $conn->prepare('SELECT * FROM `ZoeHYH_comments` WHERE `id` = ?');
    $stmt->bind_param('s', $id);
    $result = $stmt->execute();
    if (!$result) {
        header("Location: ./index.php?errcode=2");
        exit();
    }
    $result = $stmt->get_result();
    if ($result->num_rows === 0) {
        header("Location: ./index.php?errcode=2");
        exit();
    }
    $row = $result->fetch_assoc();
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
            <h1>編輯留言</h1>
            <?php
                if(!empty($_GET['errcode'])) {
                    if ($_GET['errcode'] === '1') {
            ?>
            <p class="err">請填寫留言</p>
            <?php } else if ($_GET['errcode'] === '2') { ?>
            <p class="err">請再試一次</p>
            <?php }} ?>
            <div class="btns">
                <a href="./logout.php" class="btn">登出</a>
            </div>
        </div>
    </nav>
    <main>
        <div class="container">
            <section class="input_section">
                <form action="./update_comments.php" method="post">
                    <textarea name="comment" id="comment" rows="10"><?php echo $row['comment']; ?></textarea>
                    <input type="hidden" name="id" id="id" value="<?php echo $row['id'] ?>">
                    <input type="submit" value="提交" class="btn">
                </form>
            </section>
        </div>
    </main>
</body>
</html>