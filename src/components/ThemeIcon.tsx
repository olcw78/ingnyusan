import type {FC} from "preact/compat";
import {useStore} from "@nanostores/preact";
import {
    preferences,
    toggleTheme,
    loadInitialThemePreferences,
} from "../states/Theme.state";
import {useEffect} from "preact/hooks";

const ThemeIcon: FC = () => {
    const {theme} = useStore(preferences);

    useEffect(() => {
        loadInitialThemePreferences();
    }, []);

    return (
        <button class="border-0 bg-transparent btn" onClick={toggleTheme}>
            {theme === "light" ? (
                <img src="/svg/sun.svg" alt="sun icon"/>
            ) : (
                <img src="/svg/moon.svg" alt="moon icon"/>
            )}
        </button>
    );
};
export default ThemeIcon;
