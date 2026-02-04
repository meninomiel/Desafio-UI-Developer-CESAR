/**
 * Escala de cores primitivas do sistema.
 * Não deve ser usada diretamente nos componentes,
 * apenas como base para os tokens semânticos.
 */
const primitive = {
  orange: {
    500: '#ff6002',
  },
  blue: {
    500: '#0b0378',
  },
  yellow: {
    500: '#ffce33',
  },
  purple: {
    500: '#bc0067',
  },
  white: {
    100: '#ffffff',
  },
  gray: {
    100: '#fafafa',
    200: '#f5f5f5',
    300: '#d9d9d9',
    400: '#757575',
    500: '#4b4b4b',
  },
} as const;

/**
 * Tokens semânticos de cor disponíveis para uso nos componentes.
 */
export const color = {

  /** Cores para planos de fundo. */
  background: {
    default: primitive.white[100],
    soft: primitive.gray[100],
    light: primitive.gray[200],
    accent: primitive.orange[500],
    focused: 'rgba(11, 3, 120, 0.46)',
  },

  /** Cores para bordas. */
  border: {
    default: primitive.gray[300],
    dark: primitive.gray[500],
    soft: primitive.gray[200],
    danger: primitive.purple[500],
    focused: 'rgba(11, 3, 120, 0.46)',
    clear: primitive.white[100],
  },

  /** Cores para textos. */
  content: {
    dark: primitive.gray[500],
    default: primitive.gray[400],
    accent: primitive.orange[500],
    danger: primitive.purple[500],
    inverse: primitive.white[100],
  },
} as const;

/**
 * Tipo utilitário para os grupos de cores semânticas.
 */
export type ColorBackgroundTokens = typeof color.background;
export type ColorBorderTokens = typeof color.border;
export type ColorContentTokens = typeof color.content;

/**
 * Tipo geral dos tokens de cor semânticos.
 */
export type ColorTokens = typeof color;