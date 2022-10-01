import React, { Fragment } from "react";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

export default function ShowUsers(props)  {
    return (
      <Fragment>
        <div className="user">
          <div className="id">
            {props.user.id}
          </div>
          <div className="name">
            {props.user.name}
          </div>
          <div className="age">
            {props.user.age}
          </div>
          <div className="jop">
            {props.user.jop}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={UpdateUser}>Update</button>
            <button onClick={DeleteUser}>Delete</button>
          </div>
        </div>
      </Fragment>
    );
}


