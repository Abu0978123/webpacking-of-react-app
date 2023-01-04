import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import reactLogo from './react-logo.png'
// import './components/cssStyles/style.css'
   
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <h1>hello webpack</h1>
    <p className="font">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nulla culpa
      labore eos dolor facilis magni vitae ipsam qui ullam placeat quae
      repellendus eligendi voluptatum consectetur, adipisci nihil molestias sed!
    </p> */}
    <div>
      <img src={reactLogo} alt="" />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//
