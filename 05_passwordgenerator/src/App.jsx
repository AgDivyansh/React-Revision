import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      // const element = i];
      let ind = Math.floor(Math.random * srt.length + 1);
      pass += str.charAt(ind);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = () => {};

  // useEffect(() => {
  //   passwordGenerator()
  // }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    // <>
    //   {/* welcome to the gym */}

    //   <h1 className="text-white">Password Generator</h1>
    // </>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          value={password}
          placeholder="Password"
        />
        <button
          // onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            className="cursor-pointer"
            type="range"
            min={6}
            max={100}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label> Length: {length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            id="numberInput"
            defaultChecked={numberAllowed}
            type="checkbox"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Number's</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
