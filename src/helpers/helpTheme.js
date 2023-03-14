const helpThemeInitializer = `
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

export default helpThemeInitializer;
