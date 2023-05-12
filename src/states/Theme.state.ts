import { persistentMap } from "@nanostores/persistent";

export type PreferencesState = {
  theme: "dark" | "light";
  language: "ko" | "en" | "fr" | "jp";
};

const localStorageKey = {
  root: "[preferences] ",
  theme(): string {
    return this.root + "theme";
  },
  language(): string {
    return this.root + "language";
  },
};

export const preferences = persistentMap<PreferencesState>(
  localStorageKey.root,
  {
    theme: "light",
    language: "ko",
  }
);

export const loadInitialThemePreferences = () => {
  const theme = <PreferencesState["theme"]>(
    localStorage.getItem(localStorageKey.theme())
  );

  // device-wise light mode settings.
  // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //   theme = "dark";
  //   setDarkTheme();
  // } else {
  //   theme = "light";
  //   setLightTheme();
  // }

  preferences.setKey("theme", theme);
  if (theme === "light") {
    setLightTheme();
    return;
  }

  setDarkTheme();
};

export const setDarkTheme = () => {
  preferences.setKey("theme", "dark");
};

export const setLightTheme = () => {
  preferences.setKey("theme", "light");
};

export const toggleTheme = () => {
  console.log("togle theme!");
  const { theme } = preferences.get();

  if (theme === "dark") {
    setLightTheme();
    return;
  }

  setDarkTheme();
};
