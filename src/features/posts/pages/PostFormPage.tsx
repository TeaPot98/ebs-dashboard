import { Link, useParams } from "react-router-dom";

import { PostForm } from "../components/PostForm/PostForm";
import { Button, LoadingSpinner } from "components";
import { useQuery } from "@tanstack/react-query";
import api from "api";

export const PostFormPage = () => {
  const { id: postId } = useParams();
  const {
    isFetching,
    isError,
    data: post,
    error,
  } = useQuery(["posts", postId], () => api.posts.getById(postId!), {
    enabled: !!postId,
  });

  if (isFetching) {
    return <LoadingSpinner />;
  }

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: {error.message}</span>;
    }
    return <span>An unknown error occured</span>;
  }

  return (
    <div className="auth-page">
      <PostForm formData={post ? post : null} />
      <Link to="/posts">
        <Button className="back-button">Back</Button>
      </Link>
    </div>
  );
};
