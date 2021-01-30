# setState 인자: updater 함수

setState로 계산을 했는데 값이 예상대로 반영되지 않을 때가 있다.

## 왜 setState가 반영되지 않는 것일까?

이는 setState는 비동기적 함수이고 state는 렌더링된 이후의 값을 나타낸다. 그렇기 때문에 setState 호출이 된 후에 state값이 반영됨을 보장하지 않는다.

예를 들어 아래와 같은 코드가 있다고 하자.

```js
import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  function increment() {
    setState(state + 1);
    console.log(state);
    setState(state + 1);
    console.log(state);
    setState(state + 1);
    console.log(state);
    setState(state + 1);
    console.log(state);
  }
  return <button onClick={increment}>{state}</button>;
}

export default App;
```

이런 코드가 있다면 예상으론, 버튼을 한번 누를 때마다 4씩 증가할 것 같지만, 그렇지 않다.

버튼을 한번 누를 때마다 1씩 증가한다.

이유를 알아보기 위해 콘솔에 로그를 각 줄마다 state를 찍어봤다.

```
0
0
0
0
1
1
1
1
...
```

위와 같은 결과가 나온다.

이는 React가 컴포넌트를 리렌더링할 때만, state는 갱신되는데,

increment 함수에서는 버튼을 클릭했을 때 발생하는 리렌더링에서 갱신하는 state값을 가져오기 때문에 매번 state값을 0으로 읽은 뒤 이 값을 1로 설정하게 된다.

## 그렇다면 어떻게 해결할 수 있을까?

이전 state를 기준으로 계산 된 값으로 변경하길 원할 때, 항상 setState가 가장 최신의 state값을 사용하도록 보장하기 위해서는 setState에 ‼️ updater 함수 ‼️ 를 전달하면 된다.

‼️ updater 함수 ‼️를 전달하면 이 함수 안에서는 이전 state 값에 접근할 수 있다.

setState는 비동기적이므로
만약 부모와 자식이 모든 setState를 호출한다면 자식이 두 번 렌더링 되거나 하지 안흔다.
setState 호출은 브라우저 이벤트가 끝날 시점에 state를 일괄적으로 처리된다.

```js
import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  function increment() {
    setState((state) => state + 1);
    console.log(state);
    setState((state) => state + 1);
    console.log(state);
    setState((state) => state + 1);
    console.log(state);
    setState((state) => state + 1);
    console.log(state);
  }
  return <button onClick={increment}>{state}</button>;
}

export default App;
```

로그

```
0
0
0
0
4
4
4
4
8
8
8
8
...
```

정리하자면,

setState에 state 값을 전달하게 되면 컴포넌트 내에서 (increment 함수에서) state를 호출하게 된다. 이는 리렌더링 될 시에 업데이트 되는 값으로 setState에서 변경된 값이 반영될 것이라는 보장을 하지 못한다.

setState에서 updater 함수를 사용하여 state 값을 가져오는 경우 state의 이전 값에 접근할 수 있다.
