import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Container, Row, Col } from "ebs-design";

import api from "api";

import { ContainerHeader } from "components/Container/ContainerHeader";
import { PostCard } from "../components/PostCard/PostCard";
import { Button, LoadingSpinner } from "components";

export const PostsContext = React.createContext({
  refetch: () => {},
});

export const Posts = () => {
  const numberOfColumns = 4;
  const {
    isLoading,
    isError,
    error,
    data: posts,
    refetch,
  } = useQuery(["posts"], api.posts.getAll);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    throw new Error(error instanceof Error ? error.message : "Unkown error ");
  }

  // console.log(posts.length);

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
        {/* <Grid columns={4}>
          {data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid> */}
        <Container
          style={{ overflow: "auto", boxSizing: "border-box", height: "100%" }}
          size="fluid"
        >
          {Array.from(
            Array(Math.ceil(posts.length / numberOfColumns)).keys()
          ).map((rowIndex) => (
            <Row gx={4} key={rowIndex}>
              {posts.map(
                (post, postIndex) =>
                  postIndex < numberOfColumns * (rowIndex + 1) &&
                  postIndex > rowIndex * numberOfColumns - 1 && (
                    <Col gx={4} className="mb-16" key={post.id}>
                      <PostCard post={post} />
                    </Col>
                  )
              )}
            </Row>
          ))}
        </Container>
      </PostsContext.Provider>
    </>
  );
};
