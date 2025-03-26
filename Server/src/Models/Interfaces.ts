export interface User {
  userid: number;
  username: string;
  email: string;
  role: string;
  jobPosition: string;
  phone: string;
  name: string;
}

export interface TokenPayload {
  email: string;
  username: string;
  userid: number;
  role: string;
  jobPosition: string;
  phone: string;
  name: string;
}
