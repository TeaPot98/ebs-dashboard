import { Button } from "components";
import { Link } from "react-router-dom";
import { PostForm } from "../components/PostForm/PostForm";

export const PostFormPage = () => {
  return (
    <div className="auth-page">
      <PostForm />
      <Link to="/posts">
        <Button className="back-button">Back</Button>
      </Link>
    </div>
  );
};
