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
        {user ? (
          <>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/posts/create" element={<PostFormPage />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/posts/:id/edit" element={<PostFormPage />} />
            <Route path="/login" element={<AuthPage type="login" />} />
            <Route path="/register" element={<AuthPage type="register" />} />
            <Route path="*" element={<Layout />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<AuthPage type="login" />} />
            <Route path="/register" element={<AuthPage type="register" />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
