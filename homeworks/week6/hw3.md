## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. `<audio>`配合`<source>`標籤可以插入音訊檔案。
2. `<time>`可以用來標示日期、時間文字，並可使用`datetime`屬性提供瀏覽器看得懂的格式化時間。
3. `<figure>`可以標示多個圖片並用一個`<figcaption>`標示圖片的標題與段落。

## 請問什麼是盒模型（box modal）
盒模型是指 HTML 元素本質上是一個盒子，從外而內由 margin 外邊距、border 邊界、padding 內邊距與實際內容構成的盒子。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
inline 不會斷行，不能調整寬高，上下距離的調整有限且無法影響其它元素。

inline-block 不會斷行，但可以做所有調整，且會影響其他元素。

block 會斷行，可做所有調整，影響其它元素。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
static 是依照 display 設定由上往下定位，是預設的定位方式。

relative 是相對原本的位置調整定位，且後續調整不影響元素的排列。

absolute 是相對上層除了 static 以外的元素做定位，最終可能會依瀏覽器做定位，因為會脫離原本的排列，所以會影響其他元素的排列。

fixed 是依照 viewport 也就是瀏覽器的範圍做定位，一樣脫離排列，不影響其它元素。
