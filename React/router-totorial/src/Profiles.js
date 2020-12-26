import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import { profileData } from "./profileData";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const users = profileData;
  console.log(users);

  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        {Object.keys(users).map((user) => (
          <li>
            <NavLink
              to={{ pathname: `/profiles/${user}` }}
              activeStyle={{
                background: "black",
                color: "white",
              }}
            >
              {user}
            </NavLink>
          </li>
        ))}
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:user" component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
