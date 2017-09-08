import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';


const store = createStore(reducers);

const render = () => ReactDOM.render(
  <div>
    <Provider store={store}>
      <App store={store} />
    </Provider>
    </div>, document.getElementById('root')
);

render();
// store.subcribe(render);

registerServiceWorker();

window.store = store;

