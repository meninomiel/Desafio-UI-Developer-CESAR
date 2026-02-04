import styled from 'styled-components';
import type { AppTheme } from '../../styles/theme';


export const Wrapper = styled.div`
  position: relative;
  border: none;
  cursor: pointer;
  max-height: 24px;
  
  &:focus-visible {
    outline: 2px solid ${({ theme }: { theme: AppTheme }) => theme.color.border.focused};
    outline-offset: 2px;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -4px;
  left: 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.inverse};
  background-color: ${({ theme }: { theme: AppTheme }) => theme.color.background.accent};
  padding: 0 4px;
  outline: 2px solid ${({ theme }: { theme: AppTheme }) => theme.color.border.clear};
`;
