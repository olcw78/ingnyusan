import { RoutesManager } from "@/routes/RoutesManager";
import { Link } from "react-router-dom";

interface NavbarProps {
  routesManager: RoutesManager;
}

const Navbar = ({ routesManager }: NavbarProps) => (
  <div className="navbar bg-teal-100 rounded-xl px-20">
    <div className="flex-1">
      <Link
        to="/"
        className="btn btn-ghost normal-case text-3xl text-slate-600"
      >
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
