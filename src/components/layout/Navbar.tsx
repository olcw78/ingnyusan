import { RoutesManager } from "@/routes/RoutesManager";
import { FC } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  routesManager: RoutesManager;
}

const Navbar: FC<NavbarProps> = ({ routesManager }) => (
  <div className="navbar px-20 min-h-[25px] shadow-md">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost">
        <span className="normal-case text-2xl">Ingnyusan</span>
      </Link>
    </div>

    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 gap-x-2">
        {routesManager.routes?.map(({ path, name }) => (
          <li key={path}>
            <Link to={path}>
              <p className="text-slate-400">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default Navbar;
