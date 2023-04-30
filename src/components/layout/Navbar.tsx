import SearchBar from "@/components/search-bar/SearchBar";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => (
  <div className="px-20 shadow-md navbar min-h-[25px]">
    <div className="flex-1">
      <button className="btn btn-ghost">
        <Link to="/">
          <span className="text-3xl">Ingnyusan</span>
        </Link>
      </button>
    </div>

    <SearchBar />

    <div className="flex-none">
      <ul className="gap-x-2 px-1 menu menu-horizontal">
        <li>
          <button className="btn btn-ghost">
            <Link to="/Resume">
              <p className="text-slate-400 text-md">Résumé</p>
            </Link>
          </button>
        </li>

        <li>
          <button className="btn btn-ghost">
            <Link to="/Develop">
              <p className="text-slate-400 text-md">Develop</p>
            </Link>
          </button>
        </li>
      </ul>
    </div>
  </div>
);
export default Navbar;
