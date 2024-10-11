import { Link, useLocation } from "react-router-dom";
import { NAVBAR_PAGES } from "./constants.ts";

const Navbar = ({ userRole }: { userRole: string }) => {
  const { pathname } = useLocation();

  return (
    <nav className={"navbar"}>
      <div className={"flex justify-end gap-3 mr-10"}>
        {NAVBAR_PAGES.map(({ name, to, role, isHidden }) => {
          const isHighlighted = pathname === to;

          if (isHidden) {
            return null;
          }

          if (!role.includes(userRole)) {
            return null;
          }

          return (
            <Link
              to={to}
              key={name}
              className={`${isHighlighted ? "bg-pink-400" : ""} hover:bg-pink-500 text-black hover:text-yellow-300 rounded-full p-2 my-3`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
