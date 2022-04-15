import React from 'react';
import { NameField } from './Form';
import { ContactList } from './ContactList';

export class PhoneBook extends React.Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    // console.log(data);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
    console.log(this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <NameField onSubmit={this.formSubmitHandler} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

// const contacts = [
//   {
//     name: 'Hanna',
//     id: nanoid()},
//   {
//     name: 'Taras',
//     id: nanoid()
//   },
// ];

// export const PhoneBook = () => {

//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     console.log(contacts);
//     resetForm();
//     contacts.push(values);
//   };

//   const ContactList = (props) => {
//     console.log("Yes");
//     const contacts = props.contacts;
//     const List = contacts.map(contact => <li key={contact.id}>
//       {contact.name}
//     </li>);
//     return (
//       <ul>{List}</ul>
//     )
// }

//   return (
//     <div>
//       <FormMarkup onSubmit={handleSubmit}/>
//       <ContactList contacts={contacts}/>
//     </div>
//     );
// }
