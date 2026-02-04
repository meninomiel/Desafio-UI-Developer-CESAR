// src/pages/register-page/RegisterForm.tsx
import React, { useRef } from 'react';
import { Form, FormActions, FormRow } from '../_form/styles';
import { Input } from '../../../components/input';
import { FileUpload } from '../../../components/file-upload';
import { Button } from '../../../components/button';
import type { FormData } from '../_form/types';
import { useForm } from '../../../hooks/useForm';

const INITIAL_VALUES: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  resume: null,
};

export const RegisterForm: React.FC = () => {
  const { values, handleChange, reset } = useForm<FormData>(INITIAL_VALUES);
  const formRef = useRef<HTMLFormElement>(null);

  console.log('Form values:', values);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', values);
    // Validação e envio aqui
  };

  const handleReset = () => {
    reset();
    formRef.current?.reset(); // Reset do HTML form também
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <FormRow>
        <Input
          id="firstName"
          label="First name"
          type='text'
          placeholder="Insert your first name"
          variant="default"
          value={values.firstName}
          onChange={(value: string) => handleChange('firstName', value)}
          required
        />
        <Input
          id="lastName"
          label="Last name"
          type='text'
          placeholder="Insert your last name"
          variant="default"
          value={values.lastName}
          onChange={(value) => handleChange('lastName', value)}
          required
        />
      </FormRow>
      <FormRow>
        <Input
          id="email"
          label="Email"
          type='email'
          placeholder="Insert your best email"
          value={values.email}
          onChange={(value) => handleChange('email', value)}
          required
        />
        <Input
          id="phone"
          label="Phone"
          type='tel'
          placeholder="Insert your phone"
          variant="default"
          value={values.phone}
          onChange={(value) => handleChange('phone', value)}
          required
        />
      </FormRow>
      <FormRow>
        <Input
          id="address"
          label="Address"
          placeholder="Insert a valid address"
          variant="default"
          value={values.address}
          onChange={(value) => handleChange('address', value)}
          optional
        />
      </FormRow>
      <FormRow>
        <FileUpload
          id="resume"
          label="Upload your resume"
          key={values.resume ? 'with-file' : 'no-file'}
          helperText="Allowed files: pdf, doc or odt."
          file={values.resume}
          onFileSelect={(file) => handleChange('resume', file)}
          onFileRemove={() => handleChange('resume', null)}
          required
        />
      </FormRow>
      <FormActions>
        <Button variant="secondary" type='reset' onClick={handleReset}>
          Clear
        </Button>
      
        <Button variant="primary" type="submit">
          Register
        </Button>
      </FormActions>
    </Form>
  );
};
