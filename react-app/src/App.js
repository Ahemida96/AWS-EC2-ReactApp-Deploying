import './App.css';
import React from 'react';
import WelcomePage from './components/WelcomePage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/" component={WelcomePage} />
    //     {/* Add other routes here */}
    //   </Routes>
    // </Router>
    <WelcomePage />
  );
};

export default App;