import styled from 'styled-components';
import type { AppTheme } from '../../styles/theme';

export const PageContainer = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }: { theme: AppTheme }) => theme.spacing.huge}px 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const PageTitle = styled.h1`
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.dark};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -.028rem;
  margin: 0;
`;

export const FormCard = styled.main`
  background: ${({ theme }: { theme: AppTheme }) => theme.color.background.default};
  border-radius: ${({ theme }: { theme: AppTheme }) => theme.radius.md}px;
  padding: ${({ theme }: { theme: AppTheme }) => theme.spacing.xlarge}px;
  width: 100%;
  margin: 0;
`;