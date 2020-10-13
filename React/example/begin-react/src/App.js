import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users) {
  console.log('활성화 수 세는 중');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
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
  ]
}
function reducer(state, action) {
  switch (action.type) {
      case 'CREATE_USER':
        return {
          inputs: initialState.inputs,
          users: state.users.concat(action.user)
        }
      case 'TOGGLE_USER':
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.id ? {...user, active: !user.active} : user)
        };
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.id)
        }
      default:
        throw new Error('Unhandled action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username:'',
    email:'',
  });
  const {username, email} = form;
  const nextId = useRef(4);
  const {users} = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);


  const onRemove = useCallback(id =>{
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div><p>사용자 활성화 수: {count}</p></div>
    </>
  );
}

export default App;
