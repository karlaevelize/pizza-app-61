import "./App.css";
import { Routes, Route } from "react-router-dom"
import PizzaList from "./pages/PizzaList";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/pizzas" element={<PizzaList/>}/>
      </Routes>
    </div>
  );
}

export default App;
