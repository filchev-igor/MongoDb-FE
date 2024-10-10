import { Link } from "react-router-dom";
import "./Navbar.css";
import { NAVBAR_PAGES } from "./constants.ts";

const Navbar = ({ userRole }: { userRole: string }) => (
  <nav className={"navbar"}>
    <div className={"flex justify-center"}>
      {NAVBAR_PAGES.map(({ name, to, role }) => {
        if (!role.includes(userRole)) {
          return null;
        }

        return (
          <Link
            to={to}
            key={name}
            className={"bg-amber-50 text-blue-600 rounded-lg p-2 my-3"}
          >
            {name}
          </Link>
        );
      })}
    </div>
  </nav>
);

export default Navbar;
