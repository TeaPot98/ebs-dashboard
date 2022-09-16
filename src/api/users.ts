import axios from "axios";

import { User, UserCredentials, UserRegistration } from "types";

const registerUser = async (user: UserRegistration) => {
  try {
    const response = await axios.post<User>(
      "http://localhost:3001/users",
      user
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (userCredentials: UserCredentials) => {
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

const getUser = async (userId: string) => {
  try {
    const response = await axios.get<User>(
      `http://localhost:3001/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { registerUser, loginUser, getUser };
