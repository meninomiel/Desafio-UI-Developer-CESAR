import React from 'react';
import type { ButtonProps } from './types';
import { StyledButton, LoadingSpinner } from './styles';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  loading = false,
  onClick,
  fullWidth = false,
}) => (
  <StyledButton
    type={type}
    variant={variant}
    disabled={disabled || loading}
    onClick={onClick}
    fullWidth={fullWidth}
    aria-busy={loading}
    aria-disabled={disabled || loading}
  >
    {loading && <LoadingSpinner aria-hidden />}
    {children}
  </StyledButton>
);

export type { ButtonProps, ButtonVariant } from './types';
export default Button;