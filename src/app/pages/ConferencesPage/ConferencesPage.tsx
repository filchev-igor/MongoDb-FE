import useUserRoleContext from "../../hooks/useUserRoleContext.tsx";
import { conferences } from "../../api/constants.ts";
import ConferenceBlock from "./ConferenceBlock.tsx";
import { useState } from "react";
import { ConferenceType } from "../../types/conferenceType.ts";
import { isEmpty } from "lodash";
import useUserConferencesContext from "../../hooks/useUserConferencesContext.tsx";

const ConferencesPage = () => {
  const { userRole } = useUserRoleContext();
  const { userConferences, setUserConferences } = useUserConferencesContext();

  const [conferenceData, setConferenceData] = useState<ConferenceType | null>(
    null,
  );

  const handleConferenceDataChange = (conference: ConferenceType) => {
    if (!isEmpty(conferenceData)) {
      setConferenceData(null);

      return;
    }

    setConferenceData(conference);
  };

  return (
    <>
      {conferences.map((conference) => (
        <div key={conference.id}>
          <strong>Conference Title:</strong>
          <span> {conference.title}</span>

          <button
            type={"button"}
            onClick={() => handleConferenceDataChange(conference)}
          >
            {conferenceData?.id !== conference.id
              ? "Read more"
              : "Hide conference info"}
          </button>
        </div>
      ))}

      {!isEmpty(conferenceData) && (
        <ConferenceBlock conference={conferenceData} />
      )}
    </>
  );
};

export default ConferencesPage;
