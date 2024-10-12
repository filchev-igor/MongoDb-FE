import { useOutletContext } from "react-router-dom";
import { ConferenceType } from "../types/conferenceType.ts";

type OutletContextType = {
  conferencesList: ConferenceType[];
  handleConferenceListUpdate: (newConference: ConferenceType) => void;
};

const useConferencesListContext = () => {
  const { conferencesList, handleConferenceListUpdate } =
    useOutletContext<OutletContextType>();

  return { conferencesList, handleConferenceListUpdate };
};

export default useConferencesListContext;
