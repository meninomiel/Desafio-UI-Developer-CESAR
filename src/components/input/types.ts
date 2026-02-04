export type InputVariant = 'default' | 'error' | 'success' | 'disabled';
export type InputState = 'default' | 'hover' | 'focus' | 'error';

export interface TextInputProps {
  /** Rótulo do input */
  label: string;
  
  /** Tipo HTML */
  type?: 'text' | 'email' | 'tel';
  
  /** Valor controlado */
  value?: string;
  
  /** Callback onChange */
  onChange?: (value: string) => void;
  
  /** Estado visual */
  variant?: InputVariant;
  
  /** Placeholder */
  placeholder?: string;
  
  /** ID único */
  id: string;
  
  /** Desabilidado */
  disabled?: boolean;
  
  /** Required */
  required?: boolean;
  
  /** Helper text (error, hint) */
  helperText?: string;

  /** Optional */
  optional?: boolean;
  
}
