import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import react , { useState, useEffect } from 'react';
import {v4 as uuid} from "uuid"; 

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts , setContacts] = useState([]);
  const addContactHandler = contact => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(),...contact}]);
  }

  useEffect(()=>{
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrievedContacts) setContacts(retrievedContacts)
  },[])

 useEffect(()=>{
 localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
 },[contacts])

const removeContact = id => {
  const newContactList = contacts.filter(contact => contact.id !== id);
  setContacts(newContactList);
}

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContact}/>
    </div>
  );
}

export default App;
