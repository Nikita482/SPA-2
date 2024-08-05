import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Router basename='/SPA-2'> {/* basename тут */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </Router> 
  </React.StrictMode>,
)
