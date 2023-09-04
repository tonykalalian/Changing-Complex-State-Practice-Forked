import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const updateName = (event) => {
    setContact({
      fName: event.target.value
    });
  };
  const updateLastName = (event) => {
    setContact({
      ...contact,
      lName: event.target.value
    });
  };
  const updateEmail = (event) => {
    setContact({
      ...contact,
      email: event.target.value
    });
  };
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={updateName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={updateLastName}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={updateEmail}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
