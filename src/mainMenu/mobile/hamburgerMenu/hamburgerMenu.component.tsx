import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../app/appContext/context.component";
import { themeLight } from "../../../theme/theme";
import * as styles from "./hamburgerMenu.styles";

//TODO sort out tests for this and just sort this out in general

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const themeContext = useContext(AppContext);

  const menuRef = useRef<HTMLElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleClick(event: any) {
    if (!menuRef.current?.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
  }, [isOpen]);

  return (
    <nav
      css={[
        styles.menu,
        themeContext.theme === themeLight
          ? styles.blackBorder
          : styles.whiteBorder,
        isOpen && styles.open,
      ]}
      data-testid="nav"
      ref={menuRef}
    >
      <button
        aria-label={isOpen ? "Close menu" : "Main menu hamburger"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        css={[styles.undoButtonAutoStyles]}
      >
        <span
          css={[
            styles.menuLine,
            styles.topMenuLine,
            isOpen && styles.hiddenLine,
          ]}
        ></span>
        <span
          css={[
            styles.menuLine,
            styles.middleMenuLine,
            isOpen && styles.crossLineOne,
          ]}
        ></span>
        <span
          css={[
            styles.menuLine,
            styles.middleMenuLine,
            isOpen && styles.crossLineTwo,
          ]}
        ></span>
        <span
          css={[
            styles.menuLine,
            styles.bottomMenuLine,
            isOpen && styles.hiddenLine,
          ]}
        ></span>
      </button>

      {isOpen && (
        <ul css={styles.linksContainer}>
          {navItem("What is web accessibility?", "/whatIsWebAccessibility")}
          {navItem(
            "Experience an inaccessible web",
            "/experienceAnInaccessibleWeb"
          )}
          {navItem("Poster", "/poster")}
        </ul>
      )}
    </nav>
  );

  function navItem(title: string, href: string) {
    return (
      <li>
        <Link href={href} css={styles.navItem} onClick={() => setIsOpen(false)}>
          {title}
        </Link>
      </li>
    );
  }
}
