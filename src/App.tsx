import { Routes, Route } from "react-router-dom";

import { Layout } from "components";
import { AuthPage } from "./features/auth/pages/AuthPage";
import { PostFormPage } from "features/posts/pages/PostFormPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/posts/create" element={<PostFormPage />} />
        <Route path="/posts/:id/edit" element={<PostFormPage />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
