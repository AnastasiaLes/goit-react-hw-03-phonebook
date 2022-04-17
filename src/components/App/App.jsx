import React from 'react';
import { NameField } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { FilterField } from '../Filter/filter';

const LS_KEY = 'added_contacts';

export class PhoneBook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsObj = JSON.parse(localStorage.getItem(LS_KEY));
    if (contactsObj !== null) {
      this.setState({
        contacts: contactsObj,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    this.state.contacts.find(contact => contact.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  ChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <NameField onSubmit={this.formSubmitHandler} />
        <FilterField onChange={this.ChangeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
