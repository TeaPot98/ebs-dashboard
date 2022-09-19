import axios from "axios";

import { Post } from "types";

export const uploadPost = async (post: Post) => {
  try {
    const response = await axios.post<Post>(
      "http://localhost:3001/posts",
      post
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async (postId: string) => {
  try {
    const response = await axios.get<Post>(
      `http://localhost:3001/posts/${postId}`
    );
    return { ...response.data, date: new Date(response.data.date) };
  } catch (error) {
    console.error(error);
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get<Post[]>("http://localhost:3001/posts");

    // Parse date and return
    return response.data.map((post) => ({
      ...post,
      date: new Date(post.date),
    }));
  } catch (error) {
    console.error(error);
  }
};

export const editPost = async (post: Post) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/posts/${post.id}`,
      post
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const removePost = async (postId: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:3001/posts/${postId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
