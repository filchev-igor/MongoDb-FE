import { Dispatch, SetStateAction } from "react";
import { useOutletContext } from "react-router-dom";

type OutletContextType = {
  backgroundClassName: string;
  setBackgroundClassName: Dispatch<SetStateAction<string>>;
};

const useBackgroundClassNameContext = () => {
  const { backgroundClassName, setBackgroundClassName } =
    useOutletContext<OutletContextType>();

  return { backgroundClassName, setBackgroundClassName };
};

export default useBackgroundClassNameContext;
