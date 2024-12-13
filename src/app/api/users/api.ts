import {
  fetchDelete,
  fetchGet,
  fetchPatch,
  fetchPost,
  fetchPut,
} from "../../utils/api.ts";
import { CreateUserType, UserType } from "../../types/userType.ts";

export const getUsersList = (): Promise<UserType[]> => {
  return fetchGet({ url: `users` });
};

export const getUser = (id: number): Promise<UserType> => {
  return fetchGet({ url: `users/${id}` });
};

export const createUser = ({
  name,
  age,
  username,
  email,
  birthDate,
}: CreateUserType) => {
  return fetchPost(`users`, { name, age, username, email, birthDate });
};

export const updateUser = (data: UserType) => {
  return fetchPut(`users/${data.id}`, data);
};

export const deleteUser = (id: number) => {
  return fetchDelete(`users/${id}`);
};
