import styled from 'styled-components';
import type { AppTheme } from '../../../styles/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.large}px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.large}px;
`;

export const FormActions = styled.div`
  display: flex;
  gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.xsmall}px;
  justify-content: flex-end;
`;