import React, {useEffect, useReducer, useState, useMemo, memo } from "react";





export default function App() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_TODO": {
                return action.payload;
            }
            case 'CHANGE_TODO_STATUS': {
                return {
                    ...state,
                    completed: !state.completed

                };
            }
            case 'CHANGE_TODO_TITLE': {
                return {
                    ...state,
                    title: action.payload
                };
            }
            default: {
                console.error('didn`t found case for action:', action)
                return state;
            }
        }
    };

    const initialState = {
        userId: null,
        id: null,
        title: '',
        completed: false
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    let [counter, setCounter] = useState(1);
    const onClickHandler = () => {
        setCounter((prev) => prev + 1)
    };

    const changeStatusHandler = () => dispatch({type: 'CHANGE_TODO_STATUS'});
    const changeTitle = () => dispatch({type: 'CHANGE_TODO_TITLE', payload: Math.random()})


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(value => value.json()).then((json) => dispatch({type: "SET_TODO", payload: json}));
    }, [counter]);

    const Test = memo(() => {
        const [counter, setCounter] = useState(0)
        console.log('test was rerendered');
        // useEffect(() => {
        //     // console.log('mount');
        //     // const interval = setInterval(() => console.log('from interval'), 1000);
        //
        //     return () => {
        //         // console.log('unmount');
        //
        //         // clearInterval(interval)
        //     };
        // }, [counter])
        return (<h2 onClick={() => setCounter((prev) => prev + 1)}>Start {counter}</h2>
        );
    });


    const [isVisible, setIsVisible] = useState(false);

    const [arr, setArr]=useState([1,45,54,68757,545,1554,10]);


    const totalPrice = useMemo(()=> {
        // console.log('from use memo')
        return arr.reduce((acc, el)=> (acc+=el), 0);

    }, [arr]);



    return (
        <div>

            <button onClick={onClickHandler}>ink</button>
            <button onClick={changeStatusHandler}>change status</button>
            <button onClick={changeTitle}>change title</button>

            <h1>Counter value: {counter}</h1>
            {!!state && (
                <>
                    <h2>{state.id}</h2>
                    <h2>{state.title}</h2>
                    <h2>{state.completed.toString()}</h2>

                </>


            )}
            <hr/>
            <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
            {isVisible && <Test/>}
            <hr/>
            <button onClick={()=> setArr([...arr, Math.random()])}>Add to arr</button>
            <h3>{totalPrice}</h3>


        </div>
    )

}