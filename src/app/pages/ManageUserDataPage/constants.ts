import { date, number, object, string } from "yup";

export const USER_SCHEMA = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().required().email(),
  username: string().required(),
  birthDate: date().required(),
});
