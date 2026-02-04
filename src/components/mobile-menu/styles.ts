import styled from 'styled-components';
import type { AppTheme } from '../../styles/theme';
import { NavItem } from '../navigation';

export const Button = styled.button<{ open: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  
  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.tiny}px;
  }
  
  &:hover {
    background: ${({ theme }: { theme: AppTheme }) => theme.color.background.light};
  }
`;

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0; 
  background: #00000080;
  z-index: 999; 
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transition: opacity 0.2s ease-in-out;
`;

export const MenuPanel = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: ${({ theme }: { theme: AppTheme }) => theme.color.background.light};
  box-shadow: -2px 0 16px rgba(0, 0, 0, 0.1);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1000; 
  display: flex;
  flex-direction: column;
  gap: .5rem;
  
  @media (min-width: 581px) {
    display: none;
  }
`;

export const MenuHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.color.background.default};
`;

export const AccountInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }: { theme: AppTheme }) => theme.color.border.default};
`;

export const AccountMenu = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export const NavListMobile = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }: { theme: AppTheme }) => theme.spacing.default}px;
  gap: 1rem;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.color.background.default};
`;

export const PanelContent = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const LogoutMenuItem = styled.div`
  width: 100%;
  background-color: ${({ theme }: { theme: AppTheme }) => theme.color.background.default};
  padding: 1rem;

  ${NavItem} {
    color: ${({ theme }: { theme: AppTheme }) => theme.color.content.danger};
  }
`;