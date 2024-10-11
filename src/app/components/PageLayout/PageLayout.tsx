import Navbar from "../Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { USER_ROLES } from "../../constants/users.ts";
import { ConferenceType } from "../../types/conferenceType.ts";
import { Toaster } from "react-hot-toast";

const PageLayout = () => {
  const [userRole, setUserRole] = useState(USER_ROLES.USER);
  const [userConferences, setUserConferences] = useState<ConferenceType[]>([]);
  const [conferencesList, setConferencesList] = useState<ConferenceType[]>([]);

  const handleUserConferencesChange = (newConference: ConferenceType) => {
    const isUserParticipating = userConferences.some(
      ({ id }) => id === newConference.id,
    );

    const newUserConferences = isUserParticipating
      ? userConferences.filter(({ id }) => id !== newConference.id)
      : [...userConferences, newConference];

    setUserConferences(newUserConferences);
  };

  const handleConferenceListUpdate = (newConference: ConferenceType) => {
    setConferencesList([...conferencesList, newConference]);
  };

  return (
    <>
      <Navbar userRole={userRole} />

      <Toaster position="bottom-left" reverseOrder={false} />

      <Outlet
        context={{
          userRole,
          setUserRole,
          userConferences,
          handleUserConferencesChange,
          conferencesList,
          handleConferenceListUpdate,
        }}
      />
    </>
  );
};

export default PageLayout;
