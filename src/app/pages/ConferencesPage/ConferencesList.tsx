import useConferencesListContext from "../../hooks/useConferencesListContext.ts";
import { ConferenceType } from "../../types/conferenceType.ts";
import { isEmpty } from "lodash";
import useUserRoleContext from "../../hooks/useUserRoleContext.ts";

const ConferencesList = ({
  conferenceData,
  onClick,
}: {
  conferenceData: ConferenceType | null;
  onClick: (conference: ConferenceType) => void;
}) => {
  const { conferencesList } = useConferencesListContext();
  const { hasAdminRole } = useUserRoleContext();

  if (isEmpty(conferencesList)) {
    return (
      <span>
        {hasAdminRole ? "You" : "Administrator"} did not add any conference yet
      </span>
    );
  }

  return conferencesList.map((conference) => (
    <div key={conference.id} className={"grid gap-1"}>
      <div>
        <strong>Conference Title:</strong>
        <span> {conference.title}</span>
      </div>

      <div className={"w-full sm:w-fit"}>
        <button
          type={"button"}
          onClick={() => onClick(conference)}
          className={
            "bg-sky-500 w-full sm:w-fit hover:from-sky-300 hover:to-sky-700 hover:bg-gradient-to-r"
          }
        >
          {conferenceData?.id !== conference.id
            ? "Read more"
            : "Hide conference info"}
        </button>
      </div>
    </div>
  ));
};

export default ConferencesList;
