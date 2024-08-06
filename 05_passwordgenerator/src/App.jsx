import { useState, useCallback } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [length, setLength] = useState(8) ;
  const [numberAllowed, setNumberAllowed] = useState(false) ;
  const [charAllowed, setCharAllowed] = useState(false) ;
  const [password, setPassword] = useState("") ;

  return (
    <>
      {/* welcome to the gym */}
      <h1 className="text-white">Password Generator</h1>
    </>
  );
}

export default App;
