# Map 2
반복해서 여러개의 객체들이 있는 집합을 순환을 통해서 하나씩접근할 수 있는 객체집합을 iterable Object라고 합니다. 

```
for(let u of userRoles.keys()) {
    console.log(u.name);
}
```

result

```
John
Bing
Mon
```

<br/>

```
userRoles.keys();
```

result
```
[Map Iterator] { { name: 'John' }, { name: 'Bing' }, { name: 'Mon' } }
```

<br/>

```
for(let r of userRoles.values()){
    console.log(r);
}
```

result

```
User
User
Admin
```

<br/>

```
for(let ur of userRoles.entries()) { // entries는 Map의 기본 이터레이터
    console.log(`${ur[0].name} : ${ur[1]}`);
}
```

result

```
John : User
Bing : User
Mon : Admin
```

`entries()`는 Map의 기본 이터레이터이기 때문에 `entries()`를 사용하지 않고도 값을 추출할 수 있습니다.

```
for(let [u, r] of userRoles) {
    console.log(`${u.name} : ${r}`);
}
```
앞서 사용한 것보다 더 단축된 코드롤 사용할 수 있습니다.

<br/>
result

```
John : User
Bing : User
Mon : Admin
```

이렇게 이터러블 객체를 이용하지 않고 배열을 이용하려고 하면 확산 연산자(spread operator)를 사용하면 됩니다.

```
[...userRoles.values()]
```

result

```
[ 'User', 'User', 'Admin' ]
```

이렇게하면 값들을 배열형태로 반환할 수 있습니다.        

맵에 해당되는 각각의 요소들을 지우겠다면 `delete()`라는 메소드를 이용하면 됩니다.

```
userRoles.delete(user1);
userRoles;
userRoles.size;
```

result
```
true
Map { { name: 'Bing' } => 'User', { name: 'Mon' } => 'Admin' }
2
```

<br/>

요소들을 모두 지우고 싶으면 `clear()`를 이용하시면 됩니다.
```
userRoles.clear();
userRoles;
userRoles.size;
```

result

```
Map {}
0
```

<br/>

