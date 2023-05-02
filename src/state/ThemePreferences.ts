import { persistentMap } from "@nanostores/persistent";
import { computed } from "nanostores";

export type ThemePreferences = {
  isDarkMode: boolean;
};

export const themePreferences = persistentMap<ThemePreferences>(
  "theme_preferences",
  {
    isDarkMode: false
  },
  {
    encode: JSON.stringify,
    decode(val) {
      try {
        return JSON.parse(val);
      } catch (_) {
        return val;
      }
    }
  }
);

export const isDarkMode = computed(
  themePreferences,
  (values) => values.isDarkMode
);

export const enableDarkmode = () => {
  themePreferences.setKey("isDarkMode", true);
};

export const disableDarkmode = () => {
  themePreferences.setKey("isDarkMode", false);
};

export const toggleDarkmode = () => {
  if (isDarkMode.get()) {
    disableDarkmode();
  } else {
    enableDarkmode();
  }
};
