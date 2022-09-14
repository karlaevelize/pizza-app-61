import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [
    {
      name: "Sotto Pizza",
      id: 56642,
      pizzas: [1, 2],
    },
    {
      name: "I Pazzi",
      id: 56643,
      pizzas: [1],
    },
    {
      name: "Pizza Napoli",
      id: 56644,
      pizzas: [1, 3],
    },
    {
      name: "Eatmosfera",
      id: 56645,
      pizzas: [2, 3],
    },
  ],
};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
});

export const {} = restaurantSlice.actions;

export default restaurantSlice.reducer;