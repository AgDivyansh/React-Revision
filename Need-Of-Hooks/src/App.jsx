import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  let [counter, setcounter] = useState(0);
  function add ()
  {
    // console.log("add function is clicked") ;
    // setct  ct+1 ;
    if (counter < 20)
    setcounter(counter+1) ;
  else
  alert('value can not be greater then 20') ;
  
    // alert('add function is called') ;
  }
  const Decrease = () => {
    if (counter > 0)
    {

      setcounter(counter-1) ;
    }
    else
    {
      alert('value can not be less then 0') ;
    }

  }
  
  return (
    <>
      {/* <h1>welcome to the </h1> */}
      {/* const [counter, setcounter] = useState(0) ; */}

      <div>{counter}</div>

      <button onClick={add}>Increase</button>
      <br />
      <button
      onClick={Decrease}
      >Decrease</button>
    </>
  );
}

export default App;
