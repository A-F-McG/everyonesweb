import React, { useEffect, useState } from "react";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { codeEditor, container, keyboardInfo } from "./fixIt.styles";
import { cssString } from "./editorCodeStrings/css";
import { jsString } from "./editorCodeStrings/js";
import { htmlString } from "./editorCodeStrings/html";
import { isMobile, isTablet } from "react-device-detect";
import { pretendKeyboardJsString } from "./pretendKeyboardStrings/js";
import { pretendKeyboardCssString } from "./pretendKeyboardStrings/css";

//TODO only want keyboard buttons when on a mobile - make tests for these
export function FixIt() {
  const [keyboardInstructions, setKeyboardInstructions] = useState("");

  let js = jsString;
  let css = cssString;

  if (isMobile || isTablet) {
    js += pretendKeyboardJsString;
    css += pretendKeyboardCssString;
  }

  const files = {
    "/index.html": htmlString,
    "/index.js": js,
    "/index.css": css,
  };

  useEffect(() => {
    const codeEditorContainer = document.getElementsByClassName("sp-cm");
    const codeEditorContent = document.getElementsByClassName("cm-content");

    if (codeEditorContainer.length === 1) {
      codeEditorContainer[0].ariaLabel = `The code editor, press enter to edit and escape to stop editing,
        any changes made to the code are run automatically.`;
      codeEditorContainer[0].addEventListener("focus", () => {
        console.log("focus editor");
        setKeyboardInstructions("press enter to edit the code");
      });
      codeEditorContainer[0].addEventListener("blur", () => {
        setTimeout(() => {
          if (document.activeElement === codeEditorContent[0]) {
            setKeyboardInstructions("press escape to leave the code editor");
          } else {
            setKeyboardInstructions("");
          }
        }, 50);
      });
    }

    const codePreviewIFrame =
      document.getElementsByClassName("sp-preview-iframe");

    if (codePreviewIFrame.length === 1) {
      codePreviewIFrame[0].setAttribute("title", "Code output result");
    }
  }, []);

  return (
    <div css={container}>
      <p>
        Not all of the 'buttons' below are keyboard accessible. Can you find the
        issues and fix them?
      </p>
      {keyboardInstructions.length > 0 && (
        <p css={keyboardInfo}>Keyboard users: {keyboardInstructions}</p>
      )}
      <div css={codeEditor}>
        <div style={{ border: "solid black 1px" }}>
          <SandpackProvider template="static" theme={nightOwl} files={files}>
            <SandpackCodeEditor
              showTabs={false}
              showInlineErrors={true}
              wrapContent={true}
            />
            <SandpackPreview
              showRefreshButton={false}
              showOpenInCodeSandbox={false}
            />
          </SandpackProvider>
        </div>
      </div>
    </div>
  );
}
