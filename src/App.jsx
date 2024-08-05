import './App.css'

import { Link } from 'react-router-dom';
// import Page1 from './pages/page1';
// import Page2 from './pages/page2';
// import Page3 from './pages/page3';


function App() {

  return (
    <>
      <h1>SPA-2</h1>
      <Link to="/Page1">Page 1</Link>
      <Link to="/Page2">Page 2</Link>
      <Link to="/Page3">Page 3</Link>
    </>
  )
}

export default App
