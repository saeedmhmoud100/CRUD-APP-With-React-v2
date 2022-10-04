import React from "react";

class UpdateUser extends React.Component {
  render() {
    return (
      <div className="user" key={this.props.user.id}>
        <div className="id">
          {this.props.user.id}
        </div>
        <input className="name" defaultValue={this.props.user.name} />
        <input
          className="age"
          defaultValue={this.props.user.age}
          type={"number"}
        />
        <input className="jop" defaultValue={this.props.user.jop} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            onClick={_ =>
              this.props.UpdateUser({
                name: document.querySelector("input.name").value,
                age: document.querySelector("input.age").value,
                jop: document.querySelector("input.jop").value,
                id: this.props.user.id
              })}
          >
            Update
          </button>
          <button style={{ height: "0px", padding: "0" }} />
        </div>
      </div>
    );
  }
}

export default UpdateUser;
