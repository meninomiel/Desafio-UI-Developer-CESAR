import styled from 'styled-components';
import type { AppTheme } from '../../styles/theme';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.xsmall}px;
  cursor: pointer;
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.dark};
  gap: .75rem;
`;

export const UserOptions = styled.div`
  gap: .25rem;
  display: flex;
  flex-flow: row;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }: { theme: AppTheme }) => theme.color.border.soft};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.accent};
`;

export const UserInfo = styled.span`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
  font-size: .875rem
`;
