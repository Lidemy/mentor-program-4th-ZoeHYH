import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from "./TodoList";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
