import "./App.css";

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
          </div>
          <div className="user">
            <div className="id">1</div>
            <div className="name">Ahmed</div>
            <div className="age">25</div>
            <div className="jop">worker</div>
            <button>Update</button>
          </div>
          <div className="user">
            <div className="id">1</div>
            <div className="name">Ahmed</div>
            <div className="age">25</div>
            <div className="jop">worker</div>
            <button>Update</button>
          </div>
          <div className="user">
            <div className="id">1</div>
            <div className="name">Ahmed</div>
            <div className="age">25</div>
            <div className="jop">worker</div>
            <button>Update</button>
          </div>
          <div className="user">
            <div className="id">1</div>
            <div className="name">Ahmed</div>
            <div className="age">25</div>
            <div className="jop">worker</div>
            <button>Update</button>
          </div>
        </div>
      </div>
      <div className="add-form">
        <h2>Add User</h2>
        <form>
          <div>
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your Jop" />
          </div>
          <div>
            <input type={"number"} placeholder="Enter Your Age" />
            <input type="submit" value="Add User" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
