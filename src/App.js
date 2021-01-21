import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const counter = useSelector((store) => store.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={() => dispatch({type:'INC_COUNTER'})}>inc</button>
      <button onClick={() => dispatch({type:'DEC_COUNTER'})}>dec</button>
      <button onClick={() => dispatch({type:'RESET'})}>reset</button>
    </div>
  );
}

export default App;
