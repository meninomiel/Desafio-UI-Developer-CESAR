export type ButtonVariant = 'primary' | 'secondary';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  /** Texto do botão */
  children: React.ReactNode;
  
  /** Variante visual */
  variant?: ButtonVariant;
  
  /** Tipo HTML */
  type?: ButtonType;
  
  /** Desabilitado */
  disabled?: boolean;
  
  /** Loading state */
  loading?: boolean;
  
  /** Callback onClick */
  onClick?: () => void;
  
  /** Full width */
  fullWidth?: boolean;
}
