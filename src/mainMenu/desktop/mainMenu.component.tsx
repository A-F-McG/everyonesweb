import Link from "next/link";
import React from "react";
import { menuContainer, nav } from "./mainMenu.styles";

export function MainMenu() {
  return (
    <nav aria-label="main menu" css={nav}>
      <ul css={menuContainer}>
        <li>
          <Link href="/whatIsWebAccessibility">What is web accessibility?</Link>
        </li>
        <li>
          <Link href="/experienceAnInaccessibleWeb">
            Experience an inaccessible web
          </Link>
        </li>
        <li>
          <Link href="/poster">Poster</Link>
        </li>
      </ul>
    </nav>
  );
}
