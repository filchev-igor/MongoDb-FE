import Navbar from "../Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { USER_ROLES } from "../../constants/users.ts";
import { ConferenceType } from "../../types/conferenceType.ts";
import { Toaster } from "react-hot-toast";
import "./styles.css";
import { defaultBackgroundClassName } from "./styles.ts";

const PageLayout = () => {
  const [userRole, setUserRole] = useState(USER_ROLES.USER);
  const [userConferences, setUserConferences] = useState<ConferenceType[]>([]);
  const [conferencesList, setConferencesList] = useState<ConferenceType[]>([]);
  const [backgroundClassName, setBackgroundClassName] = useState(
    defaultBackgroundClassName,
  );

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
    <div className={"min-h-screen flex flex-col"}>
      <Navbar userRole={userRole} />

      <Toaster position="bottom-left" reverseOrder={false} />

      <main
        className={`pt-10 pr-10 pl-28 pb-10 flex-grow ${backgroundClassName} `}
      >
        <Outlet
          context={{
            userRole,
            setUserRole,
            userConferences,
            handleUserConferencesChange,
            conferencesList,
            handleConferenceListUpdate,
            backgroundClassName,
            setBackgroundClassName,
          }}
        />
      </main>
    </div>
  );
};

export default PageLayout;
