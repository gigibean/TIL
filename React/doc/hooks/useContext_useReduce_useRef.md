# TodoList에 사용된 hooks 개념

[해당 hooks 사용한 파일] - [TIL/TodoContext.js](https://github.com/gigibean/TIL/blob/master/React/mashup-todolist/src/TodoContext.js)

## useContext

전역으로 데이터를 공유할 수 있게 하기 위해 만들어진 useContext hook을 사용하기 위해서는…

- `createContext`로 context를 사용함을 선언한다.
- 선언한 변수명이 `MyContext`라면 `<MyContext.Provider value={}>` 로 `value`의 prop을 지정한다.
  - value값이 갱신되면 렌더러를 트리거하고, 트리거된 부분부터 렌더링이 진행된다.
- 이 context는 `return useContext(MyContext)`해서 해당 레더링되는 값을 공유, 사용할 수 있게 된다.
- 그리고 export function을 만들어서 커스텀으로 사용할 수 있다.

```js
import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default App;
```

- `const MyContext = React.createContext()` <- context 사용 선언
- `<MyContext.Provider value={state}>` <- context 렌더러 트리거 (value가 갱신되면 리렌더링 된다)
- `const context = useContext(MyContext)` <- context 사용

> `useContext`로 전달한 인자는 context객체 그 자체 이어야 한다. `return useContext(TodoStateContext)` 처럼 객체 자체를 전달한다.

`useContext`를 호출한 컴포넌트는 context 값(value 로 전달된 값)이 변경되면 항상 리렌더링 될 것이다.
만약 컴포넌트를 리렌더링하는 것에 비용이 많이 든다면 메모이제이션을 사용하여 최적화 할 수 있다.

`useContext(MyContext)`는 변경된 값을 가져오는 것만 가능하다.
값이 변경되는 곳은 트리의 윗 계층에서의 `<MyContext.Provider>`이다.

## useReducer

우선 useState 는 `cont [state, setState] = useState(initialState)` , `setState(newState)`
이고, useState의 대체함수이다. `(state, action) => newState`의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환한다.

다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우나 다음 state가 이전 state에 의존적인 경우 보통 useState보다 useReduce를 선호한다.

또한 useReducer은 자세한 업데이트를 트리거하는 컴포넌트의 성능을 최적화할 수 있게 하는데, 이것은 콜백 대신 dispatch를 전달할 수 있기 때문이다.

```js
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

- `function reducer(state, action) { switch … return state}`
- `state` <- 현재 값
- `action` <- 변화한 부분, 들어온 부분

- `const [state, dispatch] = useReducer(reducer, initialState);`
- `state` <- 현재 값
- `dispatch` <- `action.type` 를 인자로 받아 그에 따라 변환된 값
- `reducer` <- `state`와 `action`으로 변경할 값 설정한 함수
- `initialState` <- 초기값

## useRef

`const refContainer = useRef(iniitialValjue)`

`const nextId = useRef(5)`  
useRef() 는 가변 값을 유지하고 변경될 때마다 변경된 DOM 노드에 .current 프로퍼티를 설정한다.  
useRef는 매번 렌더링을 할 때 동일한 ref객체를 제공한다.

> useRef는 내용이 변경될 때 그것을 알려주지는 *않는다*는 것을 유념하세요. .current 프로퍼티를 변형하는 것이 리렌더링을 발생시키지는 않습니다. 만약 React가 DOM 노드에 ref를 attach하거나 detach할 때 어떤 코드를 실행하고 싶다면 대신 [콜백 ref](https://ko.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) 를 사용하세요.

#react
