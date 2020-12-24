# 서브라우터 만들기 Link params 넘겨주기

## 유저 목록 보여주기 & 유저 프로필 렌더링

Profile.js에 있는 데이터 따로 profileData.js를 만들어서 옮겨주기
profileData.js

```js
// 프로필에서 사용할 데이터
export const profileData = {
  Johny: {
    name: "John",
    description: "Junior Frontend Engineer",
  },
  Kiki: {
    name: "Kim",
    description: "Senior Fronted Engineer",
  },
};
```

Profiles.js

```js
import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";
import { profileData } from "./profileData";

const Profiles = () => {
  const users = profileData;
  console.log(users);

  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        {Object.keys(users).map((user) => (
          <li>
            <Link to={{ pathname: `/profiles/${user}` }}>{user}</Link>
          </li>
        ))}
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:user" component={Profile} />
    </div>
  );
};

export default Profiles;
```

### 유저 리스트 보여주기

Profiles.js

```js
...
const users = profileData;
...
{Object.keys(users).map((user) => (
          <li>
            <Link to={{ pathname: `/profiles/${user}` }}>{user}</Link>
          </li>
        ))}
```

`profileData`는 객체로 되어 있기 때문에 바로 `map`함수를 사용할 수 없다.
그렇기 때문에 `Object.key(object)`로 객체의 key를 배열로 반환하는 내장함수를 사용해서 key만 배열로 추출한 값에 `map` 배열 내장 객체를 사용한다.

`Link` 태그에서 params를 해당 url에 넘겨주기 위해 `pathname` 객체를 사용했다. JSX에서 html tag 내에서 따옴표를 사용할 때 따로 백킷과 ${}를 사용할 수도 없고 그렇다고 따옴표와 JS 표현식을 같이 사용할 수도 없기 때문에, `pathname` 을 사용하였다. JS 표현식과 백킷을 사용해서 params를 넘겨준다.

```js
<Route path="/profiles" exact render={() => <div>유저를 선택해주세요.</div>} />
```

Route를 사용할 때 component가 아니라 render를 사용할 수 있다. 익명화살표함수를 사용했다.

App.js

```js
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
};

export default App;
```

위와 같이 App.js를 수정하면 된다.
#react
