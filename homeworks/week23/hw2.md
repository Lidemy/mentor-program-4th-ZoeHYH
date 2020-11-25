## 為什麼我們需要 Redux？

如果專案變得龐大且太複雜，用 Redux 統一管理 status，可以將 UI 元件與變更 status 的動作分開，更好管理與維護，例如：透過 redux 我們可以知道畫面上的哪個元件變更了資料。

## Redux 是什麼？可以簡介一下 Redux 的各個元件跟資料流嗎？

Redux 是一個管理 State，也就是 UI 元件資料的一種架構。

以下介紹各個元件：

- Dispatch 會將動作 Action 發送至 Store，事件處理的方法負責執行 Dispatch。
  - Action 是包含動作類型與變更資料的物件，由 Dispatch 發送給 Store，讓 Reducer 改變 State。
- Store 包含了 State 與 Reducer。
  - Reducer 負責初始化 State，並包含所有牽涉到 State 的方法，Reducer 依接收到的動作 Action，執行對應的方法。

Redux 是單向資料流，畫面上的 UI 觸發事件，事件方法讓 Dispatch 發送動作物件 Action 給 Store，Store 中的 Reducer 接收到動作物件 Action 就會執行對應動作，State 的變更重新渲染 UI。

## 該怎麼把 React 跟 Redux 串起來？

使用 Hook 版本的 Redux 的話，只要在 UI 需要 State 的時候，用 `useSelector` 拿出 State 資料，並在 UI 的事件方法裡，`useDispatch` 發送動作物件 Action，讓 Reducer 執行動作。
