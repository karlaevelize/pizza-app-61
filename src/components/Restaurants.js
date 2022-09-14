import { useSelector } from "react-redux"
import { selectRestaurantsWithPizzas } from "../store/restaurants/selectors"

const Restaurants = () => {

  const restaurants = useSelector(selectRestaurantsWithPizzas)

  return (
    <div>
      <b>Restaurants</b>
      {restaurants.map(restaurant => {
        return (
          <div key={restaurant.id}>
            <p><b>{restaurant.name}</b></p>
            {restaurant.pizzas.map(pizza => 
              <li key={pizza.id}>{pizza.name}</li>
            )}
          </div>
        )
      })}
      <br/>
    </div>
  )
}

export default Restaurants