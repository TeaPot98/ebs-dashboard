import axios from "axios";

import { User, UserCredentials, UserRegistration } from "types";

export const registerUser = async (user: UserRegistration) => {
  try {
    // Check if user already exists
    const response = await axios.get<User[]>(
      `http://localhost:3001/users?email=${user.email}`
    );
    if (response.data.length > 0) {
      throw new Error("The user with this email already exists");
    }
    // Register new user
    const registeredUser = await axios.post<User>(
      "http://localhost:3001/users",
      user
    );
    return registeredUser.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editUser = async (user: User) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/users/${user.id}`,
      user
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const removeUser = async (userId: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:3001/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (userCredentials: UserCredentials) => {
  try {
    const response = await axios.get<User[]>(
      `http://localhost:3001/users?email=${userCredentials.email}&password=${userCredentials.password}`
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

export const getUser = async (userId: string) => {
  try {
    const response = await axios.get<User>(
      `http://localhost:3001/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get<User[]>("http://localhost:3001/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
