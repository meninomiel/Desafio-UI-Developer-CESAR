export interface MobileMenuButtonProps {
  /** Menu aberto */
  open: boolean;
  
  /** Callback do toggle */
  onToggle: () => void;
}

export interface MobileOverlayMenuItem {
  label: string;
  href: string;
  /** Estado ativo (current page) */
  active?: boolean;
}

export interface MobileOverlayMenuProps {
  /** Itens do menu */
  items: MobileOverlayMenuItem[];
  
  /** Menu aberto/fechado */
  open: boolean;
  
  /** Callback para fechar */
  onClose: () => void;

  /** Item ativo por padrão */
  activeItem?: string;
}

