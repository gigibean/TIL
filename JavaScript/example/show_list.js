// 예를 들어 유저의 정보를 담고 있는 객체를 담은 배열이 있고,
const users = [
  { name: "John", age: "13", nickname: "Johnny" },
  { name: "Kim", age: "16", nickname: "Kiki" },
  { name: "Jessica", age: "20", nickname: "Jessi" },
];

// 이를 보여주어야 할 때
users.map((user) => console.log(user.name, user.age, user.nickname));
// 특정 유저를 보여주어야 하는 경우
// let user = users.filter((user) => user.nickname === "Johnny");
// console.log(user);
console.log(users.filter((user) => user.nickname === "Johnny"));
```
결과

John 13 Johnny
Kim 16 Kiki
Jessica 20 Jessi

0: {name: "John", age: "13", nickname: "Johnny"}
```;

// JSON 파싱 후의 형태 예시
const users_2 = {
  Johny: {
    name: "John",
    description: "Junior Frontend Engineer",
  },
  Kiki: {
    name: "Kim",
    description: "Senior Frontend Engineer",
  },
};
// 유저 전체 보여주기
Object.keys(users_2).map((user) => console.log(user));
Object.values(users_2).map((user) => console.log(user.name, user.description));

```
결과

Johny
Kiki
John Junior Frontend Engineer
Kim Senior Frontend Engineer
```;
