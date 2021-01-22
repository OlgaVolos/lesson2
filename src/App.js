import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import React, {useEffect} from 'react'

function App() {
    const state = useSelector((state) => state);
    const counter = useSelector((state) => state.counter);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(value => value.json()).then((json) => dispatch({type: "SET_TODO", payload: json}));
    }, [counter,dispatch]);
    //чому воно вимагає dispatch??


    return (
        <div className="App">
            <button onClick={() => dispatch({type: 'CHANGE_COUNTER'})}>change</button>
            <button onClick={() => dispatch({type: 'CHANGE_STATUS'})}>status</button>
            <button onClick={() => dispatch({type: 'CHANGE_TITLE', payload: Math.random()})}>title</button>
            <h1>Counter {counter}</h1>
            {!!state && (
                <>
                    <h2>{user.id}</h2>
                    <h2>{user.title}</h2>
                    <h2>{user.completed.toString()}</h2>

                </>


            )}

        </div>
    );
}

export default App;
