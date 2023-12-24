import React, { useState, useEffect } from 'react';
import './AddContact.css'; 

const AddContact = ({ onAddContact, onUpdateContact, editingContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone);
      setEmail(editingContact.email);
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, phone, email };

    if (editingContact) {
      newContact.id = editingContact.id;
      onUpdateContact(newContact);
    } else {
      onAddContact(newContact);
    }

    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <div>
      <h2><u>{editingContact ? 'Edit Contact' : 'Add Contact'}</u></h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">{editingContact ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddContact;
