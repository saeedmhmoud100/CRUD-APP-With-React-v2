import React, { Component } from "react";
import "./App.css";
import AddUser from "./Components/Adduser";
import ShowUser from "./Components/ShowUser";

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
              ? this.state.users.map(user =>
                  <ShowUser
                    user={user}
                    DeleteUser={_ => {
                      this.DeleteUser(user.id);
                    }}
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
