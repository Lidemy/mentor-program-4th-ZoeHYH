## 請列出 React 內建的所有 hook，並大概講解功能是什麼

1. useState：用來儲存 Component 會用到的資料，`state` 的改動會引發畫面的重新渲染。state 本身不能直接改動，只能透過 set 函式改動，函式的執行是非同步的。

2. useEffect：傳進 `useEffect` 的函式會在畫面渲染後執行，預設是每一次渲染後觸發，但也可以在第二個值傳進變數組成的陣列，`useEffect` 就會在變數改變時才觸發，傳進空陣列就會只在第一次渲染後觸發。傳進 `useEffect` 的函式也可以回傳一個函式，這個函式會在下一次渲染前使用舊的狀態執行，可以用來清除 `useEffect` 建立的資源。

3. useContext：存進 context 物件的值可以被所有 `<ThemeContext.Provider value={}>` 包夾的物件存取，就不需要透過 prop 一層層傳遞。

4. useReducer：如果 state 太多就適合改用 reducer 管理，將處理函數與初始值傳進 `useReducer()`，就會回傳處理過後的 state 與用來接收參數的 `dispatch()`，參數會被傳給處理函數，控制處理方式。

5. useCallback：一般的 component 內的函式會在每次 component 重新渲染時重新建立，但使用 `useCallback()` 就可以避免，如果這個函式是放進 `useEffect()` 陣列內的變數，就可以避免函式重新建立引起 effect 的執行。

6. useMemo：傳進 `useMemo()` 的函式只有值改變才會在渲染時執行。

7. useRef：會傳出一個物件，物件的 `.current` 屬性會是傳進 `useRef` 的初始值。重新渲染不會改變 `.current`，`.current` 改變也不會觸發重新渲染。也可以用來存取 DOM 節點，不論節點的改變，`.current` 都會是對應的節點。

8. useImperativeHandle：透過 `ref` 配合 `forwardRef()` 父 component 可以拿到子 component 裡的 HTML 結構的 DOM 節點，但透過 `useImperativeHandle()` 可以只傳遞操控該 DOM 節點的方法。

9. useLayoutEffect：與 `useEffect` 唯一的不同就是它是在 DOM 改變之後，畫面繪製之前執行。

10. useDebugValue：在自定義的 Hook 中使用，傳進 `useDebugValue()` 的值會在開發人員工具中會作為標籤顯示在該 Hook 旁。

## 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點

Mount 指的是 component 初始化建構，加入 DOM 渲染到畫面上的過程，以下的方法會依照順序被呼叫。

1. `constructor() {}`
2. `static getDerivedStateFromProps(props, state)` 回傳物件就會更新 `state` 或回傳 `null` 表示不需要更新，較少用到，讓 `state` 因 `prop` 的更改更新。
3. `render()`
4. `componentDidMount()` 在 Mount 後被呼叫，這個時機適合發出網路請求，在方法內呼叫 `setState()` 會在螢幕更新前觸發額外的一次渲染。

Update 指的是 component 因 `state` 或 `prop` 的變化而重新渲染。

1. `static getDerivedStateFromProps(props, state)`
2. `shouldComponentUpdate(nextProps, nextState)` 可以比較新舊 `prop` 、 `state`，回傳 `false ` 會跳過這次更新。
3. `render()`
4. `getSnapshotBeforeUpdate(prevProps, prevState)` 可以在 DOM 改變前從中抓取一些資料回傳，回傳值會傳給 `componentDidUpdate()`。
5. `componentDidUpdate(prevProps, prevState, snapshot)` 在更新後被呼叫，接收舊的 `prop` 與 `state` ，可以進行前後比較，再決定是否執行 `setState()` 或發出網路請求。第三個參數 `snapshot` 會接收來自 `getSnapshotBeforeUpdate()` 的回傳值。

Unmount 指的是 component 從 DOM 中移除。

1. `componentWillUnmount()` 在 component Unmount 、摧毀前，將要從 DOM 移除前呼叫，可以用來清除一些遺留的資料。

錯誤處理是指在生命週期中發生錯誤。

1. `static getDerivedStateFromError(error)` 接收錯誤並回傳值以更新 `state`。
2. `componentDidCatch(error, info)` 第二個參數會接收到包含詳細錯誤位置的資訊。

## 請問 class component 與 function component 的差別是什麼？

class component 是用 class 的方式建立一個 component，class 裡可以定義不同的方法，固定會有 `constructor()`、`render()`，可以自己加入其他方法供這個 component 調用。

function component 則是用函式建立 component，回傳的元件會被渲染到畫面上，也可以在函式裡定義使用 hook 或供 component 使用的函式。

主要差在 component 本身的型態不同，因而撰寫上也有不同的寫法與效果。

## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？

controlled component 的唯一真相來源是 `state`，controlled component 將 `state` 作為 `prop` 接收，，當使用者與 component 互動便會觸發事件，觸發事件就會執行 `state` 的設定函式，更新 `state` 連帶更新 component。資料存在 `state` 裡，畫面與資料同步，方便程式可以立即對使用者的動作做出反應。

uncontrolled component 的唯一真相來源是 component，使用者與 component 互動便會觸發事件，事件就會執行從 component 取得資料的函式。運作方式就像傳統的 HTML 元素，比較容易與非 react 程式碼整合。
