import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState
} from "react";

interface ThemePreferencesState {
  isDarkmode: boolean;
}

interface ThemePreferencesBehaviour {
  toggleDarkmode: () => void;
  enableDarkmode: () => void;
  disableDarkmode: () => void;
}

const ThemePreferencesContext = createContext<
  (ThemePreferencesState & ThemePreferencesBehaviour) | undefined
>(undefined);

ThemePreferencesContext.displayName = "[ThemePreferencesContext]";

export const useThemePreferencesContext = () => {
  const context = useContext(ThemePreferencesContext);
  if (!context)
    throw new Error(
      "ThemePreferencesContextWrapper must be provided before selecting values"
    );
  return context;
};

export const ThemePreferencesContextWrapper: FC<PropsWithChildren> = ({
  children
}) => {
  const [isDarkmode, setDarkmode] = useState(false);
  const toggleDarkmode = () => setDarkmode(!isDarkmode);
  const enableDarkmode = () => setDarkmode(true);
  const disableDarkmode = () => setDarkmode(false);

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
