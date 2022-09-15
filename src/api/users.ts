import axios from "axios";

import { User, UserCredentials } from "types";

const registerUser = async (user: User) => {
  try {
    const response = await axios.post("http://localhost:3001/users", user);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (userCredentials: UserCredentials) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/users?email=${userCredentials.email}&password=${userCredentials.password}`
    );
    if (response.data.length === 0) {
      throw new Error("Incorrect email or password!");
    }
    console.log(response.data);
    return response;
  } catch (error) {
    throw error;
  }
};

export { registerUser, loginUser };
