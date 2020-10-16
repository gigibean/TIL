import React from 'react';
import './App.scss'
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons notFullWidth">
        <Button size="large" color="red" outline>Button</Button>
        <Button size="medium" color="grape" outline>Button</Button>
        <Button size="small" color="teal" outline>Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="red" fullWidth>Button</Button>
        <Button size="large" color="grape" fullWidth>Button</Button>
        <Button size="large" color="teal" fullWidth>Button</Button>
      </div>
    </div>
  );
}

export default App;
