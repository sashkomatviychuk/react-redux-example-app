import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'styles/index.sass'
import App from 'containers/App'
import configureStore from 'configureStore'

const initialState = window.REDUX_INITIAL_STATE || {};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
