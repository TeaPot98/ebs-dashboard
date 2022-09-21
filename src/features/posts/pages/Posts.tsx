import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getAllPosts } from "api/posts";

import { ContainerHeader } from "components/Container/ContainerHeader/ContainerHeader";
import { PostCard } from "../components/PostCard/PostCard";
import { Grid, Button, LoadingSpinner } from "components";

export const PostsContext = React.createContext({
  refetch: () => {},
});

export const Posts = () => {
  const { isLoading, isError, error, data, refetch } = useQuery(
    ["posts"],
    getAllPosts
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: {error.message}</span>;
    }
    return <span>An unknown error occured</span>;
  }

  if (!data) {
    return <span>Data is missing</span>;
  }

  return (
    <>
      <ContainerHeader className="container__header">
        <h2>Posts</h2>
        <Link to="create">
          <Button>+ Create new post</Button>
        </Link>
      </ContainerHeader>
      <PostsContext.Provider
        value={{
          refetch: refetch,
        }}
      >
        <Grid columns={4}>
          {data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid>
      </PostsContext.Provider>
    </>
  );
};
