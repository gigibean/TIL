# Hooks 응용

## useState와 useContext 같이 사용하기

```js
const StateContext = createContext(defaultValue);
const SetStateContext = createContext(defaultValue);

// defaultValue: 매개변수는 트리 안에서 적절한 Provider를 찾지 못했을 때만 쓰이는 값입니다. 컴포넌트를 독립적으로 테스트할 때 유용한 값입니다. Provider를 통해 undefined을 값으로 보낸다고 해도 구독 컴포넌트들이 defaultValue 를 읽지는 않는다는 점에 유의하세요.

const [state, setState] = useState(0);

...

return(
    <StateContext.Provider value={state}>
        <SetStateContext.Provider value={setState}>
            {children}
        </SetStateContext.Provider>
    </StateContext.Provider>
)

// 그리고 사용할 때는
const context = useContext(StateContext);
// 선언하고 사용
```

### Context.Provider 의 역할

React 컴포넌트인 Provider:

‼️ Context 를 구독하는(사용하는) 컴포넌트들에게 Context의 변화를 알려주는 역할을 한다. ‼️

`value` prop을 받아서 이 값을 하위에 있는 컴포넌트에게 전달한다.

Provider 하위에서 Context를 구독하는 모든 컴포넌트는 Provider의 value prop이 바뀔 때마다 렌더링 된다.

### UseState, UseContext 같이 사용하는 이유와 과정

- useState에서 선언한 `state`와 함수 `setState`를 Context로 사용하므로, 위에서 아래로 흐르는 단방향적 데이터 흐름이 아닌 Context에서 값을 공유해서 사용할 수 있다.
- 트리 단계마다 명시적으로 `state`,`setState`를 넘겨주지 않아도 되므로 여러 컴포넌트들에게 전해줘야 하는 state를 공유할 수 있다.
- `global` `state`를 만든다고 생각하면 된다.

## useReducer와 useContext 같이 사용하기

### useReducer 복습

useState에서 로직을 좀더 세분화한 게 useReducer이다. 그렇기 때문에 좀 더 복잡한 상태 관리가 필요한 컴포넌트에 사용할 수 있다.

`useReducer`의 형태를 한 번 복습하고 넘어가자면,

```
const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)
```

#### reducer 함수

reducer함수는 현재 상태(state) 객체와 행동(action) 객체를 인자로 받아서 새로운 상태(state)객체를 반환하는 함수이다.

```js
const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("Unexpected Error");
  }
}
```

#### dispatch 함수

reducer 선언할 때 리스트 dispatch로 선언한 함수는 인자로 타입(과 정보 등)을 객체로 넘겨주면 그에 맞는 case를 reducer함수에서 찾아서 상태를 변화시킨다.

```js
<button onClick={() => dispatch({type: "INCREMENT"})}>
```

### useReducer, useContext 사용 이유과 과정

- 상태 관리를 해주는 reducer를 context와 사용하므로써 각기 다른 컴포넌트에서 이 dispatch와 state를 불러와 type에 맞게 사용할 수 있게 된다.

  - 예를 들어 post를 update하는 컴포넌트에서는 update type의 dispatch를 사용하여 state를 업데이트하고,
  - create는 그에 맞는 type의 dispatch를 사용하여 state에 값을 추가할 수 있다.

Context.js

```js
// 초기 상태(state) 지정
const initialValue = 0;
// reducer함수 생성
function valueReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("unexpected error");
  }
}

// context 생성
const StateContext = createContext();
const DispatchContext = createContext();

// 상위 트리에 선언할 컴포넌트
export function ValueProvier({ children }) {
  const [state, dispatch] = useReducer(valueReducer, initialValue);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}></DispatchContext.Provider>
    </StateContext.Provider>
  );
}

// useContext 를 해주는 함수들
// 다른 컴포넌트에서 이 함수를 불러서 state와 dispatch를 사용할 수 있다.
export function useState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useDispatch() {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
```

Increase.js

```js
// 함수 불러오기
import { useState, useDispatch } from "../Context";

const state = useState();
const dispatch = useDispatch();

// dispatch 설정 함수
const onClick = () => {
  dispatch({ type: "INCREASE" });
};

return <button onClick={onClick}>{state}</button>;
```
