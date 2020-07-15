## 跟你朋友介紹 Git
### 到底什麼是 Git ？什麼是 GitHub ？
Git 是一個版本管理系統，想像一群工程師在工作，由於每個人負責的部分不同，不只1~8版，可能還同時存在1-4、5-7、8-9......等各種版本，要怎麼把不同版本合在一起？Git就是一套幫忙管理的系統！

GitHub 則是一個雲端服務，讓工程師們可以遠端使用 Git 管理程式！

---
### 開始使用 Git 吧！
我們可以選擇使用圖形化界面，這裡主要介紹 comment line 的用法，首先我們打開 git CMD 或其他使用 IOS / Linux 語法的開發工具。

進到想要管理的檔案所在地，輸入`git init` 初始化，創建 .git 資料夾。

### 現在是什麼狀況？
我們可以輸入 `git status` 看一下這些檔案的狀況。

檔案有四種狀態。
1. Untracked (未追蹤)：檔案目前不在 Git 裡
2. Modfied (已修改)：檔案目前在 Git 的 Working Directory (工作區)
3. Staged (暫存)：檔案目前在 Git 的 Staging Area (暫存區)
4. Committed (已提交)： Git 的 Repository (儲存庫)

只有 Committed 狀態下，修改的檔案才算是有被存到。

而輸入 `git log` 可以查看目前建立了哪些commit， `git log --oneline` 則是較簡單的紀錄。

---
#### 新成員加入 Staging Area ！
我們輸入`git add 檔案名稱` 暫存檔案， 也可以使用 `git add .` 暫存這個位置的所有檔案。

#### 加錯人了！怎麼讓它離開暫存區？
輸入 `git rm --cached 檔案名稱` 可以移出這個檔案。
如果加錯版本，則可以輸入 `git reset HEAD ` 重置目前的 commit 。

#### 你別待這裡！把檔案加入 .gitignore，讓 Git 忽略它！
輸入 `touch  .gitignore` 建立檔案，使用 `vim  .gitignore` 在檔案裡加入要忽略的檔案名稱。

#### 使用 vim 文字編輯器，沒安裝也有比較基本的 vi ！
一開始進入 vim 會來到普通模式，你可以使用下列指令操作：
```
i 進入 insert 模式
o 在新一行進入 insert 模式
:q 不儲存離開 vim ，需要近一步確認的步驟
:wq write and quit ，儲存並離開
```
進入 insert 模式輸入文字、程式碼，按下 `Esc` 鍵就可以回到普通模式。

#### 就是你了，來提交版本吧！
輸入 `git commit` 會新建版本並開啟 vim 要求你輸入 comment ，也就是對版本的敘述或名字。

也可以方便點，輸入 `git commit -m"版本敘述"` 就不用進入 vim 界面了。

更方便的做法，我們輸入 `git commit -am"版本敘述"` 省略 add 步驟，但這個步驟只是把已修改的檔案提交，未追蹤檔案仍需要使用 `git add 未追蹤檔案名稱` 加入 Git 管理。

#### 我們不一樣！
輸入 `git show` 可以查看詳細的修改內容。

`git diff` 則可以比較相異處：
```cli
git diff 比較已修改檔案與上一個commit
git diff 檔案名稱 比較已修改的本檔案與上一個commit
git diff 版本代號 比較已修改檔案與該版本
git diff 版本代號 版本代號 比較兩個版本
```
---
### 請求支援！
如果忘記了指令用法也沒關係，可以輸入 `git help 想查詢指令` 或 `git 想查詢指令 --help` 查詢說明。

---

### 來了！建立分支 branch ！
輸入 `git branch 新分支名稱` 可以創建分支。

#### checkout ！
我們可以配合使用 `git checkout 版本代碼至少六碼` 進入某一版本再建立分支，同時，`git checkout 分支名稱` 可以讓我們進入該分支。

#### 看看，一切都錯了！查看並刪除分支！
輸入 `git branch -a` 會列出所有分支，輸入 `git branch -v` 則會有更詳細的清單。

輸入 `git branch -d 分支名稱` 則可以刪除分支。

#### 融合吧！分支！
輸入 `git merge 要融合進來的分支` 把目前分支與另一分支融合。

---
### 打架了！
這時候可能會出現衝突，電腦會把衝突的部分標示進檔案，用 `git status` 查詢衝突檔案，修改好再提交，就可以再次嘗試融合。

---
### 連結 Github
可以使用 HTTPS 開一次連線一次或 SSH 金鑰一勞永逸。
HTTPS：
```cli
git config --global user.name "帳戶名稱"
git config --global user.email "email"
```
SSH：
先查詢電腦中是否已建立 SSH 金鑰，
```cli
cd ~/.ssh
```
無則輸入指令建立，如果中間出現已有金鑰的訊息，就要取消建立，以免覆蓋已使用過的金鑰。
```cli
ssh-keygen -t rsa
```
接著開啟GitHub頁面，到帳戶設定點選 SSH and GPG keys，貼上 id_rsa.pub 的內容。
最後測試是否成功，初次連線會詢問你是否確認，輸入 `yes`。
```cli
ssh -T git@github.com
```

#### 檔案連結 GitHub ！
先在 GitHub 用一樣的資料夾名稱新建專案，在本地輸入指令。
```cli
git remote add origin 你的專案網址
git push -u origin master
```
這樣檔案就推上 GitHub 了！

#### push 和 pull ！
使用 `git push` 可以把目前已提交的檔案推上雲端，`git pull` 則可以把雲端檔案拉下來。

如果想把新的 branch 推上去，第一次必須使用 `git push -u origin`。

#### 複製一份到電腦！
輸入 `git clone 你的專案連結` 就可以從你的帳戶複製一份專案下來，你可以在 GitHub 雲端 `fork` 別人的專案，再 `clone` 到本地電腦！

## 以上就是 Git 的簡單解說！
