import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {incCounter,
  decCounter,
  resetCounter, fetchTodos} from './redux'

function App() {

  // const counter = useSelector(({counter}) => counter.counter);
  // const todos = useSelector(({todos}) => todos.todos);

  const {todos, counter} = useSelector(
  ({counter:{counter}, todos: {todos}}) => ({
    todos,
    counter
  })
  );
  // const storeData = useSelector(({counter: {counter}, todos: {todos}}) => ({todos, counter}))
  const dispatch = useDispatch();



  useEffect(() => {
    fetchTodos(dispatch);

  }, [dispatch])

  const handleInc = () => dispatch(incCounter())
  const handleDec = () => dispatch(decCounter())
  const handleReset = () => dispatch(resetCounter())

  return (
      <div>
        <h1>Hello {counter}</h1>
        <button onClick={handleInc}>inc</button>
        <button onClick={handleDec}>dec</button>
        <button onClick={handleReset}>reset</button>
          {todos.map((todo) => (
              <h2>
                {todo.id} - {todo.title}
              </h2>
          ))}
      </div>

  );
}

export default App;
