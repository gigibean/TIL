import React, { useEffect, useReducer } from "react";
import axios from "axios";
import useAsync from "./useAsync";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function Users() {
  const [state, refetch] = useAsync(getUsers, []);

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return <div>null</div>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
    </>
  );
}

export default Users;
