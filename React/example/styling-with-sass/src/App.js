import React from 'react';
import './App.scss'
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large" color="red">Button</Button>
        <Button size="medium" color="grape">Button</Button>
        <Button size="small" color="teal">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="red">Button</Button>
        <Button size="medium" color="grape">Button</Button>
        <Button size="small" color="teal">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="red">Button</Button>
        <Button size="medium" color="grape">Button</Button>
        <Button size="small" color="teal">Button</Button>
      </div>
    </div>
  );
}

export default App;
