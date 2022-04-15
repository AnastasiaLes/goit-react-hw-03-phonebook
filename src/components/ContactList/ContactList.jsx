import { ListElement, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(contact => (
            <ListElement key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteBtn
                type="button"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </DeleteBtn>
            </ListElement>
          ))}
        </ul>
      )}
    </div>
  );
};
