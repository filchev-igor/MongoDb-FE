import UserRolesButtons from "./UserRolesButtons.tsx";
import { useState } from "react";
import useUserRoleContext from "../../hooks/useUserRoleContext.ts";

const HomePage = () => {
  const { userRole, setUserRole } = useUserRoleContext();

  const [isOpen, setIsOpen] = useState(true);

  const handleUserRoleButtonsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleUserRoleChange = (newUserRole: string) => {
    setUserRole(newUserRole);

    setIsOpen(false);
  };

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center"}>
      <div>
        <strong>User role: </strong>
        <span>{userRole}</span>
      </div>

      <div className={"w-full sm:w-fit"}>
        <button
          type={"button"}
          onClick={handleUserRoleButtonsOpen}
          className={"bg-sky-500 w-full sm:w-fit"}
        >
          Change user role
        </button>
      </div>

      {isOpen && <UserRolesButtons onClick={handleUserRoleChange} />}
    </div>
  );
};

export default HomePage;
