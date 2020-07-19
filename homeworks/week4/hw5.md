## 請以自己的話解釋 API 是什麼
API 是交換資訊的界面， Web API 就是在網路上交換資訊的界面， API 的提供者會選擇性地提供資訊。就像在書店，書架的位置就是 Web API 的網址，書架就是 API 這個交換資訊的界面，而 API
提供的資訊，就像書架上選擇性擺上的書目，還有其他書放在倉庫裡。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1. 206 Partial Content：部分 GET 請求已成功處理，下載工具用來做斷點續傳、大文件分解下載。
2. 405 Method Not Allowed：大部分伺服器接收到PUT或DELETE改寫資源的請求時使用，回覆的 Allow Header 資訊會列出可用請求。
3. 415 Unsupported Media Type：上傳檔案格式不支援。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL: https://zoes-restcountries-platform.com/api
---
－－功用－－｜Method｜/ 後輟－－－－｜/參數｜回傳資訊
回傳所有餐廳｜   GET｜ /restaurants｜   無｜－－－無
回傳單一餐廳｜   GET｜  /restaurant｜   id｜－－－無
刪除特定餐廳｜DELETE｜  /restaurant｜   id｜－－－無
新增餐廳資訊｜  POST｜  /restaurant｜   無｜－－－可
更改餐廳資訊｜ PATCH｜  /restaurant｜   id｜－－－可
---
回傳資訊：
id:   餐廳代碼
name: 餐廳名稱