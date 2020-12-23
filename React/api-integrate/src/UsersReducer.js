import React, { useState } from "react";
import { useUsersState, useUsersDispatch, getUsers } from "./UsersContext";
import User from "./User";

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users; // state.data 를 users 키워드로 조회
  const fetchDate = () => {
    getUsers(dispatch);
  };
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return <button onClick={fetchDate}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username}({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchDate}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
