import { color } from "../../styles/tokens/colors";

const HAMBURGUER_MENU_ICON = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.99625 18.0025H21.0037" stroke={color.border.dark} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M21 12H3" stroke={color.border.dark} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M2.99625 5.99747H13.0004" stroke={color.border.dark} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="17" y="4" width="4" height="4" rx="2" fill={color.background.accent} />
</svg>

export default HAMBURGUER_MENU_ICON;