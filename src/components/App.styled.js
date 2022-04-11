import styled from '@emotion/styled';
import { Formik, Field } from 'formik';

// export const FormField = styled(Formik)`
// /* margin-left: 30px; */
// display: flex;
// gap: 20px;
// `;

export const FieldName = styled.label`
  margin-left: 30px;
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const ContactField = styled(Field)`
  margin-left: 30px;
  display: flex;
  color: grey;
  padding: 5px;
  margin-bottom: 20px;
`;

export const AddContactButton = styled.button`
  margin-left: 30px;
  display: flex;
  padding: 16px 20px;
  border: none;
`;
