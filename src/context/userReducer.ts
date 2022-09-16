import { getUser } from "api/users";
import { User, UserContextType } from "types";

type Action = {
  type: "SET_USER";
  payload: User;
};

const userReducer = (state: UserContextType, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER":
      // const user = await getUser(payload);
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default userReducer;
