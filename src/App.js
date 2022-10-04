import React, { Component } from "react";
import "./App.css";
import AddUser from "./Components/Adduser";
import UpdateUser from "./Components/UpdateUser";

class App extends Component {
  state = {
    users: [],
    isUpdate: false,
    update_user: null
  };

  AddUser(user) {
    user.id = this.state.users.length;
    user.id++;
    let users = [...this.state.users, user];
    this.setState({
      users: users
    });
  }

  DeleteUser(id) {
    let users = this.state.users.filter(user => user.id !== id);
    users.forEach((user, i) => (user.id = ++i));
    this.setState({
      users: users
    });
  }
  toggleUpdate = _ => {
    this.setState({ isUpdate: !this.state.isUpdate });
  };

  Update = data => {
    // console.log(data.user_id);
    const old_user = this.state.users.filter(user => user.id === data.user_id)
      .id;
    const new_user = [...data.new_user,old_user;
    new_user.id = ;
    let users = [];
    this.state.users.flatMap(user => {
      if (user.id === old_user) {
        users.push(new_user);
      } else {
        users.push(user);
        this.toggleUpdate();
      }
    });
    console.log(old_user, new_user);
  };
  render() {
    return (
      <div className="app">
        <div className="container">
          <UpdateUser state={this.state} Update={this.Update} />
          <h2>Users</h2>
          <div className="users">
            <div className="user head">
              <div className="id">ID</div>
              <div className="name">Name</div>
              <div className="age">Age</div>
              <div className="jop">Jop</div>
              <div style={{ visibility: "hidden" }}>
                <button>Update</button>
                <button>Delete</button>
              </div>
            </div>
            {this.state.users.length > 0
              ? this.state.users.map(user =>
                  <div className="user" key={user.id}>
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
                      <button
                        onClick={_ => {
                          this.setState({ update_user: user.id });
                          this.toggleUpdate();
                        }}
                      >
                        Update
                      </button>
                      <button
                        onClick={_ => {
                          this.DeleteUser(user.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              : <h2
                  style={{
                    textAlign: "center",
                    marginTop: "40px",
                    fontSize: "29px",
                    color: "#008"
                  }}
                >
                  "You Don't Have Any User Yet"
                </h2>}
          </div>
        </div>
        <AddUser state={this.state} AddUser={this.AddUser.bind(this)} />
      </div>
    );
  }
}

export default App;
