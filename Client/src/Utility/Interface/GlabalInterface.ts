export interface FormData {
  email: string;
  password: string;
  name: string;
  phone: string;
  confirmPassword: string;
  username: string;
}

export interface FormDataRoleAndPosition {
  role: string;
  jobPosition: string;
}

export interface UserType {
  userid: string;
  username: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  jobPosition: string;
}
