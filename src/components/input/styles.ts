import styled from 'styled-components';
import type { AppTheme } from '../../styles/theme';
import type { InputVariant, InputState } from './types';

const getBorderColor = (
  theme: AppTheme,
  variant: InputVariant,
  state: InputState
): string => {
  const states: Record<InputState, string> = {
    default: theme.color.border.default,
    hover: theme.color.border.dark,
    focus: theme.color.border.focused,
    error: theme.color.border.danger,
  };
  
  if (variant === 'error') return states.error;
  if (variant === 'disabled') return theme.color.border.clear;
  if (variant === 'success') return theme.color.border.default;
  return states[state];
};


export const FieldLabel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 4px;
`;

export const OptionalLabel = styled.span`
  font-size: 0.625rem;
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.default};
  font-weight: 600;
  
  &::before {
    content: 'optional';
  }
`;

export const Label = styled.label<{ variant: InputVariant }>`
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.dark};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column nowrap;
  flex: 1;
  min-width: 256px;
  gap: ${({ theme }: { theme: AppTheme }) => theme.spacing.xxsmall}px;
`;

export const InputElement = styled.input<{
  variant: InputVariant;
  $state: InputState;
}>`
  width: 100%;
  padding: ${({ theme }: { theme: AppTheme }) => theme.spacing.xsmall}px;
  border: 1px solid ${({ theme, variant, $state }: { theme: AppTheme; variant: InputVariant; $state: InputState }) =>
    getBorderColor(theme, variant, $state)};
  border-radius: ${({ theme }: { theme: AppTheme }) => theme.radius.sm}px;
  font-size: .875rem;
  background: ${({ theme }: { theme: AppTheme }) => theme.color.background.default};
  color: ${({ theme }: { theme: AppTheme }) => theme.color.content.dark};
  transition: all 0.2s ease;
  letter-spacing: -.028rem;
  
  &::placeholder {
    color: ${({ theme }: { theme: AppTheme }) => theme.color.content.default};
  }
  
  &:hover {
    border-color: ${({ theme, variant }: { theme: AppTheme; variant: InputVariant }) =>
      variant === 'error' 
        ? theme.color.border.danger 
        : theme.color.border.dark};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }: { theme: AppTheme }) => theme.color.border.focused};
    box-shadow: 0 0 0 1px ${({ theme }: { theme: AppTheme }) => theme.color.border.focused};
  }
  
  &:disabled {
    background: ${({ theme }: { theme: AppTheme }) => theme.color.background.light};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const HelperText = styled.span<{ variant: InputVariant }>`
  font-size: 0.75rem;
  color: ${({ theme, variant }: { theme: AppTheme; variant: InputVariant }) =>
    variant === 'error' 
      ? theme.color.content.danger 
      : theme.color.content.default};
  font-weight: 600;
`;
