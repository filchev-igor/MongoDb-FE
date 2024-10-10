import Navbar from "../Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { USER_ROLES } from "../../constants/users.ts";

const PageLayout = () => {
  const [userRole, setUserRole] = useState(USER_ROLES.USER);
  const [userConferences, setUserConferences] = useState([]);

  return (
    <>
      <Navbar userRole={userRole} />

      <Outlet
        context={{ userRole, setUserRole, userConferences, setUserConferences }}
      />
    </>
  );
};

export default PageLayout;
