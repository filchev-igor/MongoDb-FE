import useUserConferencesContext from "../../hooks/useUserConferencesContext.tsx";
import useUserRoleContext from "../../hooks/useUserRoleContext.tsx";

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
