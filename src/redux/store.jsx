import { configureStore } from "@reduxjs/toolkit";
import route from "./route";
import user from "./user";
import category from "./category";
import lang  from "./lang";

export const store = configureStore({
  reducer: { route, user, category, lang },
});
export const { dispatch } = store;
