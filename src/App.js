import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Toggling between light and dark mode
  const [alrt, setAlrt] = useState(null); // Alert state

  // Toggle mode function
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2d3338';
      document.body.style.color = 'white';
      showAlrt('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '';
      document.body.style.color = 'black';
      showAlrt('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }

  // Show alert function
  const showAlrt = (message, type) => {
    setAlrt({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlrt(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alrt} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlrt} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
