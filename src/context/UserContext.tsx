import { getUser } from "api/users";
import React, { useReducer, useEffect } from "react";
import { User, UserContextType } from "types";
import userReducer from "./userReducer";

const initialState: UserContextType = {
  setUser: (user) => {},
  user: {
    id: 0,
    name: "",
    surname: "",
    email: "",
    gender: "none",
    role: "moderator",
  },
};

export const UserContext = React.createContext<UserContextType>(initialState);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const userId = localStorage.getItem("userId");
  const [state, dispatch] = useReducer(userReducer, initialState);
  console.log("User ID from Provider", userId);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const user = await getUser(userId);
        setUser(user);
      }
    };
    fetchUser();
  }, []);

  const setUser = (user: User) => {
    return dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
