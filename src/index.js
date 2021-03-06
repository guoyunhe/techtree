import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { loadActiveTeches } from './actions/activeTeches'

let store = createStore(rootReducer);
store.dispatch(loadActiveTeches());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
