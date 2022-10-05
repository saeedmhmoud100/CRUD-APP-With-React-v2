import React from "react";

class UpdateUser extends React.Component {
  handleClick = _ => {
    this.props.UpdateUser({
      name: document.querySelector(`input.name-${this.props.user.id}`).value,
      age: document.querySelector(`input.age-${this.props.user.id}`).value,
      jop: document.querySelector(`input.jop-${this.props.user.id}`).value,
      id: this.props.user.id
    });
    this.props.ToggleUpdate();
    document.querySelector(`input.name-${this.props.user.id}`).value = "";
    document.querySelector(`input.age-${this.props.user.id}`).value = 0;
    document.querySelector(`input.jop-${this.props.user.id}`).value = "";
  };

  render() {
    return (
      <div className="user" key={this.props.user.id}>
        <div className="id">
          {this.props.user.id}
        </div>
        <input
          className={`name-${this.props.user.id}`}
          defaultValue={this.props.user.name}
        />
        <input
          className={`age-${this.props.user.id}`}
          defaultValue={this.props.user.age}
          type={"number"}
        />
        <input
          className={`jop-${this.props.user.id}`}
          defaultValue={this.props.user.jop}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button onClick={_ => this.handleClick(this.props.user)}>
            Update
          </button>
          <button style={{ height: "0px", padding: "0" }} />
        </div>
      </div>
    );
  }
}

export default UpdateUser;
