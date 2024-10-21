import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";

const store = configureStore({
  reducer: {
    data: {
      users: usersReducer,
    },
  },
});

export default store;
