import React, { useState, useEffect } from "react";
import { API_ORIGIN } from "../config";
import LoadingSpinner from "./LoadingSpinner";
import UserDetail from "./UserDetail";
import { fetchSearch } from "../api/get";

const User = props => {
  const member_id = props.match.params.member_id;
  const [user, setUser] = useState(null);
  useEffect(() => {
    const url = `${API_ORIGIN}/member/${member_id}`;
    fetch(url)
      .then(data => data.json())
      .then(result => {
        setUser(result);
      });
  }, [member_id]);

  return <>{user ? <UserDetail val={user[0]} /> : <LoadingSpinner />}</>;
};

export default User;
