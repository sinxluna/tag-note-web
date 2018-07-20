import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import dataReducer from './reducers/data-reducer'

const allReducers = combineReducers({
    data: dataReducer
})

const store = createStore(allReducers, window.devToolsExtension && window.devToolsExtension());
console.log('test '+store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
