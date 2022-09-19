import { Routes, Route } from "react-router-dom";

import { Layout } from "components";
import { AuthPage } from "./features/auth/pages/AuthPage";
import { NewPost } from "features/posts/pages/NewPost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/posts/create" element={<NewPost />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/register" element={<AuthPage type="register" />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
