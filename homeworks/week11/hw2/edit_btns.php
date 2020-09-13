<div>
    <form action="./edit.php" method="post">
        <input type="hidden" name="id" id="id" value="<?php echo $articles['id']; ?>">
        <input type="submit" value="編輯">
    </form>
    <form action="./do_delete.php" method="post">
        <input type="hidden" name="id" id="id" value="<?php echo $articles['id']; ?>">
        <input type="submit" value="刪除">
    </form>
</div>