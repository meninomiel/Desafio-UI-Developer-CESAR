// src/pages/register-page/RegisterForm.tsx
import React from 'react';
import { Form, FormRow } from '../_form/styles';
import { Input } from '../../../components/input';

export const RegisterForm: React.FC = () => {
  return (
    <Form>
      <FormRow>
        <Input
          id="firstName"
          label="First name"
          type='text'
          placeholder="Insert your first name"
          variant="default"
          required
        />
        <Input
          id="lastName"
          label="Last name"
          type='text'
          placeholder="Insert your last name"
          variant="success"
          value='Bandeira da Silva'
          required
        />
      </FormRow>
      <FormRow>
        <Input
          id="email"
          label="Email"
          type='email'
          placeholder="Insert your best email"
          variant="error"
          value='contato@mailcom'
          helperText='This email is not valid'
        />
        <Input
          id="phone"
          label="Phone"
          type='tel'
          placeholder="Insert your phone"
          variant="default"
          value='(81) 98989'
          required
        />
      </FormRow>
      <FormRow>
        <Input
          id="address"
          label="Address"
          placeholder="Insert a valid address"
          variant="default"
          optional
        />
      </FormRow>
      <FormRow />
    </Form>
  );
};
