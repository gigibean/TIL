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

## Life Cycle
LifeCycle 전체 순서

```
Constructor
```

```
Render
```

```
Mount
```

```
re-Render
```

```
Update
```

```
Unmount
```


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
    console.log("parent) 시작합니다.");
    
  }

  componentDidMount() {
    console.log("Parent) 마운트되었습니다.");
    
  }

  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }

  render () {
    console.log("parent) 렌더링.");
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
```

result
```
parent) 시작합니다.
App.js:17 parent) 시작합니다.
App.js:31 parent) 렌더링.
App.js:22 Parent) 마운트되었습니다.
```

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
    console.log("parent) 시작합니다.");
    
  }

  componentDidMount() {
    console.log("Parent) 마운트되었습니다.");
    
  }

  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }

  render () {
    console.log("parent) 렌더링.");
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
    console.log("Child) 시작합니다.");
  }

  componentDidMount() {
    console.log("Child) 마운트되었습니다."); 
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

result
```
parent) 시작합니다.
App.js:17 parent) 시작합니다.
App.js:31 parent) 렌더링.
4App.js:62 Child) 시작합니다.
4App.js:66 Child) 마운트되었습니다.
App.js:22 Parent) 마운트되었습니다.
```
렌더링까지는 상위 컴포넌트가 먼저 진행되지만 마운트는 하위 컴포넌트가 모두 되어야 상위 컴포넌트까지 마운트됩니다.       

### 자식 컴포넌트 + Mount

```
(parent)Constructor
```
```
(parent)render
```
```
(child)Constroctor
(child)Render
(child)Mount -> ComponentDidMount
```
```
(parent) -> ComponentDidMount
```

### Update
Update는 state랑 prop이 변할 때 일어납니다.

```
  componentDidUpdate() {
    console.log("child) 업데이트");
  }
```
result
```
148App.js:70 child) 업데이트
```

### 자식컴포넌트 + Mount + 자식만 Update
```
(parent)Constructor
(parent)Render
```
```
(child)Constructor
(child)Render
(child)Mount
```
```
(parent)Mount
```
```
(child)Re-render
(child)Update -> ComponentDidUpdate
```

그런데 부모가 업데이트가 되면 차일드 컴포넌트는 어떻게 될까요?

```
  componentDidUpdate() {
    console.log("parent) 업데이트");
  }
```
이렇게 해보면 게시글이 바뀔 때마다 업데이트될 것입니다.     

result
```
60App.js:74 child) 업데이트
parent) 업데이트
```
parent가 렌더링되고 child가 업데이트되면 parent도 업데이트됩니다.      

## 자식 컴포넌트 + 부모의 Update

```
(parent)Constructor
(parent)Render
(parent)Mount
(parent)re-render
(parent)Update
```
```
(Children)re=render
(children)Update
```

이렇게 낭비되는 것을 방지하기우해 리액트는 최적화할 수 있는 방법을 제시하고 있습니다.
`ShouldComponentUpdate` 라는 라이프사이클과 혹은 `PureComponent` (클래스에서 `Component` 말고 `PureComponent`를 상속받을 수 있습니다.) 그러면 자식들까지 업데이트가 일어나지않다가 마지막에 한번에 일어납니다.      
이 둘의 차이는 전자는 커스터마이징을 할 수 있다는 것입니다. 후자는 자동적으로 리액트에서 제공해주는 것입니다. 
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

  render () {
    console.log("parent) 렌더링.");
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
    console.log("Child) 시작합니다.");
  }

  componentDidMount() {
    console.log("Child) 마운트되었습니다."); 
  }

  componentDidUpdate() {
    console.log("child) 업데이트");
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

## Unmount
비동기적으로 게속해서 처리되는 것들 때문에 일어나는 메모리 유수를 막기 위해서 `componentWillUnmount` 라는 함수를 사용해 줍니다.

```
  componentWillUnmount() {
    console.log("child) 언마운트");
    clearInterval(this.timer)
  }
```

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
```
## 정리
### Constructor
state의 구조를 설정합니다. 그리고 handling 함수에 this를 바인딩 해주는 것을 많이 하는데 지금까지 arrow 함수를 썼었기 때문에 안할 수 있었습니다. 컴포넌트가 마운트하기전에 하는 설정들을 할 수 있습니다. 그렇지만 constructor에서 setState를 하면 안됩니다.

### ComponentDidMount  
여기서 대부분의 비동기 요청들을 하게 됩니다. 비동기적 요청이라면 큰 파일을 다운로드를 받는 다던가 데이터 요청, 타이머 등이 있습니다. 여기서 이런게 나타났다면 언제 취소해야할까요? `ComponentWillUnmount` 입니다.

### ComponenetDidUpdate
update 이후 수정할 때 위에서 prop이 내려왔을 때 비교 후 바뀔지 안바뀔지 볼 수 있습니다. 여기서도 `setState`를 사용할 수 있지만 `if`로 조건을 달아주는 것이 좋습니다. `if() {setState()}`. 이렇지 않으면 setState가 업데이트가 되니까 다시 `ComponenetDidUpdate`가 실행되고 이러한 반복이 일어날 수 있기 때문입니다. 그렇기 때문에 `if`문 같은 것으로 분기처리를 해줘야 합니다.

### ComponentWillUnmount
비동기적 요청을 중단하는 역할을 합니다. 이 중지를 하지 않으면 메모리 유수가 발생할 수 있기 때문입니다. 그리고 이곳에서도 `setState`를 사용할 수 없습니다.
