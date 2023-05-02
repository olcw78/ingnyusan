import { FC, PropsWithChildren, useState } from "react";
import { ThemePreferencesContext } from "./ThemePreferences.context";

export const ThemePreferencesContextWrapper: FC<PropsWithChildren> = ({
  children
}) => {
  const [isDarkmode, setDarkmode] = useState(getInitialTheme());

  const toggleDarkmode = () => {
    const toggled = !isDarkmode;

    const themeStr = toggled ? "dark" : "light";
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", themeStr);
    }

    setDarkmode(toggled);

    if (toggled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const enableDarkmode = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", "dark");
    }

    setDarkmode(true);
    document.documentElement.classList.add("dark");
  };

  const disableDarkmode = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", "light");
    }

    setDarkmode(false);
    document.documentElement.classList.remove("dark");
  };

  const value = {
    isDarkmode,
    toggleDarkmode,
    enableDarkmode,
    disableDarkmode
  };

  return (
    <ThemePreferencesContext.Provider value={value}>
      {children}
    </ThemePreferencesContext.Provider>
  );
};

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const themeStr = localStorage.getItem("theme");
  if (!themeStr) {
    return false;
  }

  return themeStr !== "light";
};
