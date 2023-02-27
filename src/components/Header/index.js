"use client";

import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Header = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme !== undefined) {
      if (theme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [theme]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <h1>Where in the world?</h1>
          <button
            className={`${styles.themeButton}`}
            onClick={() => setTheme(!theme)}
          >
            <div>
              {theme !== undefined &&
                (theme ? (
                  <>
                    <FontAwesomeIcon icon={faMoon} />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faSun} />
                    Light Mode
                  </>
                ))}
            </div>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
