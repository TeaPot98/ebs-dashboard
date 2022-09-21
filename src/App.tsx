import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthPage } from "./features/auth/pages/AuthPage";
import { PostFormPage } from "features/posts/pages/PostFormPage";
import { PostDetails } from "features/posts/pages/PostDetails";
import { Layout } from "components";
import { UserContext } from "context/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/posts/create"
          element={user ? <PostFormPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/posts/:id"
          element={user ? <PostDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/posts/:id/edit"
          element={user ? <PostFormPage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          }
        />
        <Route
          path="*"
          element={user ? <Layout /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
