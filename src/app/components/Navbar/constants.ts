import { PATH_NAMES } from "../../modules/router/constants.ts";
import { USER_ROLES } from "../../constants/users.ts";

export const NAVBAR_PAGES = [
  {
    isHidden: true,
    isPublic: false,
    role: null,
    name: "Home",
    to: PATH_NAMES.homePage,
  },
  {
    isHidden: false,
    isPublic: true,
    role: null,
    name: "Conferences",
    to: PATH_NAMES.conferencesPage,
  },
  {
    isHidden: false,
    isPublic: true,
    role: null,
    name: "Users",
    to: PATH_NAMES.usersPage,
  },
  {
    isHidden: true,
    isPublic: false,
    role: [USER_ROLES.ADMIN, USER_ROLES.USER, USER_ROLES.EMPLOYEE],
    name: "Settings",
    to: PATH_NAMES.settingsPage,
  },
  {
    isHidden: false,
    isPublic: true,
    role: null,
    name: "Create user",
    to: PATH_NAMES.createUserPage,
  },
];
