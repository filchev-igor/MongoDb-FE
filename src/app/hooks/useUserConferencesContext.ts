import { useOutletContext } from "react-router-dom";
import { ConferenceType } from "../types/conferenceType.ts";

type OutletContextType = {
  userConferences: ConferenceType[];
  handleUserConferencesChange: (newConference: ConferenceType) => void;
};

const useUserConferencesContext = () => {
  const { userConferences, handleUserConferencesChange } =
    useOutletContext<OutletContextType>();

  return { userConferences, handleUserConferencesChange };
};

export default useUserConferencesContext;
