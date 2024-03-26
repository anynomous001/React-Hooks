import React from 'react'

const MyComponent = React.memo(({ name }) => {
    console.log("Rendering...with Memo");
    return <div>Hello, {name}</div>;
})


const MyComponent2 = ({ name }) => {
    console.log("Rendering...without Memo");
    return <div>Hello, {name}</div>;
}


const ReactMemo = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <MyComponent name="Alice" /> <br />
            <MyComponent name="Bob" /><br />
            <MyComponent2 name="Babai" /><br />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default ReactMemo
