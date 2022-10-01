import React from "react";

const AddUser = props => {
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

  return (
    <div className="add-form">
      <h2>Add User</h2>
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
          <input type="submit" value="Add User" />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
