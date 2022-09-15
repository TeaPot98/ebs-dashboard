export interface User {
  id?: number;
  name: string;
  surname: string;
  email: string;
  gender: "male" | "female" | "none";
  role: "administrator" | "moderator";
  password?: string;
}

export interface UserRegistration extends User {
  passConfirmation: string;
  agreement: boolean;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}
