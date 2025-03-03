import "./App.css";
import Counter from "./components/Counter";
// import ExponentTwo from "./components/ExponentTwo";
// import ExponentThree from "./components/ExponentThree";
// import ExponentFour from "./components/ExponentFour";
// import ExponentFive from "./components/ExponentFive";
// import ExponentSix from "./components/ExponentSix";
import Exponent from "./components/Exponent";

import { useState } from "react";

function App () {

  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} increment={increment} decrement={decrement}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent count={count} power={2}/>
        <Exponent count={count} power={3}/>
        <Exponent count={count} power={4}/>
        <Exponent count={count} power={5}/>
        <Exponent count={count} power={6}/>

        {/* <ExponentTwo count={count}/>
        <ExponentThree count={count}/>
        <ExponentFour count={count}/>
        <ExponentFive count={count}/>
        <ExponentSix count={count}/> */}
      </div>
      
    </div>
  );
}

export default App;
