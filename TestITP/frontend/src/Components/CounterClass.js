import React, { useState } from "react";

const CounterFunction = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    return (
        <div>
            <h1>Counter - {number}</h1>
            <button onClick={increment}>Increment</button>

        
        </div>


    );
};

export default CounterFunction;
