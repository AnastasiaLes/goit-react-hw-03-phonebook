export const ContactList = ({ contacts }) => {
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
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
