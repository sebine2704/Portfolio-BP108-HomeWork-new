import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";

const App = () => {
  const { ContactData, loading, error, deletecontact, add} = useFetch(
    "https://northwind.vercel.app/api/suppliers"
  );

  const [newContactName, setNewContactName] = useState("");

  const handleInputChange = (e) => {
    setNewContactName(e.target.value);
  };

  const handleAddCompany = async () => {
    if (newContactName.trim() === "") {
      return;
    }
    await add(newContactName);
    setNewContactName("");
  };

  const handleDelete = async (id) => {
    deletecontact(id);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="body">
        <div className="input_btn">
          <input
            type="text"
            value={newContactName}
            onChange={handleInputChange}
            placeholder="ContactName"
          />
          <button onClick={handleAddCompany}>Add</button>
        </div>
        <div className="contact_container">
          {ContactData.map((contact, index) => (
            <div className="item" key={contact.id}>
              <span>
                {index + 1}. {contact.contactName}
              </span>
              <button className="delete" onClick={() => handleDelete(company.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
  );
};

export default App;
