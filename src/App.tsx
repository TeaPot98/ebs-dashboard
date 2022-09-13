import React, { useState } from "react";

import Button from "./components/Button";
import Modal from "./components/Modal";
import InputField from "./components/InputFIeld";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Button type="danger">Danger button</Button>
      <LoginForm />
      <RegistrationForm />
      <Modal title="My Modal" open={open} onClose={() => setOpen(!open)}>
        Some content
      </Modal>
    </div>
  );
}

export default App;
