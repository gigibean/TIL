# Event
이벤트는 웹 상에서 일어나는 모든 행위라고 보시면 됩니다. 이를 인터랙션을 하기 위해 이벤트가 필요합니다.
이벤트를 계속 듣는 것을 이벤트 리스너라고 합니다. 이벤트들 앞에다가 `on`만 붙이면 됩니다. 예를 들어 `onClick`이 있습니다.       
리액트에서는 
1. `state`를 만든다.
2. `handling` 함수를 만든다.
3. 이벤트가 발생하는 html태그에서 `onEvent`명을 통해 `handling`함수를 부른다.
이런식으로 이벤드를 다룬다고 생각하시면 됩니다(단순화한 것입니다.).

```
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
      content: ""
    }
  }

  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }
  // const cityTimeData = [
  //   ['서울', 10],
  //   ['베이징', 9],
  //   ['시드니', 12],
  //   ['시드니', 17],
  // ]
  // const worldClockList = cityTimeData.map((props, index)=>
  //   <WorldClock city={props[0]} time={props[1]} key={index}/>
  // )
  render () {
    return (
      <div className="App">
        <h1 className={'myClass'}>Hello world</h1>
        <p>this is an example react app :)</p>
        <div className={'post'}>
          <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        </div>
        {this.cityTimeData.map((props, index)=>
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

```

## 결국 컴포넌트란
```
class SampleComponent extends React.Component
```
```
LifeCycle 관련 함수 설정
    constructor
    componentDidMount, componentDidUpdate
    componentWillUnmount
```
```
eventHandler 함수들
필요한 기능 함수들
```
```
render 함수
    return <div className={"sampleComponent"}>
        JSX, component
    </div>
```
각각의 블럭이 필요할 때 뭉처져서 하나의 컴포넌트를 이룹니다.    
