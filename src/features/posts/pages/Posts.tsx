import { Link } from "react-router-dom";
import { Grid, Button } from "components";
import { PostCard } from "../components/PostCard/PostCart";
import { ContainerHeader } from "components/Container/ContainerHeader/ContainerHeader";

export const Posts = () => {
  return (
    <>
      <ContainerHeader className="container__header">
        <h2>Posts</h2>
        <Link to="create">
          <Button>Create new post</Button>
        </Link>
      </ContainerHeader>
      <Grid columns={2}>
        {Array.from(Array(10).keys()).map((post, i) => (
          <PostCard key={i} />
        ))}
      </Grid>
    </>
  );
};
