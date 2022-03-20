import "./App.css";
import { Routes, Route } from "react-router-dom";
import Order from "./screens/orderPage/order";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Order />} />
    </Routes>
  );
}

export default App;
