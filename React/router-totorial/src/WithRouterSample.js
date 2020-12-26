import React from "react";
import { withRouter } from "react-router-dom";

const withRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} rows={10} readOnly />
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} rows={10} readOnly />
      <button onClick={() => history.push("/")}>home</button>
    </div>
  );
};

export default withRouter(withRouterSample);
