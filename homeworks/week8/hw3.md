## 什麼是 Ajax？
非同步 JavaScript  與 XML 技術（Asynchronous JavaScript And XML），簡稱 Ajax。允許程式在等待 response 時先繼續運行，等到拿到 response 再回來執行回調函式。

## 用 Ajax 與我們用表單送出資料的差別在哪？
Ajax 是把 reponse 傳給 JavaScript 處理，`<form>`直接用 HTML 交換資料，reponse 直接傳給瀏覽器選染。

## JSONP 是什麼？
應用`<script>`不受同源政策管理的特色，讓瀏覽器發送 Request，並藉由 JavaScript 處理 Response。

## 要如何存取跨網域的 API？
瀏覽器必須會先發送一個預檢請求（preflight request），根據收到的 Response Header 中的 Access-Control-Allow-Origin 允許存取的來源名單，判斷是否要發送實際的請求。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為同源政策是瀏覽器的限制，只要不透過瀏覽器就不會有這項限制。
