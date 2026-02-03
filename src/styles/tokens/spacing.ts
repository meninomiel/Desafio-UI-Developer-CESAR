/**
 * Escala numérica de espaçamentos em pixels.
 * Representa os valores brutos exportados do Figma.
 */
const primitiveSpacing = {
  '0x': 0,
  '0,5x': 2,
  '1x': 4,
  '2x': 8,
  '3x': 12,
  '4x': 16,
  '5x': 20,
  '6x': 24,
  '7x': 28,
  '8x': 32,
  '9x': 36,
  '10x': 40,
} as const;

/**
 * Tokens semânticos de espaçamento.
 * Use estes aliases em vez de valores numéricos diretos.
 */
export const spacing = {
  none: primitiveSpacing['0x'],
  tiny: primitiveSpacing['0,5x'],
  xxsmall: primitiveSpacing['1x'],
  xsmall: primitiveSpacing['2x'],
  small: primitiveSpacing['3x'],
  default: primitiveSpacing['4x'],
  large: primitiveSpacing['5x'],
  xlarge: primitiveSpacing['6x'],
  xxlarge: primitiveSpacing['7x'],
  huge: primitiveSpacing['8x'],
} as const;

/**
 * Tipo dos tokens de espaçamento semântico.
 */
export type SpacingTokens = typeof spacing;