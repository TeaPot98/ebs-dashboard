import PostCard from "../components/PostCard";

const Posts = () => {
  return (
    <div className="posts">
      {Array.from(Array(10).keys()).map((post, i) => (
        <PostCard key={i} />
      ))}
    </div>
  );
};

export default Posts;
