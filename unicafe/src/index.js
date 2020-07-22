import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducer from './reducer'
import App from './App'

const store = createStore(reducer)


const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    )
}

renderApp()
store.subscribe(renderApp)
