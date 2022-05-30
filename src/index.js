import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const initialState = {
    count: 0
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increase':
            return {
                ...state,
                count: state.count + 1
            };
        case 'decrease':
            return {
                ...state,
                count: state.count - 1
            };
        case 'reset':
            return {
                ...state,
                count: state.count = 0
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
