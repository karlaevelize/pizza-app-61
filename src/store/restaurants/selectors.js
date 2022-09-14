export const selectRestaurants = (reduxState) => reduxState.restaurants.all

//cross slice selector
//we want to replace the pizza ids with the pizza object
export const selectRestaurantsWithPizzas = (reduxState) => {
  const restaurants = reduxState.restaurants.all;
  const pizzas = reduxState.pizzas.allPizzas;

  const restWithPizzas = restaurants.map((restaurant) => {
    const replacePizzas = restaurant.pizzas.map((pizzaId) =>
      pizzas.find((fullPizza) => pizzaId === fullPizza.id)
    );
    return { ...restaurant, pizzas: replacePizzas };
  });

  return restWithPizzas;
}

//parameterized selector
//write a selector to get all restaurants that sell a specific pizza
//this selector needs to take a paramter pizza id
//it will look like a thunk: const example = () => () => {}

