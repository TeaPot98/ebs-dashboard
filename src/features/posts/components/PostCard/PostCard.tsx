import { useState, useContext } from "react";
import { removeUser } from "api/users";
import { Button, ConfirmationModal, UserAvatar } from "components";
import { Post } from "types";
import "./PostCard.scss";
import { PostsContext } from "features/posts/pages/Posts";
import { removePost } from "api/posts";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();
  const { refetch } = useContext(PostsContext);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__buttons">
          <Button onClick={() => navigate(`/posts/${post.id}/edit`)}>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" />
          </Button>
          <Button type="danger" onClick={() => setRemoveModalOpen(true)}>
            <img src="https://cdn-icons-png.flaticon.com/512/542/542724.png" />
          </Button>
        </div>
        <h5 className="post__category">{post.category}</h5>
        <span className="post__date">{post.date.toDateString()}</span>
        <h1 className="post__title">{post.title}</h1>
      </div>
      <img className="post__image" src={post.imageUrl} />
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
        onAccept={() => {
          console.log("Post removed");
          removePost(post.id.toString());
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
