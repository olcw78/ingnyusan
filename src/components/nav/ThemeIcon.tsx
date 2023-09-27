import { useStore } from "@nanostores/preact";
import { useEffect } from "preact/hooks";
import {
  isLightTheme$,
  loadInitialThemePreferences,
  preferences$,
  toggleTheme,
} from "@/states/Theme.state";

const ThemeIcon = () => {
  const isLightTheme = useStore(isLightTheme$);

  useEffect(() => {
    loadInitialThemePreferences();
  }, []);

  const onClick_ThemeIcon = () => {
    toggleTheme();
  };

  return (
    <label class="swap">
      <input type="checkbox" onChange={onClick_ThemeIcon} />
      {isLightTheme ? (
        <img src="/svg/sun.svg" alt="sun icon alt" />
      ) : (
        <img src="/svg/moon.svg" alt="moon icon alt" />
      )}
    </label>
  );
};
export default ThemeIcon;
