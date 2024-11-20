import React, { useEffect, useState } from "react";

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 style={{
        color: "white"
      }}
      
      >Contacts List</h2>
      <table
        border="1"
        style={{
          width: "100%",
          textAlign: "left",
          borderCollapse: "collapse",
          borderColor: "#EB5757",
          background: "#F7F9FC",
          height: "25px",
          fontSize: "16px"
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#00AA00",
              color: "white",
              height: "50px",
            }}
          >
            <th>ID</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact.id}
                style={{
                  height: "25px",
                  fontSize: "14px"
                }}>
                <td>{contact.id}</td>
                <td>{contact.avatar}</td>
                <td>{contact.first_name}</td>
                <td>{contact.last_name}</td>
                <td>{contact.company}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.job_title}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
