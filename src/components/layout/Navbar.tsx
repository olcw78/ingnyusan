import type { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => (
  <div className="px-20 shadow-md navbar min-h-[25px]">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost">
        <span className="text-3xl">Ingnyusan</span>
      </Link>
    </div>

    <div className="flex-none">
      <ul className="gap-x-2 px-1 menu menu-horizontal">
        <li>
          <Link to="/Resume">
            <p className="text-slate-400 text-md">Résumé</p>
          </Link>
        </li>

        <li>
          <Link to="/Develop">
            <p className="text-slate-400 text-md">Develop</p>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
export default Navbar;
