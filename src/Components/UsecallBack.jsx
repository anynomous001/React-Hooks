import React, { useCallback } from 'react'

// Use case: useCallback is used to memoize functions,
// meaning it returns a memoized version of the callback function
// that only changes if one of the dependencies has changed.
// It's helpful for optimizing performance,especially when passing callbacks to child
//  components that rely on reference equality.

const ButtonComponent = React.memo(({ handleClick }) => {
    console.log('ButtonComponent re-rendered')
    return <> <button onClick={handleClick} >Click Me</button> <br /> </>

})

const ButtonComponent2 = React.memo(({ click }) => {
    console.log('ButtonComponent2 re-rendered')
    return <> <button onClick={click}>Button Component2</button> <br /> </>

})


const UsecallBack = () => {
    const [count, setCount] = React.useState(0)

    // 1st example
    // const handleClick = useCallback(() => {
    //     setCount(count => count + 1)
    // }, [])

    // return (
    //     <>
    //         <p>Count is : {count}</p>
    //         <ButtonComponent handleClick={handleClick} />
    //         {/* <ButtonComponent2 /> */}
    //     </>
    // )


    const handleClick = () => {
        setCount(count => count + 1)
        console.log("state updated");
    };

    const handleClick2 = useCallback(() => {
        console.log("State not updated");
    }, []);



    return (
        <div>
            <button onClick={handleClick}>Click me</button> {/* Clicking triggers re-render */}
            <ButtonComponent2 click={handleClick2} />
        </div>
    );
}

export default UsecallBack