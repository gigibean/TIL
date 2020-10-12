import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value,
    });
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Kim',
      email: 'kim@gmail.com',
    },
    {
      id: 2,
      username: 'Lee',
      email: "lee@gmail.com",
    },
    {
      id: 3,
      username: 'Park',
      email: 'park@gmail.com',
    }
  ]); 
  const nextId = useRef(4);
  // 이 값이 바뀐다고 리렌더링 될 필요 없기 때문에 useState가 아닌 useRef 를 사용
  const onCreate = () => {
    const user = {
      id: nextId.current,
      ...inputs,
    };
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }  

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  };

  return (
    <>
      <CreateUser username={username}  email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
