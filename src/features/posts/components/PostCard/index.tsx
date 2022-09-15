import { UserAvatar } from "components";
import "./PostCard.scss";

const PostCard = () => {
  return (
    <div className="post">
      <div className="post__header">
        <h5 className="post__category">Category</h5>
        <span className="post__date">17th March</span>
        <h1 className="post__title">
          Material Design Card - For Blog Post Article
        </h1>
      </div>
      <img
        className="post__image"
        src="https://wallpaperaccess.com/full/166015.jpg"
      />
      <div className="post__body">
        <p className="post__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="post__footer">
        <UserAvatar name="John" surname="Doe" />
        <span className="post__author">
          By <span>John Doe</span>
        </span>
      </div>
    </div>
  );
};

export default PostCard;
