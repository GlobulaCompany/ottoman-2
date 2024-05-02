import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/testimonials" element={<App />} />
        <Route path="/team" element={<App />} />
        <Route path="/blog" element={<App />} />
        <Route path="/faqs" element={<App />} />
        <Route path="/security" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
