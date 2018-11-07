import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducers';
import App from './App';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk,promiseMiddleware())));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));
