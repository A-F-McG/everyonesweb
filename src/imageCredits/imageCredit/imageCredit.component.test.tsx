import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import { ImageCredit } from "./imageCredit.component";

describe("Single artist credit", () => {
  const artist = "by artiste";
  const link = "link to work";
  const alt = "some suncream";

  beforeEach(() => {
    render(
      <ImageCredit src="/pretendImage" alt={alt} caption={artist} link={link} />
    );
  });

  it("should show the image, obviously", () => {
    expect(screen.queryByAltText(alt)).toBeInTheDocument();
  });

  it("should show the caption", () => {
    expect(screen.getByRole("link", { name: artist })).toHaveAttribute(
      "href",
      link
    );
  });
});
