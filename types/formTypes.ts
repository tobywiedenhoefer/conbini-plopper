export type buttonStatusTypes =
  | "off"
  | "loading"
  | "submitted"
  | "error"
  | "success";

export type formInputFields = {
  email: string;
  password: string;
  confirmPassword?: string;
};
