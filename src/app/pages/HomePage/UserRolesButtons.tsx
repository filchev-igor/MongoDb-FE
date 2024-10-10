import { USER_ROLES } from "../../constants/users.ts";

const UserRolesButtons = ({
  onClick,
}: {
  onClick: (newUserRole: string) => void;
}) =>
  Object.values(USER_ROLES).map((role) => (
    <div key={role}>
      <button type={"button"} onClick={() => onClick(role)}>
        {role}
      </button>
    </div>
  ));

export default UserRolesButtons;
