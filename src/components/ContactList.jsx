export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button type="button" onClick={() => onDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
