import styled from 'styled-components';
import type { AppTheme } from '../../styles/theme';

/** Definições de estilos do menu de navegação composto por uma lista de links. */
export const NavList = styled.nav`
  display: flex;
  gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.default}px;
  width: 100%;
  
  /* @media (max-width: 768px) {
    gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.default}px;
  } */
`;

/** Definições de estilos do links. */
export const NavItem = styled.a<{ active: boolean }>`
  font-size: .875rem;
  line-height: 1.25rem;
  text-decoration: none;
  letter-spacing: -0.02rem;
  color: ${({ theme, active }: { theme: AppTheme; active: boolean }) =>
    active ? theme.color.content.accent : theme.color.content.default};
  font-weight: 500;
  transition: all 0.2s ease;

  pointer-events: ${({ active }) => (active ? 'none' : 'auto')};
  
  &:hover {
    color: ${({ theme }: { theme: AppTheme }) => theme.color.content.dark};
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }: { theme: AppTheme }) => theme.color.border.focused};
  }
`;
