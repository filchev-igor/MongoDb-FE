import { useOutletContext } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

type OutletContextType = {
  userConferences: number[];
  setUserConferences: Dispatch<SetStateAction<number[]>>;
};

const useUserConferencesContext = () => {
  const { userConferences, setUserConferences } =
    useOutletContext<OutletContextType>();

  return { userConferences, setUserConferences };
};

export default useUserConferencesContext;
