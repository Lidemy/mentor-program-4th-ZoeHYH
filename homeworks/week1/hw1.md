## 交作業流程
1. 將專案複製到本地電腦 `git clone 網址`
2. 在專案資料夾裡，每週建立一個新分支 `git branch week?`
3. 移到新分支 `git checkout week?`，修改檔案，撰寫作業
4. 將新作業加入版本控制 `git add .`
5. 將暫存的檔案提交 `git commit -m"week? 完成"`
6. 將分支推上雲端 `git push -u origin week?`
7. 在 GitHub 發出 Pull request
8. 助教審核通過後會 `merge` 到 `master`，再把 `master` `pull` 下到本地的 `master` 並刪除 `week?` 分支
