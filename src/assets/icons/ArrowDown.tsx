import type { JSX } from "react";
import { color } from "../../styles/tokens/colors";

/**
 * Ícone SVG reutilizável (seta para baixo). Exportado como constante para uso direto em JSX.
 */
const ARROW_DOWN_ICON: JSX.Element = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="false"
    focusable="false"
  >
    <title>Arrow down</title>
    <path
      d="M5.33333 6.66669L7.99999 9.33335L10.6667 6.66669"
      stroke={color.border.dark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ARROW_DOWN_ICON;