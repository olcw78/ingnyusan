import { createContext, useContext } from "react";

interface ThemePreferencesState {
  isDarkmode: boolean;
}

interface ThemePreferencesBehaviour {
  toggleDarkmode: () => void;
  enableDarkmode: () => void;
  disableDarkmode: () => void;
}

export const ThemePreferencesContext = createContext<
  (ThemePreferencesState & ThemePreferencesBehaviour) | undefined
>(undefined);

ThemePreferencesContext.displayName = "[ThemePreferencesContext]";

export const useThemePreferencesContext = () => {
  const context = useContext(ThemePreferencesContext);
  if (!context) {
    throw new Error(
      "ThemePreferencesContextWrapper must be provided before selecting values"
    );
  }

  return context;
};
