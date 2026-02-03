import styled from 'styled-components';
import type { AppTheme } from '../../../styles/theme';

export const Wrapper = styled.header`
  background: ${({ theme }: { theme: AppTheme }) => theme.color.background.default};
  border-bottom: 1px solid ${({ theme }: { theme: AppTheme }) => theme.color.border.default};
  padding: ${({ theme }: { theme: AppTheme }) => theme.spacing.default}px ${({ theme }: { theme: AppTheme }) => theme.spacing.xlarge}px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.default}px;
`;

export const Brand = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.dark};
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.small}px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.xsmall}px;
`;
