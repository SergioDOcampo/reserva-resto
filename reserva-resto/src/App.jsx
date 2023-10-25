import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavLogin from './components/NavLogin';

function App() {
  return (
    <>
      <div className="App">
        <NavLogin />
        <NavBar />
      </div>
    </>
  );
}

export default App;
