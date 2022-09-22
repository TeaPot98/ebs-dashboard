import axios from "./axios";

import { Post } from "types";

export const create = async (post: Post) => {
  try {
    const response = await axios.post<Post>(`/posts`, post);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (postId: string) => {
  try {
    const response = await axios.get<Post>(`/posts/${postId}`);
    return { ...response.data, date: new Date(response.data.date) };
  } catch (error) {
    console.error(error);
  }
};

export const getAll = async () => {
  try {
    const response = await axios.get<Post[]>(`/posts`);

    // Parse date and return
    return response.data.map((post) => ({
      ...post,
      date: new Date(post.date),
    }));
  } catch (error) {
    console.error(error);
  }
};

export const edit = async (post: Post) => {
  try {
    const response = await axios.put(`/posts/${post.id}`, post);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const remove = async (postId: string) => {
  try {
    const response = await axios.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
