import { useStore } from "@nanostores/preact";
import { useEffect } from "preact/hooks";
import Preferences from "@/states/Preferences";

const ThemeIcon = () => {
  const isLightTheme = useStore(Preferences.isLightTheme$);

  const onClick_ThemeIcon = () => {
    Preferences.toggleTheme();
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
