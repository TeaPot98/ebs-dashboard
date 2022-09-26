import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { Modal, Space } from "ebs-design";

import { PostsContext } from "features/posts/pages/Posts";
import api from "api";
import models from "models";

import { Button, ConfirmationModal, UserAvatar } from "components";
import "./PostCard.scss";
import { Icon } from "ebs-design";

interface PostCardProps {
  post: models.Post;
  className?: string;
}

export const PostCard = ({
  post,
  className,
}: PostCardProps & JSX.IntrinsicElements["div"]) => {
  const navigate = useNavigate();
  const { refetch } = useContext(PostsContext);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  return (
    <div
      className={`post ${classNames(className)}`}
      onClick={(event) => {
        if (!className?.includes("details")) {
          event.stopPropagation();
          console.log("Open details");
          navigate(`/posts/${post.id}`);
        }
      }}
    >
      <div className="post__header">
        <div className="post__buttons">
          <Button
            onClick={(event: React.SyntheticEvent) => {
              event.stopPropagation();
              navigate(`/posts/${post.id}/edit`);
            }}
          >
            <Icon type="edit" style={{ width: "20px", height: "20px" }} />
          </Button>
          <Button
            color="danger"
            onClick={(event: React.SyntheticEvent) => {
              event.stopPropagation();
              setRemoveModalOpen(true);
            }}
          >
            <Icon type="error" style={{ width: "20px", height: "20px" }} />
          </Button>
        </div>
        <div>
          <h5 className="post__category">{post.category}</h5>
          <span className="post__date">{post.date.toDateString()}</span>
        </div>
      </div>
      <h1 className="post__title">{post.title}</h1>
      <div
        className="post__image"
        style={{ backgroundImage: `url(${post.imageUrl})` }}
      >
        {/* <img alt="" src={post.imageUrl} /> */}
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
      <Modal
        title="Remove post"
        open={removeModalOpen}
        onClose={() => setRemoveModalOpen(false)}
      >
        <Modal.Content>
          Are your sure you want to remove
          <b> "{post.title}" </b>
          from posts?
        </Modal.Content>
        <Modal.Footer>
          <Space justify="space-between">
            <Button onClick={() => setRemoveModalOpen(false)}>Cancel</Button>
            <Button
              color="danger"
              onClick={async (event: React.SyntheticEvent) => {
                event.stopPropagation();
                console.log("Post removed");

                await api.posts.remove(post.id.toString());

                refetch();
                setRemoveModalOpen(false);
              }}
            >
              Accept
            </Button>
          </Space>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
