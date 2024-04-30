import { getAuth, createUserWithEmailAndPassword, User } from "firebase/auth";

import { formInputFields } from "~/types/formTypes";
import { app } from "~/services/firebase";

export async function signUpUser(inputFields: formInputFields): Promise<User> {
  if (inputFields.password !== inputFields.confirmPassword) {
    throw new Error("Input passwords must be equal!");
  }
  const auth = getAuth(app);
  const user = await createUserWithEmailAndPassword(
    auth,
    inputFields.email,
    inputFields.password
  );
  return user.user;
}
