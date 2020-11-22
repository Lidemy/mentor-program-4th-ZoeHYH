const TITLE = "TODO LIST";
const EXPLANATION = {
  normal: "在這裡輸入新的 Todo！",
  empty: "你沒有輸入 Todo 喔！",
};
const FILTER_CONTENT = [
  { name: "全部", value: "all" },
  { name: "完成", value: "done" },
  { name: "未完成", value: "undone" },
];
const BUTTON_TEXT = {
  add: "新增",
  done: "完成",
  undone: "未完成",
  delete: "刪除",
  save: "儲存",
  deleteDone: "完成刪除",
};
const LOCAL_STORAGE_KEY = "myTodoList";

export { TITLE, EXPLANATION, FILTER_CONTENT, BUTTON_TEXT, LOCAL_STORAGE_KEY };
