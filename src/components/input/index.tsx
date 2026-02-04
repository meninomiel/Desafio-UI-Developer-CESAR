import type { InputState, TextInputProps } from './types';
import {
  Label,
  InputWrapper,
  InputElement,
  HelperText,
  FieldLabel,
  LabelWrapper,
  OptionalLabel,
} from './styles';
import CHECKMARK_ICON from '../../assets/icons/Checkmark';

export const Input: React.FC<TextInputProps> = ({
  label,
  type = 'text',
  value = '',
  onChange,
  variant = 'default',
  placeholder,
  id,
  disabled = false,
  required = false,
  helperText,
  optional = false,
}) => {
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log('Input sending value:', newValue);
    onChange?.(newValue);
  };

  const inputVariant = disabled ? 'disabled' : variant;

  return (
    <InputWrapper>
      <FieldLabel>
        <LabelWrapper>
          <Label htmlFor={id} variant={inputVariant}>
            {label}
          </Label>
          {inputVariant === 'success' && CHECKMARK_ICON}
        </LabelWrapper>
        {optional && <OptionalLabel />}
      </FieldLabel>
      
      <InputElement
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        variant={inputVariant}
        $state={variant as InputState}
        aria-invalid={variant === 'error'}
        aria-describedby={helperText ? `${id}-helper` : undefined}
      />
      
      {helperText && (
        <HelperText 
          id={`${id}-helper`}
          variant={inputVariant}
          role={variant === 'error' ? 'alert' : undefined}
        >
          {helperText}
        </HelperText>
      )}
    </InputWrapper>
  );
};

export type { TextInputProps, InputVariant } from './types';
export default Input;