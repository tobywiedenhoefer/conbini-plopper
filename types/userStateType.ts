import { Optional } from "~/types/genericTypes";

type UserStateType = {
  loggedIn: boolean;
  email?: Optional<string>;
  uid?: Optional<string>;
  name?: Optional<string>;
};

export default UserStateType;
