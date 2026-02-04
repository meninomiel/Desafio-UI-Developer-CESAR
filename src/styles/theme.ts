import { color, type ColorTokens } from './tokens/colors';
import { spacing, type SpacingTokens } from './tokens/spacing';
import 'styled-components';

/**
 * Tokens tipográficos globais do sistema.
 */
export const typography = {
  fontFamily:
    "'SF Pro Text', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

/**
 * Tokens de borda globais (radii).
 */
export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
} as const;

/**
 * Theme global da aplicação.
 * Todos os componentes devem consumir apenas esse objeto.
 */
export const theme = {
  color,
  spacing,
  typography,
  radius,
} as const;

/**
 * Tipo raiz do theme, utilizado para tipagem do styled-components.
 */
export type AppTheme = typeof theme;

/**
 * Atalho para os tipos de tokens expostos pelo theme.
 */
export type ThemeColorTokens = ColorTokens;
export type ThemeSpacingTokens = SpacingTokens;


// Estender o tema default do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

