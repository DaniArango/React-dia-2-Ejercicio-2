import { useState } from "react";
import "./Counter.css"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

    return (
        <div>{counter}
       
        <button className="button" onClick={increment}>+</button>
        <button className="button" onClick={decrement}>-</button>
        <button className="button" onClick={reset}>Reset</button>
        </div>
    )
};

export default Counter