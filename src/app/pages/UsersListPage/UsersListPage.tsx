import { userData } from "../../api/users/constants.ts";

const UsersListPage = () => {
  return (
    <table className={"table-auto w-full text-center bg-slate-100 rounded-lg"}>
      <thead>
        <tr className={"border-b border-slate-500 py-3 text-slate-500 "}>
          <th className={"py-3 pl-3 text-slate-700"}>Id</th>
          <th className={"py-3"}>Name</th>
          <th className={"py-3"}>Surname</th>
          <th className={"py-3"}>Username</th>
          <th className={"py-3"}>Created at</th>
          <th className={"py-3 pr-3"}>Last login</th>
        </tr>
      </thead>

      <tbody>
        {userData.map(
          (
            { id, firstName, lastName, lastLogin, createdAt, username },
            index,
          ) => {
            const isLastRow = index === userData.length - 1;

            return (
              <tr
                key={id}
                className={`${!isLastRow ? "border-b border-slate-500" : ""} hover:text-blue-400 hover:bg-black`}
              >
                <td className={"py-3 pl-3 font-bold"}>{id}</td>
                <td className={"py-3"}>{firstName}</td>
                <td className={"py-3"}>{lastName}</td>
                <td className={"py-3"}>{username}</td>
                <td className={"py-3"}>{createdAt}</td>
                <td className={"py-3 pr-3"}>{lastLogin}</td>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
};

export default UsersListPage;
