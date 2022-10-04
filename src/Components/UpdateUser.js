import React from "react";

class UpdateUser extends React.Component {
  state = {
    new_user: {},
    user_id: this.props.state.update_user
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = {};
    Array.from(
      document.querySelectorAll("#update input:not([type='submit'])")
    ).map(input => (data[input.id] = input.value));
    this.setState({ new_user: data,user_id:this.props.state.update_user });
    this.props.Update(this.state);
  };
  render() {
    return (
      <div
        className="update"
        id="update"
        style={
          this.props.state.isUpdate
            ? { visibility: "visible", opacity: 1 }
            : null
        }
      >
        <div className="update-container">
          <h2>Update User</h2>
          <form onSubmit={this.handleSubmit} name="update-form">
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                id="name"
                required
              />
              <input
                type="text"
                placeholder="Enter Your Jop"
                id="jop"
                required
              />
            </div>
            <div>
              <input
                type={"number"}
                placeholder="Enter Your Age"
                id="age"
                required
              />
              <input type="submit" value="Update User" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateUser;
