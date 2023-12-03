import React from 'react'
import './App.css';
import User from './User'

function App() {
  function parentAlert(data) {
    alert(data);
  }
  return (
    <div className='App'>
      <h1>Lifting State Up</h1>
      <User alert={parentAlert}/>

    </div>
  );
}

export default App;
