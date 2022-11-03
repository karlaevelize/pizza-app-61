import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PizzaList from "./pages/PizzaList";
import PostsPage from "./pages/PostsPage";
import PostDetails from "./pages/PostDetails";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import { persistLogin } from "./store/user/thunks"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(persistLogin())
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/pizzas" element={<PizzaList />} />
      </Routes>
    </div>
  );
}

export default App;
