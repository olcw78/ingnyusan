import { RoutesManager } from "@/routes/RoutesManager";
import { FC } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  routesManager: RoutesManager;
}

const Navbar: FC<NavbarProps> = ({ routesManager }) => (
  <div className="navbar bg-teal-100 px-20 min-h-[25px]">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-2xl">
        Ingnyusan
      </Link>
    </div>

    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 gap-x-2">
        {routesManager.build()}
      </ul>
    </div>
  </div>
);
export default Navbar;
