import React from 'react';
import { NameField } from './Form';

export class PhoneBook extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(this.state.contacts);

    // this.setState(prevState => {
    //   return {
    //     contacts: prevState.contacts.push(values),
    //   };
    // });
    this.state.contacts.push(values);
    // this.setState({
    //   contacts: this.state.contacts.push(values)
    // });
    console.log(this.state.contacts.length);
    // this.props.onSubmit({ ...this.state });
    // this.ContactList();
    resetForm();
  };

  ContactList = ({ contacts }) => {
    // const contacts = this.state.contacts;
    // const List = contacts.map(contact => (
    //   <li key={contact.id}>{contact.name}</li>
    // ));
    return (
      <div>
        <h2>Contacts</h2>
        {/* <ul>{List}</ul> */}
        {contacts.length > 0 && (
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>
                {' '}
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  render() {
    return (
      <div>
        <NameField onSubmit={this.handleSubmit} />
        <this.ContactList contacts={this.state.contacts} />
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
