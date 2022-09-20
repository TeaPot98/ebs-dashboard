import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { PostForm } from "../components/PostForm/PostForm";
import { Button, LoadingSpinner } from "components";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "api/posts";
import { Post } from "types";

export const PostFormPage = () => {
  const location = useLocation();
  const { id: postId } = useParams();
  const {
    isFetching,
    isError,
    isSuccess,
    data: post,
    error,
    ...rest
  } = useQuery(["posts", postId], () => getPost(postId!), {
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
