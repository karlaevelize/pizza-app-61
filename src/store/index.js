import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from "./pizzas/slice";
import userReducer from "./user/slice"
import restaurantReducer from "./restaurants/slice"

const store = configureStore({
  reducer: {
    user: userReducer,
    pizzas: pizzasReducer,
    restaurants: restaurantReducer
  },
});

export default store;