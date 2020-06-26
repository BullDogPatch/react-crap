import React from "react";

function Greeter({ name, age, excitement = 1 }) {
  function greet() {
    alert(`Hello there, ${name}`);
  }

  return (
    <>
      <h1>
        Hi there {name} {"!".repeat(excitement)}
      </h1>
      <p>You are {age} years old</p>
      <button onClick={greet}>Click Me</button>
    </>
  );
}

export default Greeter;
