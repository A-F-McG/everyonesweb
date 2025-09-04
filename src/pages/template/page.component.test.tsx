import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Page } from "./page.component";
import { ThemeProvider } from "@emotion/react";
import { themeLight } from "../../theme/theme";

describe("Page template", () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={themeLight}>
        <Page title="title">
          <>Page content</>
        </Page>
      </ThemeProvider>
    )
  );

  it("should set the document title for screen readers", () => {
    expect(document.title).toBe("title");
  });
});
