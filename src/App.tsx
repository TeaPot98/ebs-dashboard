import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "components";
import AuthPage from "./features/auth/pages/AuthPage";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      {/* <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Button type="danger">Danger button</Button>
      <LoginForm />
      <RegistrationForm />
      <Modal title="My Modal" open={open} onClose={() => setOpen(!open)}>
        Some content
      </Modal> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/users" element={<Layout />} />
          <Route path="/posts" element={<Layout />} />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/register" element={<AuthPage type="register" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
