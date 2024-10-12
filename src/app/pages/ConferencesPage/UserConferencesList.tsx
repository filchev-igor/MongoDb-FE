import useUserConferencesContext from "../../hooks/useUserConferencesContext.ts";
import useUserRoleContext from "../../hooks/useUserRoleContext.ts";

const UserConferencesList = () => {
  const { hasUserRole } = useUserRoleContext();
  const { userConferences } = useUserConferencesContext();

  if (!hasUserRole || !userConferences.length) {
    return null;
  }

  return (
    <div className={"col-span-2"}>
      <strong>I shall participate in the next conferences:</strong>
      <ul className={"list-disc list-inside"}>
        {userConferences.map((conference) => (
          <li key={conference.id}>{conference.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserConferencesList;
