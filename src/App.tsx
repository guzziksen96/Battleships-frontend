import React from 'react';
import { Router } from 'react-router-dom'
import history from './routers/history'
import './App.css';
import AppRouter from './routers/AppRouter';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { AppState, AppAction, DispatchType } from './store/type';
import reducer from './store/appReducer'


const store: Store<AppState, AppAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <AppRouter />
      </Router>
    </Provider>

  );
}

export default App;
