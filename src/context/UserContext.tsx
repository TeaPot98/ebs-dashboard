import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";

import api from "api";
import models from "models";

import { LoadingSpinner } from "components";

const initialState: models.UserContextType = {
  setUser: (user) => {},
  user: undefined,
  logOut: () => {},
};

export const UserContext =
  React.createContext<models.UserContextType>(initialState);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  let userId = localStorage.getItem("userId");
  const { isLoading, isSuccess, isError, error, data } = useQuery(
    ["user", userId],
    () => api.users.getById(userId!),
    {
      // fetch user only when "userId" is available
      enabled: !!userId,
      onSuccess: (data) => setLoggedUser(data),
    }
  );
  console.log("User ID from Provider", userId);

  const setLoggedUser = (user: models.User | undefined) => {
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
    throw new Error(
      error instanceof Error ? error.message : "An error occured"
    );
    // if (error instanceof Error) {
    //   return <div>Error: {error.message}</div>;
    // }
    // return <span>An unknown error occured</span>;
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
