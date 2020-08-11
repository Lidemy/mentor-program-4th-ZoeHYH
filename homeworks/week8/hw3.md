## 什麼是 Ajax？
非同步 JavaScript  與 XML 技術（Asynchronous JavaScript And XML），簡稱 Ajax。允許程式在等待 response 時先繼續運行，等到拿到 response 再回來執行回調函式。

## 用 Ajax 與我們用表單送出資料的差別在哪？
Ajax 是把 reponse 傳給 JavaScript 處理，`<form>`直接用 HTML 交換資料，reponse 直接傳給瀏覽器選染。

## JSONP 是什麼？
利用不受同源政策管理的`<img>`、`<script>`進行單向傳送。

## 要如何存取跨網域的 API？
發送請求時瀏覽器會自動在 header 加上 origin ，讓伺服器判斷來源是否在 Access-Control-Allow-Origin，允許存取的來源名單裡。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為同源政策是瀏覽器的限制，只要不透過瀏覽器就不會有這項限制。
