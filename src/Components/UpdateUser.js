import React from "react";

const UpdateUser = props => {
  let state = {
    name: "",
    age: 0,
    jop: ""
  };

  const handleChange = e => {
    state[e.target.id] = e.target.value;
  };

  const handleSubmmit = e => {
    e.preventDefault();
    if (state.name && state.jop) {
      props.AddUser(state);
      state = ["", 0, ""];
      e.target.reset();
    }
  };
  console.log("update");
  return (
    <div className="update">
      <div className="update-container">
        <h2>Update User</h2>
        <form onSubmit={e => handleSubmmit(e)}>
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter Your Jop"
              id="jop"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type={"number"}
              placeholder="Enter Your Age"
              id="age"
              onChange={handleChange}
            />
            <input type="submit" value="Update User" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
