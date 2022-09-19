import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "components";
import { AuthPage } from "./features/auth/pages/AuthPage";
import { NewPost } from "features/posts/pages/NewPost";
import { UserContext } from "context/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/posts/create" element={<NewPost />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />
        <Route
          path="*"
          element={user ? <Layout /> : <Navigate to="/login" replace={true} />}
        />
      </Routes>
    </div>
  );
}

export default App;
