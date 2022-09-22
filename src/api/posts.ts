import axios from "./axios";

import models from "models";

export const create = async (post: models.Post) => {
  const response = await axios.post<models.Post>(`/posts`, post);
  return response.data;
};

export const getById = async (postId: string) => {
  const response = await axios.get<models.Post>(`/posts/${postId}`);
  return { ...response.data, date: new Date(response.data.date) };
};

export const getAll = async () => {
  const response = await axios.get<models.Post[]>(`/posts`);
  // Parse date and return
  return response.data.map((post) => ({
    ...post,
    date: new Date(post.date),
  }));
};

export const edit = async (post: models.Post) => {
  const response = await axios.put(`/posts/${post.id}`, post);
  return response.data;
};

export const remove = async (postId: string) => {
  const response = await axios.delete(`/posts/${postId}`);
  return response.data;
};
