import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { myRouter } from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={myRouter} />);
reportWebVitals();