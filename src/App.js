import './App.css'
import { useState } from 'react'
import Home from './Home/Home'
import Header from './Header/Header'
import Education from './New/Education'
import Gift from './New/Gift'
import Parent from './New/Parent'
import Play from './New/Play'
import Why from './New/Why'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  const [state, setState] = useState(false)

  return (
    <>
      <Router>
        <Header setState={setState} state={state} />
        <Routes>
          <Route path="/" element={<Home state={state} setState={setState} />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Gift" element={<Gift />} />
          <Route path="/Parent" element={<Parent />} />
          <Route path="/Play" element={<Play />} />
          <Route path="/Why" element={<Why />} />
        </Routes>
      </Router>
    </>
  );
}
export default App