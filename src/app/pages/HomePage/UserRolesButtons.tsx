import { USER_ROLES } from "../../constants/users.ts";

const UserRolesButtons = ({
  onClick,
}: {
  onClick: (newUserRole: string) => void;
}) =>
  Object.values(USER_ROLES).map((role) => (
    <div key={role} className={"w-full sm:w-fit"}>
      <button
        type={"button"}
        className={"bg-cyan-500 w-full sm:w-fit"}
        onClick={() => onClick(role)}
      >
        {role}
      </button>
    </div>
  ));

export default UserRolesButtons;
