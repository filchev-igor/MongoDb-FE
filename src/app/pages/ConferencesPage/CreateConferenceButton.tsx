import useUserRoleContext from "../../hooks/useUserRoleContext.tsx";
import { generateRandomConference } from "../../utils/conference.ts";
import useConferencesListContext from "../../hooks/useConferencesListContext.tsx";
import { useState } from "react";
import LoadingSpinner from "../../components/spinners/LoadingSpinner.tsx";

const CreateConferenceButton = () => {
  const { hasAdminRole } = useUserRoleContext();
  const { conferencesList, handleConferenceListUpdate } =
    useConferencesListContext();

  const [isCreating, setIsCreating] = useState(false);

  const handleConferenceAdd = () => {
    if (isCreating) {
      return;
    }

    setIsCreating(true);

    const lastConferenceId =
      conferencesList[conferencesList.length - 1]?.id ?? 0;

    const newConferenceData = generateRandomConference(lastConferenceId);

    setTimeout(() => {
      handleConferenceListUpdate(newConferenceData);

      setIsCreating(false);
    }, 1_000);
  };

  if (!hasAdminRole) {
    return null;
  }

  return (
    <div className={"sm:col-span-2 text-center w-full sm:w-fit"}>
      <button
        type={"button"}
        className={`flex from-cyan-500 to-blue-500 bg-gradient-to-b w-full sm:w-fit ${isCreating ? "disabled" : ""}`}
        onClick={handleConferenceAdd}
      >
        {isCreating ? (
          <>
            <LoadingSpinner />
            Processing...
          </>
        ) : (
          "Create new conference"
        )}
      </button>{" "}
    </div>
  );
};

export default CreateConferenceButton;
