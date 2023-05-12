import type { FC } from "preact/compat";
import { useStore } from "@nanostores/preact";
import {
  preferences,
  toggleTheme,
  loadInitialThemePreferences,
} from "@/states/Theme.state";
import SunIcon from "@/assets/svg/Sun.svg";
import MoonIcon from "@/assets/svg/Moon.svg";
import { useEffect } from "preact/hooks";

const ThemeIcon: FC = () => {
  const { theme } = useStore(preferences);

  useEffect(() => {
    loadInitialThemePreferences();
  }, []);

  return (
    <button class="btn bg-transparent border-0" onClick={toggleTheme}>
      {theme === "light" ? (
        <img src={SunIcon} alt="sun icon" />
      ) : (
        <img src={MoonIcon} alt="moon icon" />
      )}
    </button>
  );
};
export default ThemeIcon;
