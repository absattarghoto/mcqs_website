import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Courses from './components/Courses'
import Quiz from './components/Quiz';
import Mcqs from './components/Mcqs.jsx'
import PastPaper from './components/PastPaper.jsx';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Courses/>
      <Quiz/>
      <Mcqs/>
      <PastPaper/>
    </div>
  );
}

export default App;
