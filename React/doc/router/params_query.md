# 파라미터와 쿼리

페이지 주소를 정의할 때 유동적인 값을 전달할 때도 있다. 이는 파라미터와 쿼리로 나뉠 수 있다.

```
파라미터: /about/kim
쿼리: /search?query=kim
```

어느 것을 사용하는 것에 대한 무조건적인 규칙은 없지만, 일반적으로는 파라미터는 특정 id나 이름을 가지고 조회할 때 사용하고 쿼리의 경우는 어떤 키워드를 검색하거나 요청을 할 때 필요한 옵션을 전달할 때 사용된다.

## URL Params

Profile.js

```js
import React from "react";

// 프로필에서 사용할 데이터
const profileData = {
  Johny: {
    name: "John",
    description: "Junior Frontend Engineer",
  },
  Kiki: {
    name: "Kim",
    description: "Senior Fronted Engineer",
  },
};

const Profile = ({ match }) => {
  // params를 받아올 땐 match 안에 들어있는 params 값 참조
  const { user } = match.params;
  const profile = profileData[user];

  if (!profile) {
    return <div>존재하지 않는 유저</div>;
  }

  return (
    <div>
      <h3>
        {user}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
```

App.js

```js
<Route path="/profiles/:user" component={Profile} />
```

Route 에서 `:user`로 들어오는 값은 `Profile({match})` 에서 match 파라미터로 받게 된다. 들어온 params를 받을 때는 match의 params 값을 참조하면 된다.

예를들어 Kiki 객체에 접근하는 URL이 `/profiles/Kiki` 이라고 하면  
path인 `:user` 에 `Kiki` 가들어가고 Profile 컴포넌트에서 파라미터 match에서 받아온다.  
`match`를 콘솔에 찍어보면 `{path: "/profiles/:user", url: "/profiles/Kiki", isExact: true, params: Object}` 라고 나오는 것을 볼 수 있다.

`match.params`객체는 객체 비구조화 할당 `const {user} = match.params`을 해서 `{user: "Kiki"}` 가 된다.

user("Kiki")에 해당하는 객체를 `profileData[user]`로 접근한다.

## Query

Route 컴포넌트에서 이동하는 컴포넌트(`<Route>`에서 component인 부분)에게 props로 전달되는 객체가 있다. 이를 About()에서 `{location}`으로 받는다.
location객체를 콘솔에 찍어보면,

url `/about`으로 접근 시

```
{
pathname: "/about"
search: ""
hash: ""
state: undefined
}
```

url `/about/search?detail=true`로 접근 시

```js
{
  pathname: "/about/search";
  search: "?detail=true";
  hash: "";
  state: undefined;
}
```

위와 같이 되어 있고, 우리는 이 객체 내에서 search 값을 읽어와서 query에 따른 결과에 변화를 줄 것이다.

우선 search 값을 확인해야하는데 이 값은 문자열로 되어 있다.

문자열에서 객체로 변환해주는 라이브러리 `qs` 를 사용하여, `query.{}` 처럼 접근하기 편하게 해준다.

```js
const query = qs.parse(location.search, {
  ignoreQueryPrefix: true,
});
```

`location.search`는 `?detail=true`이고,
여기서 `{ignoreQueryPrefix:true}`는 `?`를 없애준다.

```js
const detail = query.detail === "true";
```

그리고 추가적으로 qs로 파싱한 결과 값은 `'true'` 처럼 문자열로 되어있다.
