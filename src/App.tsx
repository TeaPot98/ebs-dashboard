import React, { useState } from 'react';

import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="App">
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Button type="danger">Danger button</Button>
      <Modal 
        title="My Modal"
        open={open}
        onClose={() => setOpen(!open)}
      >
        Some content
      </Modal>
    </div>
  );
}

export default App;
