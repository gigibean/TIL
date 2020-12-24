import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";
import { profileData } from "./profileData";

const Profiles = () => {
  const users = profileData;
  console.log(users);

  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        {Object.keys(users).map((user) => (
          <li>
            <Link to={{ pathname: `/profiles/${user}` }}>{user}</Link>
          </li>
        ))}
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:user" component={Profile} />
    </div>
  );
};

export default Profiles;
