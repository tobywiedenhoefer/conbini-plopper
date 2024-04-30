import { createContext } from "react";

import UserStateType from "~/types/userStateType";

export const defaultUser: UserStateType = { loggedIn: false };
export const UserContext = createContext(defaultUser);
