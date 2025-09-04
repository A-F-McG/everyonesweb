import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useTitle } from "./useTitle.component";

describe("Use title hook", () => {
  it("should set the document title", () => {
    renderHook(() => useTitle("grasslands"));

    expect(document.title).toBe("grasslands");
  });

  //TODO test to test heading focus
});
