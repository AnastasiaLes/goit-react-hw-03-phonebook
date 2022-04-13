import { Formik, Form, ErrorMessage } from 'formik';
import { ContactField, FieldName, AddContactButton } from './App.styled';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
  id: nanoid(),
};

export const NameField = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form autoComplete="off">
        <FieldName htmlFor="name">Name</FieldName>
        <ContactField type="text" name="name" />
        <ErrorMessage name="name" component="div" />

        <FieldName htmlFor="number">Number</FieldName>
        <ContactField type="tel" name="number" />
        <ErrorMessage name="name" component="div" />

        <AddContactButton type="submit"> Add contact </AddContactButton>
      </Form>
    </Formik>
  );
};
