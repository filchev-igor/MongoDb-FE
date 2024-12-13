import { useUserDelete, useUsersList } from "../../api/users/queryHooks.ts";
import LoadingSpinner from "../../components/spinners/LoadingSpinner.tsx";
import { PencilLine, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PATH_NAMES } from "../../modules/router/constants.ts";
import { UserType } from "../../types/userType.ts";

const UsersListPage = () => {
  const navigate = useNavigate();

  const { usersListData, isUsersListDataLoading } = useUsersList();
  const { isUserDeleting, mutateUserDelete } = useUserDelete();

  if (isUsersListDataLoading) {
    return <LoadingSpinner />;
  }

  const handleUserUpdate = (userData: UserType) => {
    navigate(PATH_NAMES.updateUserPage, { state: userData });
  };

  const handleUserDelete = (userId: number) => {
    try {
      if (isUserDeleting) {
        return;
      }

      const isConfirmed = confirm("Do you want to delete this user?");

      if (!isConfirmed) {
        return;
      }

      mutateUserDelete({
        id: userId,
        onSuccess: () => {
          toast.success(`User deleted successfully!`);
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <table className={"table-auto w-full text-center bg-slate-100 rounded-lg"}>
      <thead>
        <tr className={"border-b border-slate-500 py-3 text-slate-500 "}>
          <th className={"py-3 pl-3 text-slate-700"}>Id</th>
          <th className={"py-3"}>Name</th>
          <th className={"py-3"}>Age</th>
          <th className={"py-3"}>Username</th>
          <th className={"py-3"}>Email</th>
          <th className={"py-3"}>Date of birth</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {usersListData?.map(
          ({ id, name, age, username, email, birthDate }, index) => {
            const isLastRow = index === usersListData.length - 1;

            return (
              <tr
                key={id}
                className={`${!isLastRow ? "border-b border-slate-500" : ""} hover:text-blue-400 hover:bg-black`}
              >
                <td className={"py-3 pl-3 font-bold"}>{id}</td>
                <td className={"py-3"}>{name}</td>
                <td className={"py-3"}>{age}</td>
                <td className={"py-3"}>{username}</td>
                <td className={"py-3"}>{email}</td>
                <td className={"py-3"}>{birthDate}</td>
                <td>
                  <div className={"flex"}>
                    <PencilLine
                      color={"blue"}
                      className={"cursor-pointer"}
                      onClick={() =>
                        handleUserUpdate({
                          id,
                          name,
                          email,
                          age,
                          username,
                          birthDate,
                        })
                      }
                    />

                    <Trash2
                      color={"red"}
                      className={"cursor-pointer"}
                      onClick={() => handleUserDelete(id)}
                    />
                  </div>
                </td>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
};

export default UsersListPage;
