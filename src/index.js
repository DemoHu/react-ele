import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {rootReducer} from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import App from './pages/App/App';
import AddressDetail from './pages/AddressDetail/AddressDetail'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Order from './pages/Order/Order'
import My from './pages/My/My'


let store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
ReactDOM.render(
  <Provider store={store}>
    <Router  >
      <div>
        <Route exact path="/" component={App} />
        <Route  path="/city/:id/:name" component={AddressDetail} />
        <Route  path="/home" component={Home} />
        <Route  path="/search" component={Search} />
        <Route  path="/order" component={Order} />
        <Route  path="/my" component={My} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
