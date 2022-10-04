import React from "react";

class UpdateUser extends React.Component {
  render() {
    return (
      <div className="user" key={this.props.user.id}>
        <div className="user">
          {/* {this.props.user.id} */}
        </div>
        <div className="name">
          {this.props.user.name}
        </div>
        <div className="age">
          {this.props.user.age}
        </div>
        <div className="jop">
          {this.props.user.jop}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button>Update</button>
          <button
            onClick={_ => {
              this.props.delete(this.props.user.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default UpdateUser;
