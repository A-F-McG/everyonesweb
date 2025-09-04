import React, { useState } from "react";
import { Emphasis } from "../../../fonts/emphasis/emphasis.component";
import { CodeSnippet } from "./codeSnippet/codeSnippet.component";
import {
  cross,
  green,
  problemContainer,
  red,
  smallerCol,
  table,
  tick,
  tldr,
  tldrP,
} from "./theProblem.styles";

export function Issue() {
  return (
    <div css={problemContainer}>
      <h2 css={tldr}>TL;DR</h2>
      <h3 css={tldrP}>Semantic button = actual button = accessible:</h3>

      <span css={tick}>✓</span>
      <CodeSnippet tag="button" />

      <h3 css={tldrP}>
        Non-semantic button = pretend button = not accessible:{" "}
      </h3>
      <span css={cross}>x</span>
      <CodeSnippet tag="div" />

      <br />
      <br />

      <span css={cross}>x</span>
      <CodeSnippet tag="span" />

      <h2>Semantic HTML; let browsers do their magic</h2>

      <p>
        Most HTML elements are semantic elements.
        <br />
        <br />
        <Emphasis>Semantic = meaningful.</Emphasis>
        <br />
        <br />
        The special thing about semantic elements is that browsers add default
        functionality to them. These elements have different default behaviour
        depending on what the element is (a button, a link, a heading, etc.).
        <br />
        <br />
        This is a semantic button:
        <br />
        <br />
        <span css={tick}>✓</span>
        <CodeSnippet tag="button" />
        <br />
        <br />
        Default functionality of semantic buttons includes being able to get to
        them using the tab key and being able to click them using the enter key.
      </p>

      <h2>Non-semantic elements: divs and spans</h2>
      <p>
        HTML also has a few non-semantic elements. These don't have any meaning
        and are <Emphasis>only meant for styling.</Emphasis> Browsers don't add
        any default functionality to non-semantic elements.
        <br />
        <br />
        One example of a non-semantic element is a div, which is used to group
        elements and style them together. Another example is a span, which is
        handy to style a particular phrase within a block of text.
      </p>
      <p>
        It's problematic when onclick events are added to divs and spans like
        this:
        <br />
        <br />
        <span css={cross}>x</span>
        <CodeSnippet tag="div" />
        <br />
        <br />
        <span css={cross}>x</span>
        <CodeSnippet tag="span" />
        <br />
        <br />
        Browsers can't read the developer's mind and magically know that these
        non meaningful elements were actually supposed to be buttons!
        <br />
        <br />
        The onClick means that a function will run when you click the element
        with a mouse. But because the default button functionality isn't added
        by the browser, these 'buttons'{" "}
        <Emphasis>can't be clicked using the keyboard.</Emphasis> And keyboard
        users aren't the only people who can't access these non-semantic
        buttons!
      </p>

      <table css={table}>
        <caption>
          Which users do semantic and non-semantic buttons work for by default?
        </caption>
        <thead>
          <tr>
            <th css={smallerCol}></th>
            <th scope="col">Non-semantic</th>
            <th scope="col">Semantic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Mouse</th>
            <td css={green}>✓</td>
            <td css={green}>✓</td>
          </tr>
          <tr>
            <th scope="row">Keyboard</th>
            <td css={red}>x</td>
            <td css={green}>✓</td>
          </tr>
          <tr>
            <th scope="row">Screen reader</th>
            <td css={red}>x</td>
            <td css={green}>✓</td>
          </tr>
          <tr>
            <th scope="row">Speech control</th>
            <td css={red}>x</td>
            <td css={green}>✓</td>
          </tr>
        </tbody>
      </table>

      <p>
        This is a really common accessibility issue. Have a look out for it on
        your favourite websites. Hamburger menus are a classic culprit!
      </p>
    </div>
  );
}
