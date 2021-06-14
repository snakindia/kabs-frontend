import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>

    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
