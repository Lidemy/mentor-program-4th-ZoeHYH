輸出結果是：
i: 0
i: 1
i: 2
i: 3
i: 4
5
5
5
5
5

在瀏覽器的 WebAPI，在 Node.js 會是 C++API，以下統一用 WebAPI 解說。

1. 首先第一圈執行，i = 0，`console.log('i: ' + i)`印出 i: 0，setTimeout 被排入 WebAPI 的執行續，0 秒後`() => { console.log(i) }`被排進任務佇列。
2. 第二圈 i = 1，`console.log('i: ' + i)`印出 i: 1，setTimeout 被排入 WebAPI 的執行續，1 秒後`() => { console.log(i) }`被排進任務佇列。
3. 第三圈 i = 2，`console.log('i: ' + i)`印出 i: 2，setTimeout 被排入 WebAPI 的執行續，2 秒後`() => { console.log(i) }`被排進任務佇列。
4. 第四圈 i = 3，`console.log('i: ' + i)`印出 i: 3，setTimeout 被排入 WebAPI 的執行續，3 秒後`() => { console.log(i) }`被排進任務佇列。
5. 第五圈 i = 4，`console.log('i: ' + i)`印出 i: 4，setTimeout 被排入 WebAPI 的執行續，4 秒後`() => { console.log(i) }`被排進任務佇列。

印完`i: i`，stack 已空， Event Loop 開始將任務佇列的第一項任務排進 stack。
需要注意的是由於 setTimeout 的秒數從排進 WebAPI 開始算，所以每一次印出`console.log(i)`間不會間隔到設定的秒數。
另外，var 在迴圈宣告的值儲存在 Global Scope EC 的 AO，每一圈迴圈執行都會對 i 重新賦值，最後 i 加 1 等於 5，小於 5 的條件不成立，迴圈停止，所以當`() => { console.log(i) }`開始執行時，在本身 EC 的 AO 找不到 i，往上找到 global EC 的 VO，i 的值會是 5。

6. 排進`() => { console.log(i) }`，印出 5，佇列已空。
7. 排進`() => { console.log(i) }`，印出 5，佇列已空。
8. 排進`() => { console.log(i) }`，印出 5，佇列已空。
9. 排進`() => { console.log(i) }`，印出 5，佇列已空。
10. 排進`() => { console.log(i) }`，印出 5，佇列已空。
