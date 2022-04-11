import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { ContactField, FieldName, AddContactButton } from './App.styled';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
// import { ContactList } from './Contacts';

const schema = yup.object().shape({
  name: yup.string().required(),
});

const initialValues = {
  name: '',
  id: nanoid(15),
};

export class PhoneBook extends React.Component {
  state = {
    name: '',
    contacts: [],
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(this.state.contacts);
    // this.setState(prevState => {
    //   return {
    //     contacts: prevState.contacts.push(values),
    //   };
    // });
    resetForm();
  };

  render() {
    // const qwe = this.state.contacts;
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          <Form autoComplete="off">
            <FieldName htmlFor="name">Name</FieldName>
            <ContactField type="text" name="name" />
            <ErrorMessage name="name" component="div" />

            <AddContactButton type="submit"> Add contact </AddContactButton>
          </Form>
        </Formik>

        <div>
          <h2>Contacts</h2>
          <ul>
            {/* {qwe.map(contact => (
            <li key={contact.id}>
              {contact.name}
            </li>))} */}
          </ul>
        </div>
      </div>
    );
  }
}

// export const PhoneBook = () => {

//   const handleSubmit = (values, {resetForm}) => {
//     console.log(values);
//     console.log(contacts);
//     resetForm();
//     return contacts.push(values);
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={schema}
//         onSubmit={handleSubmit}
//       >
//         <Form autoComplete='off'>
//         <FieldName htmlFor='name'>
//             Name

//           </FieldName>
//           <ContactField type="text" name="name" />
//           <ErrorMessage name="name" component="div"/>

//         <AddContactButton type='submit'> Add contact </AddContactButton>
//         </Form>
//       </Formik>

//        <div>
//         <h2>Contacts</h2>
//         <ul>
//           {contacts.map(contact => (
//             <li key={contact.id}>
//               {contact.name}
//             </li>))}
//         </ul>
//       </div>

//     </div>
//     );
// }
