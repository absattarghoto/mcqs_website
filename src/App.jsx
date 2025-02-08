import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Courses from './components/Courses'
import Quiz from './components/Quiz';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Courses/>
      <Quiz/>
    </div>
  );
}

export default App;
