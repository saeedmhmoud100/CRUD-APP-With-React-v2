import React, { useState } from "react";
import UpdateUser from "./UpdateUser";

const ShowUser = props => {
  const user = props.user;
  let [isUpdate, setIsUpdate] = useState(false);

  const ToggleUpdate = _ => {
    setIsUpdate(!isUpdate);
  };


  return !isUpdate
    ? <div className="user">
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
          <button onClick={_ => ToggleUpdate()}>Update</button>
          <button onClick={_ => props.DeleteUser()}>Delete</button>
        </div>
      </div>
    : <UpdateUser
        user={user}
        UpdateUser={props.UpdateUser}
        key={user.id}
        ToggleUpdate={ToggleUpdate}
      />;
};
export default ShowUser;
