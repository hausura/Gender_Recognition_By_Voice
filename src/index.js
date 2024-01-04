import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import VoiceRecorder from './components/recorder';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Gender from './components/gender';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
              <nav className="navbar">
               
              <ul className="nav-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/About">About</a></li>
                  <li><a href="Contact">Contact</a></li>
                </ul>
              </nav>
           {/* <BrowserRouter>
              <Routes>
                      <Route path="/" element={<VoiceRecorder/>}/>
              </Routes>
           </BrowserRouter> */}
           <VoiceRecorder/>
           {/* <Gender/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
