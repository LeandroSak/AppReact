import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEjhEeHKvisYuq0nJwPxlNPu-0uRM5OuQ",
  authDomain: "appreacts-fd7c2.firebaseapp.com",
  projectId: "appreacts-fd7c2",
  storageBucket: "appreacts-fd7c2.appspot.com",
  messagingSenderId: "327076368304",
  appId: "1:327076368304:web:5d9430b5e4ac3e602e9075"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
