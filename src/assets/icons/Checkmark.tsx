import type { JSX } from "react";

/**
 * Ícone SVG reutilizável de um checkmark. Exportado como constante para uso direto em JSX.
 */
const CHECKMARK_ICON: JSX.Element = 
  <svg 
  width="12" 
  height="12" 
  viewBox="0 0 12 12" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-hidden="false"
  focusable="false">
    <path 
      d="M2.5 5.65365L4.84635 8L4.83442 7.98858L9 4" 
      stroke="#27AE60" 
      strokeWidth="1.5" 
      strokeLinejoin="round"/>
  </svg>

export default CHECKMARK_ICON;