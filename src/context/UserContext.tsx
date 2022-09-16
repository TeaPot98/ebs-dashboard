import { getUser } from "api/users";
import React, { useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, UserContextType } from "types";
// import userReducer from "./userReducer";

const initialState: UserContextType = {
  setUser: (user) => {},
  user: undefined,
};

export const UserContext = React.createContext<UserContextType>(initialState);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState<User | undefined>();
  // const [state, dispatch] = useReducer(userReducer, initialState);
  console.log("User ID from Provider", userId);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const fetchedUser = await getUser(userId);
        setLoggedUser(fetchedUser);
        return;
      }
      navigate("/login");
    };
    fetchUser();
  }, []);

  const setLoggedUser = (user: User | undefined) => {
    if (user) {
      localStorage.setItem("userId", user.id.toString());
    }
    setUser(user);
  };

  // const setUser = (user: User) => {
  //   return dispatch({
  //     type: "SET_USER",
  //     payload: user,
  //   });
  // };

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setLoggedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
