import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import myReducer from './reducers'

const store = createStore(myReducer)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));
