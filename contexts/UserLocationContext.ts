import { createContext, useContext } from "react";

import { LocationObject } from "expo-location";

export type UserLocationObject = {
  location: LocationObject | null;
};

const UserLocationContext = createContext<UserLocationObject>({
  location: null,
});

export default UserLocationContext;
export const useUserLocationContext = () => useContext(UserLocationContext);
