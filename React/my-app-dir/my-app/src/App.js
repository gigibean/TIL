import React from 'react';
// import logo from './logo.svg';
import './App.css';

class  App extends React.Component {
  constructor(props) {
    super(props)
    this.cityTimeData = [
      ['서울', 10],
      ['베이징', 9],
      ['시드니', 12],
      ['시드니', 17],
    ]
    this.state = {
      content: "",
      show: true
    }
    console.log("parent) 시작합니다.");
    
  }

  componentDidMount() {
    console.log("Parent) 마운트되었습니다.");
    
  }

  componentDidUpdate() {
    console.log("parent) 업데이트");
  }

  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }

  handlingClick = (event) => {
    this.setState((prevState)=>({show : !prevState.show}))
  }

  render () {
    return (
      <div className="App">
        <h1 className={'myClass'}>Hello world</h1>
        <p>this is an example react app :)</p>
        <div className={'post'}>
          <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        </div>
        <button onClick={this.handlingClick}>{this.state.show ? "unshow" : "show"}</button>
        {
          this.state.show &&
          this.cityTimeData.map((props, index)=>
            <WorldClock city={props[0]} time={props[1]} key={index}/>
        )}
      </div>
    );
  }
}

class WorldClock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false,
    }
    this.timer = setInterval(()=>{
      this.setState((state) => (
      state.minute === 59
        ?{hour: state.hour + 1, minute: 0}
        :{minute: state.minute + 1}),
      )
    }, 1000)
    console.log("Child) 시작합니다.");
  }

  componentDidMount() {
    console.log("Child) 마운트되었습니다."); 
  }

  componentDidUpdate() {
    console.log("child) 업데이트");
  }

  componentWillUnmount() {
    console.log("child) 언마운트");
    clearInterval(this.timer)
  }

  handlingClick = (event) => {
    this.setState({stop : event.target.value})
    clearInterval(this.timer)
  }

  // 미리 약속된 함수
  render() {
    return (
      <div className={'worldClock'}>
          <h2>🌏 {this.props.city}</h2>
          <p>⏰ {this.state.hour} 시 {this.state.minute} 분</p>
          <button value={true} onClick={this.handlingClick}>stop</button>
      </div>
    )
  }
}

export default App;
