/** Representa um link de navegação. */
export interface NavigationItem {
  /** Texto/link do item */
  label: string;
  
  /** URL ou rota */
  href: string;
  
  /** Estado ativo (current page) */
  active?: boolean;
}

export interface NavigationProps {
  /** Lista de itens do menu */
  items: NavigationItem[];
  
  /** Item ativo por padrão */
  activeItem?: string;
}
