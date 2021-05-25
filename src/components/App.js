import React,{useState , useEffect} from 'react';
import {BrowserRouter as Router,swtich, Route} from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import Contactlist from "./ContactList"; 
import ContactDetail from "./ContactDetail"; 
// import ContactCard from './ContactCard';
    
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {   
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header />
      <swtich>
      <Route
       path="/"
       exact 
       render={(props) => (
      <Contactlist 
      {...props}
          contacts={contacts} 
          getContactId={removeContactHandler} 
        />
        )}
       /> 
     <Route 
      path="/add"
    render={(props) => (
        <AddContact {...props} addContactHandler = {addContactHandler} /> 
      )}
      />
      <Route path="/contact/:id" component={ContactDetail}/>
    
      
      </swtich>
     
      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <Contactlist contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
 
    </div>
  );
}


export default App;
