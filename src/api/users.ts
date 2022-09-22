import axios from "./axios";

import { User, UserCredentials, UserRegistration } from "types";

export const register = async (user: UserRegistration) => {
  try {
    // Check if user already exists
    const response = await axios.get<User[]>(`/users?email=${user.email}`);
    if (response.data.length > 0) {
      throw new Error("The user with this email already exists");
    }
    // Register new user
    const registeredUser = await axios.post<User>(`/users`, user);
    return registeredUser.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const edit = async (user: User) => {
  try {
    const response = await axios.put(`/users/${user.id}`, user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const remove = async (userId: string) => {
  try {
    const response = await axios.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (userCredentials: UserCredentials) => {
  try {
    const response = await axios.get<User[]>(
      `/users?email=${userCredentials.email}&password=${userCredentials.password}`
    );
    if (response.data.length === 0) {
      throw new Error("Incorrect email or password!");
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getById = async (userId: string) => {
  try {
    const response = await axios.get<User>(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAll = async () => {
  try {
    const response = await axios.get<User[]>(`/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
