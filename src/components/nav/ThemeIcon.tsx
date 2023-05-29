import type { FC } from "preact/compat";
// import { useStore } from "@nanostores/preact";
// import {
//   preferences,
//   toggleTheme,
//   loadInitialThemePreferences,
// } from "../states/Theme.state";
// import { useEffect } from "preact/hooks";

const ThemeIcon: FC = () => {
  // const { theme } = useStore(preferences);

  // useEffect(() => {
  //   loadInitialThemePreferences();
  // }, []);

  return (
    <label class="swap">
      <input type="checkbox" />
      <img src="/svg/moon.svg" alt="moon icon" class="swap-on" />
      <img src="/svg/sun.svg" alt="sun icon" class="swap-off" />

      {/* {theme === "light" ? (
          <img src="/svg/sun.svg" alt="sun icon" />
        ) : (
          <img src="/svg/moon.svg" alt="moon icon" />
        )} */}
    </label>
  );
};
export default ThemeIcon;
