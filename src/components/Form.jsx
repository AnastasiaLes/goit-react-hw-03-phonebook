import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { ContactField, FieldName, AddContactButton } from './App.styled';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive(),
});

const initialValues = {
  name: '',
  number: '',
};

export class NameField extends React.Component {
  state = {
    contacts: [],
  };

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    // console.log(this.state.contacts);
    resetForm();
    this.props.onSubmit(this.state.contacts);
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  render() {
    console.log(this.state.contacts);
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <FieldName htmlFor={this.nameInputId}>Name</FieldName>
          <ContactField type="text" name="name" id={this.nameInputId} />
          <ErrorMessage name="name" component="div" />

          <FieldName htmlFor={this.numberInputId}>Number</FieldName>
          <ContactField type="tel" name="number" id={this.numberInputId} />
          <ErrorMessage name="number" component="div" />

          <AddContactButton type="submit"> Add contact </AddContactButton>
        </Form>
      </Formik>
    );
  }
}
