import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("Card component", () => {
  test("renders the Card component with the required props", () => {
    const { getByText, getByAltText } = render(
      <Card
        title="Test Title"
        content="Test Content"
        imgPath="/test-image.jpg"
      />
    );

    // Check if the title is rendered
    expect(getByText("Test Title")).toBeInTheDocument();
    // Check if the content is rendered
    expect(getByText("Test Content")).toBeInTheDocument();
    // Check if the image is rendered with the correct alt text
    expect(getByAltText("my image")).toBeInTheDocument();
    expect(getByAltText("my image")).toHaveAttribute("src", "/test-image.jpg");
  });
  test("applies customClass when provided", () => {
    const { container } = render(
      <Card
        title="Test Title"
        content="Test Content"
        imgPath="/test-image.jpg"
        customClass="my-custom-class"
      />
    );

    // Check if the customClass is applied
    expect(container.firstChild).toHaveClass("my-custom-class");
  });
  test("does not apply customClass when not provided", () => {
    const { container } = render(
      <Card
        title="Test Title"
        content="Test Content"
        imgPath="/test-image.jpg"
      />
    );

    // Check if the customClass is not applied
    expect(container.firstChild).not.toHaveClass("my-custom-class");
  });
});
