import React from 'react';
import { PageShell } from '../_layout/PageShell';
import type { RegisterPageProps } from './types';
import {
  PageContainer,
  PageTitle,
  FormCard,
} from './styles';
import { RegisterForm } from './_form';

export const RegisterPage: React.FC<RegisterPageProps> = ({
  title = 'Candidate Registration'
}) => (
  <PageShell>
    <PageContainer>
      <PageTitle>{title}</PageTitle>
      <FormCard>
        <RegisterForm />
      </FormCard>
    </PageContainer>
  </PageShell>
);
