import { Routes, Route } from "react-router-dom";

import { Chart, Dashboard } from "components";

import { Posts } from "../../features/posts/pages/Posts";
import { Users } from "../../features/users/pages/Users";

import "./Container.scss";

export const Container = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
};
