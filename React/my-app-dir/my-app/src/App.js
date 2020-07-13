import React from 'react';
// import logo from './logo.svg';
import './App.css';

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

class WorldClock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0
    }
    setInterval(()=>{
      this.setState((state) => (
      state.minute === 59
        ?{hour: state.hour + 1, minute: 0}
        :{minute: state.minute + 1}),
      )
    }, 1000)
  }
  // 미리 약속된 함수
  render() {
    return (
      <div className={'worldClock'}>
          <h2>🌏 {this.props.city}</h2>
          <p>⏰ {this.state.hour} 시 {this.state.minute} 분</p>
      </div>
    )
  }
}

export default App;
