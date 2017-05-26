import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

//Local Code
import App from './App'
import reducers, { getAllProducts }  from './reducers'

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)


store.dispatch(getAllProducts())


ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
