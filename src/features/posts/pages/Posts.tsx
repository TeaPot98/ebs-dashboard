import { Grid } from "components";
import { PostCard } from "../components/PostCard/PostCart";

export const Posts = () => {
  return (
    <Grid columns={2}>
      {Array.from(Array(10).keys()).map((post, i) => (
        <PostCard key={i} />
      ))}
    </Grid>
  );
};
