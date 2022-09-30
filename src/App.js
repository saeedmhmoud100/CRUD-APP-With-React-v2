import "./App.css";
import AddUser from "./Components/Adduser";
import ShowUsers from "./Components/Showusers";
function App() {
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
          <ShowUsers />
        </div>
      </div>
      <AddUser />
    </div>
  );
}

export default App;
