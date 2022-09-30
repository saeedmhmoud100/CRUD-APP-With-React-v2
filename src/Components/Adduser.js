import React from "react";
const handleSubmmit = e => {
  e.preventDefault();
  console.log("Add User");
};
const AddUser = _ => {
  return (
    <div className="add-form">
      <h2>Add User</h2>
      <form onSubmit={e => handleSubmmit(e)}>
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
  );
};

export default AddUser;
