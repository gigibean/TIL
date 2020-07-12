import React from 'react';
// import logo from './logo.svg';
import './App.css';

function WorldClock(props) {
  return (
    <div className={'worldClock'}>
        <h2>🌏 {props.city}</h2>
        <p>⏰ {props.time} 시</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1 className={'myClass'}>Hello world</h1>
      <p>this is an example react app :)</p>
      <WorldClock city={'서울'} time={10}/>
      <WorldClock city={'베이징'} time={9}/>
      <WorldClock city={'시드니'} time={12}/>
      <WorldClock city={'LA'} time={17}/>

    </div>
  );
}

export default App;
