import React, { Fragment } from "react";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

class ShowUsers extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="user">
          <div className="id">1</div>
          <div className="name">Ahmed</div>
          <div className="age">25</div>
          <div className="jop">worker</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={UpdateUser}>Update</button>
            <button onClick={DeleteUser}>Delete</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ShowUsers;
