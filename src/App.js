import React from 'react';
import './App.css';
import Navigator from './routes/Navigator';
import InputComponent from './components/InputComponent';

function App() {
  return (
    <div className="App">
      <InputComponent />
      <Navigator />
    </div>
  );
}

export default App;
