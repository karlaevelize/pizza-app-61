import "./App.css";
import { Routes, Route } from "react-router-dom";
import PizzaList from "./pages/PizzaList";
import PostsPage from "./pages/PostsPage";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/pizzas" element={<PizzaList />} />
      </Routes>
    </div>
  );
}

export default App;
