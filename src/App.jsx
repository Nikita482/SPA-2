import './App.css'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';


function App() {

  return (
    <>
    
      <h1>SPA-2</h1>
      <Router basename='/SPA-2'> {/* basename тут */}

        <Link to="/">Page 1</Link>
        <Link to="/Page2">Page 2</Link>
        <Link to="/Page3">Page 3</Link>

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
