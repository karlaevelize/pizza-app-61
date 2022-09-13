import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from "./pizzas/slice";
import userReducer from "./user/slice"

const store = configureStore({
  reducer: {
    user: userReducer,
    pizzas: pizzasReducer
  },
});

export default store;