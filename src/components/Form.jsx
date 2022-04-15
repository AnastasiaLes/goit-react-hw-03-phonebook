import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { ContactField, FieldName, AddContactButton } from './App.styled';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const GenerateId = nanoid();

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive(),
});

const initialValues = {
  name: '',
  number: '',
  id: GenerateId,
};

export class NameField extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    // this.setState({ [name]: value });
    console.log(name, value);
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(this.state.contacts);

    this.state.contacts.push(values);
    // this.setState({
    //   contacts: this.state.contacts.push(values)
    // });

    // this.props.onSubmit({ ...this.state });
    resetForm();
    this.props.onSubmit(this.state.contacts);
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  render() {
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
