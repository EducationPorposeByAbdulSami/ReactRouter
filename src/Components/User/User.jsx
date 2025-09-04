import React from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center bg-amber-700 text-white p-4 my-4 text-5xl font-bold">
      User:
      {userid}
    </div>
  );
}

export default User;
