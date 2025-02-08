import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/auth/authSlice";

const UserName = () => {
  const user = useSelector(selectUser);
  const username = user?.name || "...";
  return <p className="--color-white">&nbsp; Hi, {username}!&nbsp;</p>;
};

export default UserName;