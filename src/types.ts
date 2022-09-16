export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  gender: "male" | "female" | "none";
  role: "administrator" | "moderator";
  password?: string;
}

export type UserRegistration = Omit<User, "id">;

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserContextType {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  logOut: () => void;
}
