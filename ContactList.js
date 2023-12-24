import React, { useState } from 'react';
import './ContactList.css'; 

const ContactList = ({ contacts, onDeleteContact, onEditContact }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-list-container">
      <h2><u>Contact List</u></h2>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="contact-grid">
        {filteredContacts.map((contact) => (
          <div className="contact-card" key={contact.id}>
            <img
              src={`https://via.placeholder.com/150?text=${contact.name}`}
              alt={contact.name}
            />
            <p>Name: {contact.name}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <div className="button-group">
              <button className="delete-btn" onClick={() => onDeleteContact(contact.id)}>
                Delete
              </button>
              <button className="edit-btn" onClick={() => onEditContact(contact.id)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;



