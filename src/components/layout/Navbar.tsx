import MoonIcon from "@/assets/svg/moon.svg";
import SunIcon from "@/assets/svg/sun.svg";
import SearchBar from "@/components/search-bar/SearchBar";
import { themePreferences, toggleDarkmode } from "@/state/ThemePreferences";
import { useStore } from "@nanostores/react";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const pref = useStore(themePreferences);
  const onClickDarkmodeToggleButton = () => toggleDarkmode();

  return (
    <div className="px-20 shadow-md navbar min-h-[25px]">
      <div className="flex-1">
        <button className="btn btn-ghost">
          <Link to="/">
            <span className="text-3xl capitalize">Ingnyusan</span>
          </Link>
        </button>
      </div>

      <SearchBar />

      <div className="flex-none ml-5">
        <ul className="gap-x-2 px-1 menu menu-horizontal">
          <li>
            <button type="button" className="btn btn-ghost">
              <Link to="/Resume">
                <p className="text-slate-400 text-md">Résumé</p>
              </Link>
            </button>
          </li>

          <li>
            <button type="button" className="btn btn-ghost">
              <Link to="/Develop">
                <p className="text-slate-400 text-md">Develop</p>
              </Link>
            </button>
          </li>
        </ul>
      </div>

      <div>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onClickDarkmodeToggleButton}
        >
          <img src={pref.isDarkMode ? MoonIcon : SunIcon} />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
