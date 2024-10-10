import { PATH_NAMES } from "../../modules/router/constants.ts";
import { USER_ROLES } from "../../constants/users.ts";

export const NAVBAR_PAGES = [
  {
    role: [USER_ROLES.ADMIN, USER_ROLES.USER, USER_ROLES.EMPLOYEE],
    name: "Home",
    to: PATH_NAMES.homePage,
  },
  {
    role: [USER_ROLES.ADMIN, USER_ROLES.USER, USER_ROLES.EMPLOYEE],
    name: "Conferences",
    to: PATH_NAMES.conferencesPage,
  },
  {
    role: [USER_ROLES.ADMIN],
    name: "Users",
    to: PATH_NAMES.usersListPage,
  },
];
