import React from "react";
import "./index.css";
import Navbar from "./NavBar";
import Greeter from "./Greeter";
import Counter from "./Counter";
import MoodToggler from "./MoodToggler";
import Cart from "./Cart";

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 }
];

function App() {
  return (
    <div>
      <Cart initialItems={items} />
      <Counter step={5} />
      <Counter />
      <MoodToggler />
      <Navbar />
      <Greeter name="Craig" age="35" excitement={4} />
      <Greeter name="Sahra" age="47" excitement={2} />
      <h1>Hello From App!</h1>
    </div>
  );
}
export default App;
