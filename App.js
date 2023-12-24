import React, { useState } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';
import './App.css';


const App = () => {
  const [contacts, setContacts] = useState([
   
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const handleAddContact = (contact) => {
    const newContacts = [...contacts, { ...contact, id: Date.now() }];
    setContacts(newContacts);
    setShowAddForm(false);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleEditContact = (id) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    setEditingContact(contactToEdit);
    setShowAddForm(true);
  };

  const handleUpdateContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setShowAddForm(false);
    setEditingContact(null);
  };

  return (
    <div>
      <h1><u>Contact Management System</u></h1>
      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Hide Form' : 'Add Contact'}
      </button>
      {showAddForm && (
        <AddContact
          onAddContact={handleAddContact}
          onUpdateContact={handleUpdateContact}
          editingContact={editingContact}
        />
      )}
      <ContactList
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
        onEditContact={handleEditContact}
      />
    </div>
  );
};

export default App;
