import React from "react";

// 프로필에서 사용할 데이터
const profileData = {
  Johny: {
    name: "John",
    description: "Junior Frontend Engineer",
  },
  Kiki: {
    name: "Kim",
    description: "Senior Fronted Engineer",
  },
};

const Profile = ({ match }) => {
  // params를 받아올 땐 match 안에 들어있는 params 값 참조
  const { user } = match.params;
  const profile = profileData[user];

  if (!profile) {
    return <div>존재하지 않는 유저</div>;
  }

  return (
    <div>
      <h3>
        {user}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
