import React, { useState } from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import initialUsers from "./initialUsers";
import { setInitialUserData } from './helpers/userDataUtils';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

// Get users from localStorage if there are any
// If there are no users in localStorage, set them to the initial users
setInitialUserData(initialUsers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
