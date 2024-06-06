import { render, screen } from "@testing-library/react";

import Header from "./index";

describe("Header component", () => {
  test("rendres the test props correctly", () => {
    const { getByText } = render(<Header text="Hi there" />);
    expect(getByText("Hi there")).toBeInTheDocument();
  });
  test("applies no class when isBold is true", () => {
    const { getByText } = render(<Header text="Hi there" isBold={true} />);
    expect(getByText("Hi there")).not.toHaveClass("isLight");
  });
  test("applies  class when isBold is false", () => {
    const { getByText } = render(<Header text="Hi there" isBold={false} />);
    expect(getByText("Hi there")).toHaveClass("isLight");
  });
  test("applies  class when isBold is not passed as a prop", () => {
    const { getByText } = render(<Header text="Hi there" />);
    expect(getByText("Hi there")).toHaveClass("isLight");
  });
});
