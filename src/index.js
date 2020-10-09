import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';
import App from 'components/App';

const store = createStore(
    reducers,
    applyMiddleware(async, stateValidator)
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);