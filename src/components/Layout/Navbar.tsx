import { routes } from "@/routes";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar bg-teal-100 rounded-xl px-20">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-xl text-slate-600">
        Ingnyusan
      </Link>
    </div>

    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 gap-x-2">
        {routes.map(
          ({ name, path }) =>
            name !== "Home" && (
              <li key={path}>
                <Link to={path}>
                  <p className="text-slate-600">{name}</p>
                </Link>
              </li>
            )
        )}

        {/*<li tabIndex={0}>*/}
        {/*  <Link to="#">*/}
        {/*    Parent*/}
        {/*    <svg*/}
        {/*      className="fill-current"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width="20"*/}
        {/*      height="20"*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*    >*/}
        {/*      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />*/}
        {/*    </svg>*/}
        {/*  </Link>*/}

        {/*  <ul className="p-2 bg-base-100">*/}
        {/*    <li>*/}
        {/*      <Link to="#">Submenu 1</Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <Link to="#">Submenu 2</Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to="#">Item 3</Link>*/}
        {/*</li>*/}
      </ul>
    </div>
  </div>
);
export default Navbar;
