import UserRolesButtons from "./UserRolesButtons.tsx";
import { useState } from "react";
import useUserRoleContext from "../../hooks/useUserRoleContext.tsx";

const HomePage = () => {
  const { setUserRole } = useUserRoleContext();

  const [isOpen, setIsOpen] = useState(true);

  const handleUserRoleButtonsOpen = () => {
    if (isOpen) {
      return;
    }

    setIsOpen(true);
  };

  const handleUserRoleChange = (newUserRole: string) => {
    setUserRole(newUserRole);

    setIsOpen(false);
  };

  return (
    <div className={"grid grid-cols-2 gap-3 place-items-center"}>
      <div className={"col-span-2"}>
        <button type={"button"} onClick={handleUserRoleButtonsOpen}>
          Choose user role
        </button>
      </div>

      {isOpen && <UserRolesButtons onClick={handleUserRoleChange} />}
    </div>
  );
};

export default HomePage;
