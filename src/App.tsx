import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "components";
import { AuthPage } from "./features/auth/pages/AuthPage";
import { NewPost } from "features/posts/pages/NewPost";
import { NoMatch } from "components/NoMatch/NoMatch";
import { UserContext, UserContextProvider } from "context/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      {/* <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Button type="danger">Danger button</Button>
      <LoginForm />
      <RegistrationForm />
      <Modal title="My Modal" open={open} onClose={() => setOpen(!open)}>
        Some content
      </Modal> */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/users" element={<Layout />} />
        <Route path="/posts" element={<Layout />} />
        <Route path="/posts/create" element={<NewPost />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />
        <Route
          path="*"
          element={user ? <NoMatch /> : <Navigate to="/login" replace={true} />}
        />
      </Routes>
    </div>
  );
}

export default App;
