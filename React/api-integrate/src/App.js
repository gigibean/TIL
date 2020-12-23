import React from "react";
import { UserProvider } from "./UsersContext";
import Users from "./UsersReducer";

function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}

export default App;
