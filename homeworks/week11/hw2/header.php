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
            $uri = strrchr($_SERVER['REQUEST_URI'], '/');
            if (!empty($_SESSION['username'])) {
                if (!strpos($uri, 'post')) echo '<a href="./post.php">新增文章</a>';
                if (!strpos($uri, 'admin')) echo '<a href="./admin.php">管理後臺</a>';
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