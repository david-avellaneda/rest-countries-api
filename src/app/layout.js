"use client";

import "../styles/globals.css";
import Header from "@/components/Header";
import nunitoSans from "@/font";
import { useEffect, useState } from "react";

const RootLayout = ({ children }) => {
  const [theme, setTheme] = useState(undefined);

  useEffect(() => {
    const root = document.documentElement.dataset.theme;
    root && root === "dark" ? setTheme(true) : setTheme(false);
  }, []);

  return (
    <html lang="en">
      <head />
      <body className={`${nunitoSans.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializer,
          }}
        />
        <Header theme={theme} setTheme={setTheme} />
        {children}
      </body>
    </html>
  );
};

const themeInitializer = `
  (function() {
    ${setInitialMode.toString()}
    setInitialMode();
  })()
`;

function setInitialMode() {
  const getInitialMode = () => {
    const preferenceMode = window.localStorage.getItem("theme");
    const systemModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (preferenceMode && typeof preferenceMode === "string")
      return preferenceMode;

    if (
      systemModePreference &&
      typeof systemModePreference.matches === "boolean"
    )
      return systemModePreference.matches ? "dark" : "light";

    return "light";
  };

  const currentMode = getInitialMode();

  if (currentMode === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

export default RootLayout;
