import "./Dashboard.scss";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "api/posts";
import { getAllUsers } from "api/users";
import { Chart, LoadingSpinner } from "components";
import { PostAuthorChart } from "types";
import { idText } from "typescript";
import { getOneWeekDays } from "utils";

export const Dashboard = () => {
  const {
    isLoading,
    isError,
    isSuccess,
    data: posts,
    error,
  } = useQuery(["posts"], async () => await getAllPosts());

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

  let chartData = getOneWeekDays(-6).map((date) => {
    let output = {
      date: date,
      posts: 0,
    };

    for (let i = 0; i < posts.length; i++) {
      if (
        new Date(posts[i].date).getDate() ===
        new Date(Date.parse(date)).getDate()
      ) {
        output = {
          ...output,
          posts: output.posts + 1,
        };
      }
    }

    return output;
  });

  // Create array of authors. Each author contains number of posts.
  // if (isSuccess && users && posts) {
  //   if (users !== undefined) {
  //     var chartData: PostAuthorChart[] | undefined = users.map<PostAuthorChart>(
  //       (u) => ({ id: u.id, name: u.name, surname: u.surname, posts: 0 })
  //     );
  //   }

  //   posts.forEach((p) => {
  //     chartData = chartData?.map((author) =>
  //       p.author.id === author.id
  //         ? { ...author, posts: author.posts + 1 }
  //         : author
  //     );
  //   });
  // }

  return (
    <div className="dashboard">
      <Chart data={chartData} />
    </div>
  );
};
