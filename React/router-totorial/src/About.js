import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";
  return (
    <div>
      <h1>About</h1>
      <p>this page is for introducing</p>
      {detail && <p>추가적인 정보</p>}
    </div>
  );
};

export default About;
