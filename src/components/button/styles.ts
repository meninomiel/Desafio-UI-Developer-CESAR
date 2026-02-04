import styled, { css } from 'styled-components';
import type { AppTheme } from '../../styles/theme';
import type { ButtonVariant } from './types';

const primaryStyles = css`
  background: ${({ theme }: { theme: AppTheme }) => theme.color.background.accent};
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.inverse};
  
  &:hover:not(:disabled) {
    background: ${({ theme }: { theme: AppTheme }) => theme.color.background.accent};
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.08);
      z-index: -1;
    }
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const secondaryStyles = css`
  background: transparent;
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.dark};
  
  &:hover:not(:disabled) {
    background: ${({ theme }: { theme: AppTheme }) => theme.color.background.light};
    border-color: ${({ theme }: { theme: AppTheme }) => theme.color.border.dark};
  }
  
  &:active:not(:disabled) {
    background: ${({ theme }: { theme: AppTheme }) => theme.color.background.soft};
  }
`;

export const StyledButton = styled.button<{
  variant: ButtonVariant;
  fullWidth: boolean;
}>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${({ theme }: { theme: AppTheme }) => theme.radius.sm}px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
  padding: ${({ theme }: { theme: AppTheme }) =>
    `${theme.spacing.xsmall}px ${theme.spacing.small}px`};
  font-size: .75rem;
  z-index: 1;
  letter-spacing: -.024rem;
  
  /* Variant styles */
  ${({ variant }) => (variant === 'primary' ? primaryStyles : secondaryStyles)}
  
  
  /* Disabled styles */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
    transform: none !important;
  }
`;

export const LoadingSpinner = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
