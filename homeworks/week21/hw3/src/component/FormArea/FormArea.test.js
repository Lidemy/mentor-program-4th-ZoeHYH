import { render, screen } from "@testing-library/react";
import FormArea from "./FormArea";

test("renders learn react link", () => {
  render(<FormArea />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
