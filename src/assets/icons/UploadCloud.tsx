import type { JSX } from "react";
import { color } from "../../styles/tokens/colors";

/**
 * Ícone SVG reutilizável de upload para a nuvem. Exportado como constante para uso direto em JSX.
 */
const UPLOAD_CLOUD_ICON: JSX.Element = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19V12" stroke={color.border.dark} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.83301 14L12 11.833L14.167 14" stroke={color.border.dark} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H18.56C20.488 19 22.06 17.428 22.06 15.5C22.06 13.572 20.488 12 18.56 12H18.125V11C18.125 7.69 15.435 5 12.125 5C9.148 5 6.68 7.178 6.212 10.023C3.835 10.144 1.94 12.093 1.94 14.5C1.94 16.985 3.955 19 6.44 19H8" stroke={color.border.dark} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export default UPLOAD_CLOUD_ICON;