import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { FixedWidthImg } from "./image.component";

describe("Automatically sized images since next js is weird and requires width and height upfront", () => {
  describe("For square images", () => {
    beforeEach(() => render(<FixedWidthImg src="/src" alt="alt" />));

    it("should pass along the alt text", () => {
      expect(screen.queryByAltText("alt")).toBeTruthy();
    });

    it("should have default height and width if not set, which it doesn't need to be because it's square", () => {
      expect(screen.getByAltText("alt")).toHaveAttribute("width", "280");
      expect(screen.getByAltText("alt")).toHaveAttribute("height", "280");
    });
  });

  it("should set correct height if not a square", () => {
    render(<FixedWidthImg src="/src" alt="alt" width={2} height={1} />);

    expect(screen.getByAltText("alt")).toHaveAttribute("width", "280");
    expect(screen.getByAltText("alt")).toHaveAttribute("height", "140");
  });
});
