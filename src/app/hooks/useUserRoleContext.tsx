import { useOutletContext } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

type OutletContextType = {
  userRole: string;
  setUserRole: Dispatch<SetStateAction<string>>;
};

const useUserRoleContext = () => {
  const { userRole, setUserRole } = useOutletContext<OutletContextType>();

  return { userRole, setUserRole };
};

export default useUserRoleContext;
