import { ThemeProvider } from "@emotion/react";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { themeLight } from "../../theme/theme";
import { ActivityTemplate } from "./template.component";
import "@testing-library/jest-dom/extend-expect";
import * as deviceDetect from "react-device-detect"; //<--important

describe("Activity page template", () => {
  describe("On a mobile", () => {
    beforeEach(() => {
      Object.defineProperty(deviceDetect, "isMobile", { get: () => true });
      Object.defineProperty(deviceDetect, "isTablet", { get: () => false });

      render(
        <ThemeProvider theme={themeLight}>
          <ActivityTemplate
            heading="heading"
            issue={<>issue</>}
            description={
              <>
                description<button>description button</button>
              </>
            }
            instructions={<>instructions</>}
            activity={({ isAccessible = true }) => (
              <>
                activity<button>activity button one</button>
                <button>activity button two</button>
              </>
            )}
            solution={<>solution</>}
          />
        </ThemeProvider>
      );
    });

    it("should be open on the activity page by default", () => {
      expect(
        screen.getByRole("tab", { name: "Experience it" })
      ).toHaveAttribute("aria-selected", "true");
    });

    it("should focus back on the first button if something outside the activity box is clicked and then tab is clicked again", () => {
      fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));
      fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));

      fireEvent.click(
        screen.getByRole("button", { name: "description button" })
      );

      fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));

      expect(
        screen.getByRole("button", { name: "activity button one" })
      ).toHaveFocus();
    });

    //TODO write a test about the pressing enter twice resetting to undefined thign

    describe("The accessibility toggle", () => {
      it("should be set to inaccessible initially", () => {
        expect(
          screen.getByRole("radio", { name: "Inaccessible" })
        ).toBeChecked();
      });

      it("should change to accessible if the button is pressed", () => {
        fireEvent.click(screen.getByRole("radio", { name: "Accessible" }));
        expect(screen.getByRole("radio", { name: "Accessible" })).toBeChecked();
      });
    });
  });

  describe("On a tablet", () => {
    it("should show the pretend keyboard", () => {
      Object.defineProperty(deviceDetect, "isMobile", { get: () => false });
      Object.defineProperty(deviceDetect, "isTablet", { get: () => true });

      render(
        <ThemeProvider theme={themeLight}>
          <ActivityTemplate
            heading="heading"
            issue={<>issue</>}
            description={<>description</>}
            instructions={<>instructions</>}
            activity={() => <>activity</>}
            solution={<>solution</>}
          />
        </ThemeProvider>
      );

      expect(screen.queryByRole("button", { name: "tab" })).toBeTruthy();
    });

    it("should show the pretend keyboard", () => {
      Object.defineProperty(deviceDetect, "isMobile", { get: () => false });
      Object.defineProperty(deviceDetect, "isTablet", { get: () => false });

      render(
        <ThemeProvider theme={themeLight}>
          <ActivityTemplate
            heading="heading"
            issue={<>issue</>}
            description={<>description</>}
            instructions={<>instructions</>}
            activity={() => <>activity</>}
            solution={<>solution</>}
          />
        </ThemeProvider>
      );

      expect(screen.queryByRole("button", { name: "tab" })).toBeFalsy();
    });
  });
});
