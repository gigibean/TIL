import React, {useRef, useState, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성화 수 세는 중');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Kim',
      email: 'kim@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'Lee',
      email: "lee@gmail.com",
      active: false
    },
    {
      id: 3,
      username: 'Park',
      email: 'park@gmail.com',
      active: false
    }
  ]); 
  const nextId = useRef(4);
  // 이 값이 바뀐다고 리렌더링 될 필요 없기 때문에 useState가 아닌 useRef 를 사용
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(
    id => {
      setUsers(users => users.filter(user => user.id !== id));
    },
    []
  );
  const onToggle = useCallback(
    id => {
      setUsers(
        users => 
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    []
  );
  //const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username}  email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div><p>사용자 활성화 수</p>{count}</div>
    </>
  );
}

export default App;
