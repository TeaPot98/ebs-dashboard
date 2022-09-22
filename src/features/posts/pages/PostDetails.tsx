import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import api from "api";
import { LoadingSpinner, Button } from "components";
import { PostCard } from "../components/PostCard/PostCard";

export const PostDetails = () => {
  const { id: postId } = useParams();
  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery(["post-details"], () => api.posts.getById(postId!), {
    enabled: !!postId,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: {error.message}</span>;
    }
    return <span>An unknown error occured</span>;
  }

  if (!post) {
    return <span>No post found</span>;
  }

  return (
    <div className="post-details">
      <PostCard post={post} className="details" />
      <Link to="/posts">
        <Button className="back-button">Back</Button>
      </Link>
    </div>
  );
};
