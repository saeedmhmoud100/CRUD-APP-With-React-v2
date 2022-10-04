import React, { Component } from "react";
import "./App.css";
import AddUser from "./Components/Adduser";
import ShowUser from "./Components/ShowUser";
import UpdateUser from "./Components/UpdateUser";

class App extends Component {
  state = {
    // users: [{ name: "", job: "", age: 0, id: 1 }],
    users: [],
    isUpdate: false
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

  ToggleUpdate = _ => {
    this.setState({ isUpdate: !this.state.isUpdate });
  };

  UpdateUser(new_user) {
    let users = [];
    console.log(this.state);
    this.state.users.forEach(user => {
      console.log(user);
      console.log("------------------------------");
      user.id === new_user.id ? users.push(new_user) : users.push(user);
      this.setState({ users: users });
    });
    this.ToggleUpdate();
  }

  render() {
    return (
      <div className="app">
        <div className="container">
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
              ? this.state.users.map(
                  user =>
                    !this.state.isUpdate
                      ? <ShowUser
                          user={user}
                          DeleteUser={_ => this.DeleteUser(user.id)}
                          ToggleUpdate={_ => this.ToggleUpdate()}
                          key={user.id}
                        />
                      : <UpdateUser
                          user={user}
                          UpdateUser={this.UpdateUser.bind(this)}
                          key={user.id}
                        />
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
