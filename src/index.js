import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
// import {getBooks} from './api/ApiWorker'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import {bookshelfApp} from './reducers'
import {Provider} from "react-redux";


const store = createStore(bookshelfApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
