## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
VARCHAR 可以用來儲存較短的字串，可以設定長度，TEXT 可以儲存較長的字串，選擇適當的型態可以減少記憶體的占用。

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
Cookie 是伺服器端，也就是網站，存在客戶端，也就是使用者瀏覽器上的小型文字檔。

瀏覽器第一次造訪網站時，伺服器端會將 Cookie 內容放在 Response Header 裡的 Set-Cookie，瀏覽器儲存後，在下一次造訪同一個網站時，把上一次儲存的 Cookie 內容存進 Request Header 裡的 Cookie，發送 request 時一並送給伺服器。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
GET 與 POST 的數值可以被竄改，課程影片提過的 cookie 被竄改問題。

應該要檢查從帳號找使用者資料的函式是否成功運作。

註冊後直接進入登入狀態應該比較方便。
