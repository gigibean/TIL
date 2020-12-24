# 라우터 적용

1. `BrowserRouter` 컴포넌트로 감싸주기
   index.js

```js
...
import { BrowserRouter } from "react-router-dom";
...
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
```

2. `Router` 컴포넌트 사용
   사용자가 요청하는 주소에 따라 다른 컴포넌트 보여주는 컴포넌트

```js
<Router path="주소규칙" component={보여주고 싶은 컴포넌트}>
```

App.js

```js
import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
```

`exact`를 설정해 놓지 않으면 /about 페이지를 들어가면 아래 사진과 같이 home 컴포넌트도 보여지게 되는데
<img src="./router-result.png">

이는 `/about`의 경로가 `/` 규칙과도 일치하기 때문에 발생하는 현상이다. 이를 해결하기 위해서는 Home을 위한 라우트에 `exact`라는 props를 `true`로 설정하면 된다.

3. Link 컴포넌트 사용
   Link 컴포넌트는 클릭하면 다른 주소로 이동시키는 컴포넌트이다. 리액트 라우터를 사용할 땐 일반 `<a href>` 태그를 사용하면 안된다. 만약에 이렇게 할 경우 onClick 에 `e.proventDefault()` 를 호출하고 따로 js로 주소를 변환 시켜주어야 한다.

그 대신에 Link라는 컴포넌트를 사용하는데, 그 이유는 a 태그의 기본적인 속성은 페이지를 이동시키면서 페이지를 아예 새로 불러오게 된다. 그렇게 되면서 리액트 앱이 지니고 있는 상태들도 초기화 되고 렌더링 된 컴포넌트도 모두 사라지고, 새로운 렌더링을 하게된다. 그렇기 때문에 a 태그 대신에 `Link` 컴포넌트를 사용하는 것이다. 이 컴포넌트는 HTML5 History API를 사용하여 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지는 않는다.

App.js

```js
import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
```
