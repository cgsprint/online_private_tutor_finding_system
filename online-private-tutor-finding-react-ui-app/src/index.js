import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from 'redux';
import adminreducer from './reducers/AdminReducer.js'
// import parentreducer from './stores/ParentReducer'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import parentReducer from './stores/ParentReducer';
import tutorReducer from './stores/TutorReducer';

import './main.css'
const adminstore = createStore(adminreducer, applyMiddleware(thunk))
// const parentstore = createStore(parentreducer, applyMiddleware(thunk))

// const store = createStore(adminreducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>

    

   <Provider store={adminstore}>

      <BrowserRouter>
        <App  />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
