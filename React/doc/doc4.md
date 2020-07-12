# Props & State
React는 유저에게 빠르게 반응합니다. 그럴 수 있는 이유는 컴포넌트 개별로 Re-render가 일어나기 때문입니다. 그러므로 컴포넌트를 잘 기획하고 나누어 작성해야 합니다.    
컴포넌트를 만들기 위해서 가장 중요한 두가지 개념이 `Props`와 `State`입니다.

## Props
컴포넌트 간의 이동하는데 있어서 컴포넌트와 컴포넌트 사이에 데이터를 이동하는 역할을 합니다.     
데이터를 `key`와 `value`의 형태로 전달해주는 역할을 합니다. 이 `Props`가 가지는 가장 큰 특징 중 하나가 바로 `Read Only`라는 것입니다. 읽고 쓰기 중 쓰기, 즉 새롭게 바뀔 수 없다는 것입니다. 위에서 오는 `Props`값을 밑에 있는 컴포넌트들이 바꿀 수가 없다는 것입니다. 이 때문에 `State` 필요하게 됩니다. 그리고 이 때문에 `Props`를 따로 저장하는 일도 발생할 수 있습니다. 이러한 이유들로 `Props`의 `Read Only`라는 특징을 가진다는 것이 중요합니다.   
컴포넌트는 `function`으로 선언할 수 있습니다. `App.js`에서 `function`을 선언해 줍니다.
그리고 이 함수의 이름과 파라미터를 적어주고 return해줄 것들을 ()안에 적어줍니다. 이 때 `<div>`로 감싸주시는 것이 좋습니다. 컴포넌트들은 하나의 약속이 있습니다. 최상단에는 하나의 열고 닫음만 있다라는 것입니다. 이는 여러 개의 태그를 하나의 함수 내에서 여러개로 쪼개서 return해줄 수가 없다는 의미입니다. 에를들어,
```
function f(props) {
    return (
        <div>
            ...
        </div>
        <div>
            ...
        </div>
    )
}
```
이런식으로 반환할 수 없다는 얘기입니다.

```
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
```
위와 같이 코드를 작성해 보겠습니다. 함수 `WorldClock`을 선언한 후에 함수 `App`에서 사용합니다. 그리고 `city={'서울'}`과 같이 인자값을 적어줍니다.   
상위 컴포넌트인 `App`에서 각각의 `WorldClock` 컴포넌트로 `props`를 통해서 데이터가 전달되고 있다는 것을 확인할 수 있습니다.   

<img src="./imgs/doc4_img_1.png" alt="code result" /> <br/>

## List & Key
여러개의 컴포넌트들의 집합이 있는데, 이것을 단순화해보려고 합니다.
필요한 정보들만 모으고 필요한 정보들을 활용하는 방법에 대해 알아보려 합니다.

`App.js`에 함수 `App`에 `cityTimeData`라는 배열을 하나 생성해 보겠습니다.

```
const cityTImeData = [
    ['서울', 10],
    ['베이징', 9],
    ['시드니', 12],
    ['시드니', 17],
  ]
```

그리고 `cityTimeData`를 매핑해주는 `worldClockList`를 하나 만듭니다. 

```
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
  const worldClockList = cityTimeData.map((props)=>
    <WorldClock city={props[0]} time={props[1]}/>
  )
  return (
    <div className="App">
      <h1 className={'myClass'}>Hello world</h1>
      <p>this is an example react app :)</p>
      {/* <WorldClock city={'서울'} time={10}/>
      <WorldClock city={'베이징'} time={9}/>
      <WorldClock city={'시드니'} time={12}/>
      <WorldClock city={'LA'} time={17}/> */}
      {worldClockList}

    </div>
  );
}

export default App;
```

위와 같이 기존에 있던 여러개의 인자값만 다른 `WorldClock`을 리스트로 만들어서 자바스크립트 문법으로 처리합니다.

그런데 이 앱을 실행시켜보면 아래와 같은 오류 문구가 뜹니다.
```
index.js:1 Warning: Each child in a list should have a unique "key" prop.
```
이는 유니크한 키값을 요구한다는 것인데, 이럴 때는 각 키를 `index`로 받아주면 됩니다.:smile:
```
const worldClockList = cityTimeData.map((props, index)=>
    <WorldClock city={props[0]} time={props[1]} key={index}/>
  )
```
이 map에서 하나의 인자만 넘겨줄 때는 각 값들에 대해서 넘겨주게 되고 두 개 인자로 넘겨줄 때는 인덱스 값을 같이 넘겨주게 됩니다.      
`key`는 리액트가 어떤 아이템이 바뀌고 추가되고 삭제되는지 아는데 굉장히 도움을 준다고 합니다. 리액트는 변화를 최대한 빨리감지해서 최소한의 변화를 주는 것이 핵심인데 어느 부분이 바뀌었는지 정확히 알기위해서 사용되는 것입니다.