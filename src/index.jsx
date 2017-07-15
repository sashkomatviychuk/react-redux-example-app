import React from 'react'
import ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './styles/index.sass'
import App from './containers/App'
import configureStore from './configureStore'

const initialState = window.REDUX_INITIAL_STATE || {};
const store = configureStore(initialState);

const render = Component => ReactDOM.render(
    // <AppContainer>
        <Provider store={store}>
            <Component />
        </Provider>,
    // </AppContainer>,
    document.getElementById('root')
);

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
      const NextApp = require('./containers/App').default
      render(NextApp)
    })
}
