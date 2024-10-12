import { ConferenceType } from "../../types/conferenceType.ts";
import { ReactElement, useCallback, useEffect, useState } from "react";
import useUserRoleContext from "../../hooks/useUserRoleContext.ts";
import useUserConferencesContext from "../../hooks/useUserConferencesContext.ts";
import ConferenceBlockPlaceholder from "./ConferenceBlockPlaceholder.tsx";

const ConferenceBlock = ({
  conference,
  children,
}: {
  conference: ConferenceType;
  children: ReactElement | null;
}) => {
  const { hasUserRole } = useUserRoleContext();
  const { userConferences } = useUserConferencesContext();

  const [isLoading, setIsLoading] = useState(true);

  const isUserRegistered = useCallback(() => {
    if (!hasUserRole) {
      return false;
    }

    userConferences.some(({ id }) => id === conference.id);
  }, [userConferences, conference, hasUserRole]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1_000);

    return () => {
      setIsLoading(true);
    };
  }, [conference]);

  if (isLoading) {
    return <ConferenceBlockPlaceholder />;
  }

  return (
    <div className={"sm:col-span-2 mb-5"}>
      <h3>
        <strong>Conference Title:</strong>
        <span> {conference.title}</span>
      </h3>

      <div>
        <strong>Date:</strong>
        <span> {conference.date}</span>
      </div>

      <div>
        <strong>Time:</strong>
        <span> {conference.time}</span>
      </div>

      <div>
        <strong>Location:</strong>
        <span>
          {" "}
          {Object.values(conference.location).reduce(
            (acc, value) => acc + ", " + value,
          )}
        </span>
      </div>

      <div>
        <strong>Description:</strong>
        <span> {conference.description}</span>
      </div>

      <div>
        <strong>Speakers:</strong>
        <ul className={"list-disc list-inside"}>
          {conference.speakers.map((speaker) => (
            <li key={speaker.name}>
              {Object.values(speaker).reduce(
                (acc, value) => acc + ", " + value,
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Agenda:</strong>
        <ul className={"list-disc list-inside"}>
          {conference.agendas.map((agenda) => (
            <li key={agenda.event}>
              {Object.values(agenda).reduce((acc, value) => acc + ": " + value)}
            </li>
          ))}
        </ul>
      </div>

      {!isUserRegistered && (
        <div>
          <strong>Registration:</strong>
          <span> {conference.registration.info}</span>
        </div>
      )}

      {children}
    </div>
  );
};

export default ConferenceBlock;
