# API 연동하기

<b>index</b>

- [API 연동 기본](#api-연동-기본)
- [useReducer 사용](#usereducer-사용)
- [useAsync 커스텀 Hook 만들어서 사용하기](#useasync-커스텀-hook-만들어서-사용하기)
  - [useEffect](#useeffect)
    - [deps](#deps)
    - [unmount](#unmount)
- [react-async 로 요청 상태 관리하기](#react-async-로-요청-상태-관리하기)
- [리팩토링](#리팩토링)

  - [내부함수](#내부함수)

    - [내부함수의 파라미터에 접근하기](#내부함수의-파라미터에-접근하기)

웹 어플리케이션을 만들 때 데이터 통신을 하기 위해서 서버의 API 를 사용해서 데이터를 읽고 써야한다.

실제 프로젝트에서는 주로 Redux라는 라이브러리와 Redux 미들웨어를 함께 사용해서 구현하는 경우가 많다.

이번 API 연동을 배우게 될 때는 Redux 없이 그냥 컴포넌트에서 API연동을 하게 될 때 어떻게 해야 하는지 알아보고,
더 깔끔한 코드로 구현하는 방법도 다뤄본다.

## API 연동 기본

```js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청을 시작 할 때는 error와 users를 초기화
        setError(null);
        setUsers(null);
        // loading 상태를 true로 바꿈
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        // 데이터는 responst.data 안에 있음
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return null;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default Users;
```

참고로, useEffect에 첫번째 파라미터로 등록하는 함수에는 async 를 사용할 수 없기 때문에 함수 내부에서 async 를 사용하는 새로운 함수를 선언해주어야 한다.

로딩 상태가 활성화 됐을 땐 로딩중 이라는 문구를 보여주고

Users 값이 없을 때는 null 을 보여주도록 처리함.

마지막으로 users 배열을 렌더링하는 작업을 해주었다.

## useReducer 사용

```js
import React, { useEffect, useReducer } from "react";
import axios from "axios";

// LOADIING, SUCCESS, ERROR
function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Users() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return <div>null</div>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;
```

useReducer로 구현했을 때 장점은 useState의 setState함수를 여러번 사용하지 않아도 된다는 점과 리듀서로 로직을 분리했으니 다른 곳에서도 쉽게 재사용할 수 있다는 점이다.

## useAsync 커스텀 Hook 만들어서 사용하기

데이터를 요철해야할 때마다 리듀서를 작성하는 것을 번거롭다.
매번 반복되는 코드를 작성하는 대신에 커스텀 Hook을 만들어서 요청 상태 관리 로직을 쉽게 재사용하는방법을 사용하자

useAsync.js

```js
import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback, deps = []) {
  // callback: dispatch SUCCESS 에서 필요한 Data를 받는 API 요청 함수
  // deps: useEffect 의 deps
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;
```

### useEffect

#### deps

Deps -> 이 값은 나중에 우리가 사용할 비동기 함수에서 파라미터가 필요하고, 그 파라미터가 바뀔 때(get() -> () 여기, url 받는 곳) 새로운 데이터를 불로오고 싶은 경우에 활용할 수 있다. (현재 Users 컴포넌트에서는 불필요한 부분) 이 값의 기본값은 [] 이다. 컴포넌트가 가장 처음 렌더링 할 때만 API를 호출하고 싶다는 의미이다.

여기 두번째 인자에 [] 배열의 형태로 state를 넘기게 되면 해당 state의 값이 변경될 때만 useEffect 함수가 호출되게 된다.

만약 여러개의 state에 대해서 여러개의 개별적인 동작을 실행시키고 싶다면
useEffect를 여러개 만들어주고 2번째 인자로 해당 state들을 넣어주면 된다.

첫 렌더링에서만 호출하려면 앞에도 말했듯
빈 배열로 넘기면된다.

컴포넌트가 unmount 될 때 호출하기
컴포넌트가 렌더링 될 때마마다 useEffect함수를 호출하는 것.

#### unmount

그렇다면 컴포넌트가 unmount 될 때는 어떻게 해야할까?

그런 경우에도 같은 문구를 사용하면 되지만 약간 변형해서 useEffect 함수에서 return을 해주면 된다.

```js
useEffect(() => {
  console.log("state가 변경될 때마다 호출");
  return () => {
    console.log("언마운트 시 호출");
  };
});
```

State가 변경될 때 마다 기존의 컴포넌트가 unmount 되면서 언마운트 로그를 찍고 다시 렌더링 되면서 마운트 로그를 찍는다.

그리고 두번째 인자에 state를 줬을 때는 해당 state 변화에 해단 unmount에만 반응하게 된다.

마지막 unmount 에서만 호출하기
첫 렌더링에서만 useEffect를 호출하는 방법이 있다. 그럼 마지막에 unmount에서만 호출하는 방법도 있다. 그냥 두번째 인자를 빈 배열로 주면된다.

## react-async 로 요청 상태 관리하기

React-async는 우리가 지난 섹션에서 만들었던 `useAsync` 와 비슷한 함수가 들어있는 라이브러리이다.

이 라이브러리 안에 들어있는 함수 이름도 `useAsync1인데, 사용법이 조금 다르다ㅏ.

만약에 매던 프로젝트를 만들 때 마다 직접 요청 상태 관리를 위한 커스텀 hook을 만들기 귀찮다면 이 아리읍러리를 사용하면 된다. 정말 많은 기능들이 내장되어있다. 다만 사용버이 다른데 우리가 만든 hook은 결과물을 배열로 반환하는데, 이 hook은 객체 형태로 반환한다.

## 리팩토링

### 내부함수

asyncActionUnit.js

```js
// 이 함수는 파라미터로 액션의 타입 (예: GET_USER) 과 Promise 를 만들어주는 함수를 받아옵니다.
export function createAsyncDispatcher(type, promiseFn) {
  // 성공, 실패에 대한 액션 타입 문자열을 준비합니다.
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  // 새로운 함수를 만듭니다.
  // ...rest 를 사용하여 나머지 파라미터를 rest 배열에 담습니다.
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type }); // 요청 시작됨
    try {
      const data = await promiseFn(...rest); // rest 배열을 spread 로 넣어줍니다.
      dispatch({
        type: SUCCESS,
        data,
      }); // 성공함
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e,
      }); // 실패함
    }
  }

  return actionHandler; // 만든 함수를 반환합니다.
}
```

##### 내부함수의 파라미터에 접근하기

우선 `createAsyncDispatcher` 함수가 어떤 역할을 하는지를 보면, 이 함수는 그저 `actionHandler` 를 반환해주는 함수일 뿐이다.

UserContext.js

```js
export const getUsers = createAsyncDispatcher("GET_USERS", api.getUsers);
export const getUser = createAsyncDispatcher("GET_USER", api.getUser);
```

이렇게 사용했다. 그러면 `createAsyncDispatcher` 에 인자로 dispatch를 위한 type과 api.getUser이라는 Promise 가 넘어간다.

api.getUser

api.js

```js
import axios from "axios";

export async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

export async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}
```

위와 같은 형태로 되어 있다.

그렇다면 이제 `actionHandler` 의 인자를 넘겨주는 함수를 실행히야 한다. 이는
`Users.js`와 `User.js`에서 실행된다.

Users.js

```js
...
const fetchData = () => {
    getUsers(dispatch);
  };
```

User.js

```js
useEffect(() => {
  getUser(dispatch, id);
}, [dispatch, id]);
```

이와 같이 getUser, getUsers로 받은 `createAsyncDispatcher` 의 리턴값, 즉, `actionHandler` 이다.

참고로 `…rest`를 사용하는 이유는 Users는 id 값이 있고, User은 없기 때문에 없음이 허용되는 `…rest` 를 사용한 것이다.

#react
