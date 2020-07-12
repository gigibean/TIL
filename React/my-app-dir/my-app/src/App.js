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
  const cityTimeData = [
    ['서울', 10],
    ['베이징', 9],
    ['시드니', 12],
    ['시드니', 17],
  ]
  const worldClockList = cityTimeData.map((props, index)=>
    <WorldClock city={props[0]} time={props[1]} key={index}/>
  )
  return (
    <div className="App">
      <h1 className={'myClass'}>Hello world</h1>
      <p>this is an example react app :)</p>
      {worldClockList}
    </div>
  );
}

export default App;
