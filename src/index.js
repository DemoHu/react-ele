import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {rootReducer} from './reducers/index'
import thunkMiddleware from 'redux-thunk'
let store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
