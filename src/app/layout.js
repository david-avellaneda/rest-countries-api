"use client";

import "../styles/globals.css";
import Header from "@/components/Header";
import nunitoSans from "@/font";
import { useEffect, useState } from "react";
import helpThemeInitializer from "@/helpers/helpTheme";

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
            __html: helpThemeInitializer,
          }}
        />
        <Header theme={theme} setTheme={setTheme} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
