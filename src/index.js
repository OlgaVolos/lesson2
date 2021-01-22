import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'


const initialState = {
    counter: 1,
    user: {
        userId: null,
        id: null,
        title: '',
        completed: false
    }

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COUNTER': {
            return {...state, counter: state.counter +1};
        }
        case 'SET_TODO': {
            return {...state, user: action.payload}
        }
        case 'CHANGE_STATUS': {
            return {...state, user:{...state.user, completed: !state.user.completed}}
        }
        case 'CHANGE_TITLE': {
            return {...state, user:{...state.user, title: action.payload}}
        }
        default: {

            return state
        }
    }
};
const store = createStore(reducer);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
