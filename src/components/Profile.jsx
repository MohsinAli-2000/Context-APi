import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="bg-red-500" >Please login</div>;

  return <div className="bg-green-500">Welcome {user.username}</div>;
}

export default Profile;
