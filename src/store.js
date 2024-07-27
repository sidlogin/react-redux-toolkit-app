import postsSlice from "./features/posts/postsSlice";
import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/users/usersSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        users: usersSlice,
    }
});