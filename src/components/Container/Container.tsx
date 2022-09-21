import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Chart, Dashboard } from "components";
import { Roles } from "utils";

import { Posts } from "../../features/posts/pages/Posts";
import { Users } from "../../features/users/pages/Users";

import "./Container.scss";
import { UserContext } from "context/UserContext";

export const Container = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/users"
          element={
            user!.role === Roles.Administrator ? (
              <Users />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
};
