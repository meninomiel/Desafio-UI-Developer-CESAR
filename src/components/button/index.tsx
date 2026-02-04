import React from 'react';
import type { ButtonProps } from './types';
import { StyledButton, LoadingSpinner } from './styles';

/**
 * Representa um botão interativo que pode ser personalizado através de variantes e estados.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  loading = false,
  onClick
}) => (
  <StyledButton
    type={type}
    variant={variant}
    disabled={disabled || loading}
    onClick={onClick}
    aria-busy={loading}
    aria-disabled={disabled || loading}
  >
    {loading && <LoadingSpinner aria-hidden />}
    {children}
  </StyledButton>
);

export type { ButtonProps, ButtonVariant } from './types';
export default Button;