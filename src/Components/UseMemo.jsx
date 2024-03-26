import React, { useMemo, useState } from 'react';
// Use case: useMemo is used to memoize the result of expensive calculations so 
// that the calculation is only executed when the dependencies change. 
// It's useful for optimizing performance by avoiding unnecessary re-renders.


const UseMemo = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // Without useMemo
    console.log("Calculating without useMemo..."); // Add console.log to observe calculation
    const expensiveCalculation = count * 4;

    // With useMemo
    const expensiveCalculationMemoized = useMemo(() => {
        console.log("Calculating with useMemo..."); // Add console.log to observe calculation
        return count * 2;
    }, [count]);

    return (
        <div>
            <p>Result without useMemo: {expensiveCalculation}</p> {/* Re-renders on every state change */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount2(count2 + 1)}>Increment2</button> <br />
            <p>Result with useMemo: {expensiveCalculationMemoized}</p> {/* Re-renders only when count changes */}
        </div>
    );


}

export default UseMemo