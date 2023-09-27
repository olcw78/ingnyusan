import { persistentMap } from "@nanostores/persistent";
import { computed } from "nanostores";

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

export const preferences$ = persistentMap<PreferencesState>(
  localStorageKey.root,
  {
    theme: "light",
    language: "ko",
  }
);
export const isLightTheme$ = computed(
  preferences$,
  (state) => state.theme === "light"
);

export const loadInitialThemePreferences = () => {
  const theme = localStorage.getItem(
    localStorageKey.theme()
  ) as PreferencesState["theme"];

  preferences$.setKey("theme", theme);
};

export const toggleTheme = () => {
  const { theme } = preferences$.get();
  const nextTheme = theme === "light" ? "dark" : "light";

  preferences$.setKey("theme", nextTheme);
};
