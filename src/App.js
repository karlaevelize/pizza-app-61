import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import PizzaList from "./components/PizzaList";
import Restaurants from "./components/Restaurants";

function App() {

  return (
    <div className="App">
      <Restaurants/>
      <AddPizzaForm/>
      <PizzaList/>
    </div>
  );
}

export default App;
