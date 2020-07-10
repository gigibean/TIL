# Map 1

ES6에서 새로 도입한 데이터 구조
키와 값을 연결합니다. 
기존에 객체를 사용하면서 발생했던 몇몇 문제들이 있었습니다. 예를들면 객체의 프로퍼티에 대한 순서를 보장하지 않고, 키를사용할 경우 문자열이나 심볼이었기 때문에 객체를 키로 이용해서 값과 연결할 수 없다는 것과 객체 안에 키와 값이 몇개가 되는지를 쉽게 알 수 있는 방법이 없다는 문제점이 있었습니다.     
이러한 문제점을 해결하는 방법이 `Map`입니다.

```
const user1 = {
    name: "John",
};
const user2 = {
    name : "Bing",
}
const user3 = {
    name : "Mon",
}
const user4 = {
    name : "Joey",
}

const userRoles = new Map();

userRoles.set(user1, 'User');
userRoles.set(user2, 'User');
userRoles.set(user3, 'Admin');

/*
userRole
    .set(user1, 'User')
    .set(user2, 'User')
    .set(user3, 'Admin');
*/

// 생성자를 이용해서 배열로 넘기는 방법
/*
const userRoles = new Map([
    [user1, 'User'],
    [user2, 'User'],
    [user3, 'Admin'],
]); 
*/

//user2 역할을 알고싶을 떄 get 메서드 사용
userRoles.get(user2);
userRoles.get(user3);
userRoles.get(user4);

//해당 맵에 키가 존재하는지 확인하는 방밥
userRoles.has(user3);
userRoles.has(user4);
```

result

```
'User'
'Admin'
undefined

true
false
```

객체는 키를 객체로 사용할 수 없었습니다. 하지만 `Map`같은 경우에는 `userRoles`라는 맵을 만들었는데 `user1`,..`user4' 이 객체들을 키로 사용한 것입니다.
`userRoles.set('user1', 'User');` 이런식으로 사용 가능했습니다.

`has` 메서드는 맵에 키가 존재하는지 확인하는 메서드 입니다. `user3`이라는 키가 존재하기 때문에 `true`가 반환되고 `user4`는 키가 없기때문에 `false`가 반환됩니다.        

<br/>

`userRoles.size` 는 `userRoles`의 프로퍼티 개수를 반환합니다.       (result  `3`)
<br/>
`userRoles.keys()` 는 해당맵의 키를 알 수 있습니다.         (result `[Map Iterator] { { name: 'John' }, { name: 'Bing' }, { name: 'Mon' } }`)
<br/>
`userRoles.entries()`는 키와 값을 모두 확인할 수 있습니다.      
(result 
`[Map Entries] {
  [ { name: 'John' }, 'User' ],
  [ { name: 'Bing' }, 'User' ],
  [ { name: 'Mon' }, 'Admin' ]
}` )      

<br/>

리턴해주는 값들이 모두 이터러블 객체인데, 이 값들은 추후 `for` 등을 이용해서 사용할 수 있습니다.