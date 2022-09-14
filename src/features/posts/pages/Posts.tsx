import PostCard from "../components/PostCard";
import Table from "../../../components/Table";

const Posts = () => {
  return (
    <Table columns={1}>
      {Array.from(Array(10).keys()).map((post, i) => (
        <PostCard key={i} />
      ))}
    </Table>
  );
};

export default Posts;
