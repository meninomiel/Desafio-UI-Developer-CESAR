import styled from 'styled-components';
import type { AppTheme } from '../../../styles/theme';

export const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.color.background.soft};
`;

export const Main = styled.main`
  flex: 1;
  padding: ${({ theme }: { theme: AppTheme }) => theme.spacing.large}px ${({ theme }: { theme: AppTheme }) => theme.spacing.xlarge}px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const HeaderSlot = styled.header`
  flex-shrink: 0;
  border-bottom: 1px solid ${({ theme }: { theme: AppTheme }) => theme.color.border.soft};
`;

export const FooterSlot = styled.footer`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: .75rem;
  padding: ${({ theme }: { theme: AppTheme }) => theme.spacing.small}px;
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.dark};
  font-weight: 500;
`;
