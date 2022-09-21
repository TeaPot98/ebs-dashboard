import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PostsContext } from "features/posts/pages/Posts";
import { removePost } from "api/posts";
import { Post } from "types";

import { Button, ConfirmationModal, UserAvatar } from "components";
import "./PostCard.scss";

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post;
  className?: string;
}

export const PostCard = ({ post, className }: PostCardProps) => {
  const navigate = useNavigate();
  const { refetch } = useContext(PostsContext);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  return (
    <div
      className={`post ${className}`}
      onClick={(event) => {
        if (!className?.includes("details")) {
          navigate(`/posts/${post.id}`);
        }
      }}
    >
      <div className="post__header">
        <div className="post__buttons">
          <Button
            onClick={(event) => {
              event.stopPropagation();
              navigate(`/posts/${post.id}/edit`);
            }}
          >
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
            />
          </Button>
          <Button
            type="danger"
            onClick={(event) => {
              event.stopPropagation();
              setRemoveModalOpen(true);
            }}
          >
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
            />
          </Button>
        </div>
        <div>
          <h5 className="post__category">{post.category}</h5>
          <span className="post__date">{post.date.toDateString()}</span>
        </div>
      </div>
      <h1 className="post__title">{post.title}</h1>
      <div className="post__image">
        <img alt="" src={post.imageUrl} />
      </div>
      <div className="post__body">
        <p className="post__description">{post.description}</p>
      </div>
      <div className="post__footer">
        <UserAvatar name={post.author.name} surname={post.author.surname} />
        <span className="post__author">
          By{" "}
          <span>
            {post.author.name} {post.author.surname}
          </span>
        </span>
      </div>
      <ConfirmationModal
        title="Remove post"
        open={removeModalOpen}
        onClose={() => setRemoveModalOpen(false)}
        onAccept={async () => {
          console.log("Post removed");
          await removePost(post.id.toString());
          refetch();
          setRemoveModalOpen(false);
        }}
      >
        Are your sure you want to remove
        <b> "{post.title}" </b>
        from posts?
      </ConfirmationModal>
    </div>
  );
};
