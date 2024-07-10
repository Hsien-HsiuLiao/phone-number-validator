import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ValidatePhonenumber from './ValidatePhonenumber';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This app will take an input and check if it is a valid phone number
        </p>
        
      </header>

     <ValidatePhonenumber />
    </div>






  );
}

export default App;
