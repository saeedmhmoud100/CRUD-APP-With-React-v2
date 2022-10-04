import React from "react";

const ShowUser = props => {
  const user = props.user;
  return (
    <div className="user">
      <div className="id">
        {user.id}
      </div>
      <div className="name">
        {user.name}
      </div>
      <div className="age">
        {user.age}
      </div>
      <div className="jop">
        {user.jop}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={_ => props.ToggleUpdate()}>Update</button>
        <button onClick={_ => props.DeleteUser()}>Delete</button>
      </div>
    </div>
  );
};
export default ShowUser;
