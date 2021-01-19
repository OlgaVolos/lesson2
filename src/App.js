import React, {useEffect, useReducer, useState} from "react";


const reducer = (state, action) =>{
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
            console.error('didn`t found case for action:' , action )
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



 
export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    let [counter, setCounter] = useState(1);
    const onClickHandler = () => {
        setCounter((prev) => prev +1)
    };

    const changeStatusHandler = () => dispatch({type:'CHANGE_TODO_STATUS'});
    const changeTitle = () => dispatch({type: 'CHANGE_TODO_TITLE', payload: Math.random()})





    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(value => value.json()).then((json)=> dispatch({type: "SET_TODO", payload: json }));
    }, [counter]);


    return(
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



        </div>
    )
    
}