import { useQuery } from "@tanstack/react-query";
import { getUser } from "api/users";
import { LoadingSpinner } from "components";
import React, { useReducer, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User, UserContextType } from "types";

const initialState: UserContextType = {
  setUser: (user) => {},
  user: undefined,
  logOut: () => {},
};

export const UserContext = React.createContext<UserContextType>(initialState);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  let userId = localStorage.getItem("userId");
  const { isLoading, isSuccess, isError, error, data } = useQuery(
    ["user", userId],
    () => getUser(userId ? userId : ""),
    {
      // fetch user only when "userId" is available
      enabled: !!userId,
    }
  );
  console.log("User ID from Provider", userId);

  const setLoggedUser = (user: User | undefined) => {
    if (user) {
      localStorage.setItem("userId", user.id.toString());
    }
  };

  const logOut = () => {
    localStorage.removeItem("userId");
    navigate("/login");
    userId = "";
  };

  if (isLoading && userId) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>error.message</div>;
  }

  if (isSuccess) {
    setLoggedUser(data);
  }

  return (
    <UserContext.Provider
      value={{
        user: data,
        setUser: setLoggedUser,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
