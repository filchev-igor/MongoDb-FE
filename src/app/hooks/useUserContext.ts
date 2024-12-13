import { useOutletContext } from "react-router-dom";
import { UserType } from "../types/userType.ts";

type OutletContextType = {
  userData: UserType | undefined;
  isUserDataLoading: boolean;
};

const useUserContext = () => {
  const { userData, isUserDataLoading } = useOutletContext<OutletContextType>();

  //Maybe ? is not needed
  const hasUserRole = false;
  const hasAdminRole = false;

  return { userData, isUserDataLoading, hasUserRole, hasAdminRole };
};

export default useUserContext;
