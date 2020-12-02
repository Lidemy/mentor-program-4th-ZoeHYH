## Redux middleware 是什麼？

middleware 是中間件，在輸入到輸出的過程中增加一個處理輸入的步驟。

增加 middleware 後，事件觸發，程式 Dispatch 動作 Action，Action 會經過 middleware，mi ｄ dleware 處理過後，再 Dispatch 給 store 中的 Reducer。

## CSR 跟 SSR 差在哪邊？為什麼我們需要 SSR？

CSR 是指畫面由前端 JavaScript 動態產生，HTML 裡沒有可供 SEO 的內容。

SSR 是指畫面由伺服器端回傳的 HTML 檔案產生，可供 SEO。

為了良好的 SEO，必須將 CSR 結合 SSR，讓初始畫面由伺服器端回傳的 HTML 檔案渲染，後續動態增減頁面元素再由 JavaScript 執行。

## React 提供了哪些原生的方法讓你實作 SSR？

`ReactDOMServer.renderToString();` 可以將 React 的元素轉成 HTML 字串，加進 HTML 檔案，由伺服器端解析成 HTML 。

`ReactDOM.hydrate();` 讓 `ReactDOMServer.renderToString();` 加入檔案的 HTML 字串可以有事件觸發等功能。

## 承上，除了原生的方法，有哪些現成的框架或是工具提供了 SSR 的解決方案？至少寫出兩種

Prerender.io 會先開一個客戶端訪問網站後儲存結果，將結果回傳給真正的客戶端。

Next.js 則是 React 框架，內建 SSR。
