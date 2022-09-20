import "./Dashboard.scss";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "api/posts";
import { getAllUsers } from "api/users";
import { Chart, LoadingSpinner } from "components";
import { PostAuthorChart } from "types";
import { idText } from "typescript";

export const Dashboard = () => {
  const { data: users } = useQuery(["users"], async () => getAllUsers());
  const {
    isLoading,
    isError,
    isSuccess,
    data: posts,
    error,
  } = useQuery(["posts", users], async () => await getAllPosts(), {
    enabled: !!users,
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

  if (!posts) {
    return <span>Data is missing</span>;
  }

  console.log("Users", users);
  console.log("Posts", posts);

  if (isSuccess && users && posts) {
    if (users !== undefined) {
      var chartData: PostAuthorChart[] | undefined = users.map<PostAuthorChart>(
        (u) => ({ id: u.id, name: u.name, surname: u.surname, posts: 0 })
      );
    }

    posts.forEach((p) => {
      chartData = chartData?.map((author) =>
        p.author.id === author.id
          ? { ...author, posts: author.posts + 1 }
          : author
      );
    });
  }

  console.log(chartData);

  return (
    <div className="dashboard">
      <Chart data={chartData} />
    </div>
  );
};
