import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import api from "api";

import { ContainerHeader } from "components/Container/ContainerHeader";
import { PostCard } from "../components/PostCard/PostCard";
import { Grid, Button, LoadingSpinner } from "components";

export const PostsContext = React.createContext({
  refetch: () => {},
});

export const Posts = () => {
  const { isLoading, isError, error, data, refetch } = useQuery(
    ["posts"],
    api.posts.getAll
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    throw new Error(error instanceof Error ? error.message : "Unkown error ");
  }

  return (
    <>
      <ContainerHeader className="container__header">
        <h2>Posts</h2>
        <Link to="create">
          <Button type="primary">+ Create new post</Button>
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
